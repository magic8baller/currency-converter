import axios from 'axios';
export const fetchExchangeData = () => {
	return axios.get('http://localhost:8080/currency');
};
export const fetchCurrencyData = () => {
	return axios.get("https://openexchangerates.org/api/currencies.json")
};

export const fetchHistoricalRate = (date) => {
	return axios.get(`http://localhost:8080/rate/${date}`)
}