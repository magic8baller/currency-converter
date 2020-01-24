
export const formatDate = (date) => {
	const options = {month: '2-digit', day: '2-digit', year: '2-digit'}
	return date.toLocaleDateString('en-US', options)
}