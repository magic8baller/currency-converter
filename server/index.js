import axios from 'axios'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'fs'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import redis from 'redis'
import winston from 'winston'
dotenv.config()
const app = express()

const __dirname = path.dirname(new URL(import.meta.url).pathname);
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}))
app.use(helmet())
const logger = winston.createLogger({
	levels: winston.config.syslog.levels,
	transports: [
		new winston.transports.Console({level: 'error'}),
		new winston.transports.File({
			filename: 'combined.log',
			level: 'info'
		})
	]
});


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, X-Requested-With")
	next()
})

const client = redis.createClient({host: 'localhost', port: 6379})
client.on('error', (error) => {
	logger.log('error', `Error: ${error}`, {timestamp: formattedDate})
	client.quit()
})
let formattedDate = new Date().toISOString()

app.get('/rate/:date', (req, res) => {
	const {date} = req.params
	const countKey = `USD:${date}:count`;
	const ratesKey = `USD:${date}:rates`;

	client.incr(countKey, (err, count) => {
		client.hgetall(ratesKey, function (err, rates) {
			if (rates) {
				return res.json({rates, count});
			}

			axios.get(`https://openexchangerates.org/api/historical/${date}.json?app_id=${process.env.APP_ID}`).then(response => {
				// save the rates to the redis store
				client.hmset(
					ratesKey, response.data.rates, function (err, result) {
						if (err) console.log(err);
					});

				return res.json({
					count,
					rates: response.data.rates
				});
			})
				.catch(error => {
					return res.json(error.response.data)
				});
		});
	});
});

app.get('/currency', (req, res) => {

	client.exists('timestamp', (error, reply) => {
		if (reply === 1) {
			let timeNow = Date.now()
			client.get('timestamp', (error, object) => {
				if (timeNow - new Date(object).getTime() > 3600000) {
					logger.log('info', 'Expired data: refreshing now', {timestamp: formattedDate})
					axios.get(`https://openexchangerates.org/api/latest.json?app_id=${process.env.APP_ID}`)
						.then(result => {
							client.hmset('currentRates', result.data.rates)
							client.set('timestamp', formattedDate)
							res.send(result.data.rates)
							logger.log('info', 'Refreshed data success')

						})
				} else {
					logger.log('info', `Logs up to date. ** Last refresh: ${object} ** Current time: ${formattedDate}`)
					client.hgetall('currentRates', (error, object) => {
						res.send(object)
						logger.log('info', 'Current log unchanged', {timestamp: formattedDate})

					})
				}
			})
		} else {
			logger.log('info', 'No current logs', {timestamp: formattedDate})
			axios.get(`https://openexchangerates.org/api/latest.json?app_id=${process.env.APP_ID}`)
				.then(result => {
					client.set('timestamp', formattedDate)
					client.hmset('currentRates', result.data.rates)
					res.send(result.data.rates)
					logger.log('info', 'Fetched and filled empty log', {timestamp: formattedDate})
				
				})
		}
	})
})

app.listen(process.env.PORT, process.env.HOST, () => {
	console.log(`Server listening: http://${process.env.HOST}:${process.env.PORT}`)
})
