const notFound = (req, res, next) => {
	console.log('1')
	const err = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404)
	next(err)
}

const errorHandler = (err, req, res, next) => {
	console.log('2')
	const status = res.statusCode === 200 ? 500 : res.statusCode
	res.status(status)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}

export { notFound, errorHandler }
