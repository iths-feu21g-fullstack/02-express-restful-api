// Importera npm-paket och moduler
// Allmänna inställningar
const express = require('express')
const app = express()
const PORT = 1177
const tools = require('./routes/tools.js')
const fruits = require('./routes/fruits')


// Middleware
// Parse request body
app.use( express.urlencoded({ extended: true }) )

// Logger - skriv ut information om inkommande request
app.use( (req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.body)
	next()
})

// Serve static files in this folder
app.use( express.static('public') )



// Routes
app.use('/tools', tools)  // tools är egentligen en Router middleware
app.use('/fruits', fruits)


// Starta server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})