// Importera npm-paket och moduler
const express = require('express')
const app = express()
const PORT = 1177
const tools = require('./routes/tools.js')

// Middleware
// Parse request body
app.use( express.urlencoded({ extended: true }) )

// Logger - skriv ut information om inkommande request
app.use( (req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.body)
	next()
})

app.use( express.static('public') )


// Routes
app.use('/tools', tools)  // tools är egentligen en Router middleware


// Starta server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})