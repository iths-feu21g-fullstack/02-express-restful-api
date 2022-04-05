// Importera npm-paket och moduler
// Allmänna inställningar
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = 1177
const tools = require('./routes/tools.js')
const fruits = require('./routes/fruits')  // .js är valfritt
const staticFolder = path.join(__dirname, 'public')


// Middleware
// CORS öppnar vårt projekt så det kan användas från andra domäner
app.use( cors() )

// Parse request body
app.use( express.urlencoded({ extended: true }) )

// Logger - skriv ut information om inkommande request
app.use( (req, res, next) => {
	console.log(`Logger: ${req.method}  ${req.url} `, req.body)
	next()
})

// Serve static files in this folder
app.use( express.static(staticFolder) )



// Routes
app.use('/tools', tools)  // tools är egentligen en Router middleware
app.use('/fruits', fruits)


// Starta server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})