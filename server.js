// Importera npm-paket och moduler
const express = require('express')
const app = express()
const PORT = 1177
const tools = require('./routes/tools.js')

// Middleware
app.use( express.urlencoded({ extended: true }) )


// Routes
app.use('/tools', tools)  // tools är egentligen en Router middleware


// Starta server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})