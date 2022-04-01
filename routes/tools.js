const express = require('express')
const router = express.Router()

// Data
let products = [
	{ name: 'hammare', price: 200, quantity: 5 },
	{ name: 'skruvmejsel', price: 19, quantity: 20 },
	{ name: 'skruvdragare', price: 2000, quantity: 500 },
]

// Routes
// RESTful == har GET, POST, PUT och DELETE
router.get('/', (req, res) => {
	res.send( products )
})

router.post('/', (req, res) => {
	// i vanliga fall bör man kontrollera BODY så den är okej

	console.log('POST /tools/  ', req.body)
	let newProduct = {
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity
	}
	products.push(newProduct)
	res.sendStatus(200)  // POST behöver inte skicka tillbaka någon data
})

router.put('/:name', (req, res) => {
	// :name -> req.params.name
	//  /tools/hello
	//  /tools/chainaw
	// Vilket objekt ska ändras?
	let toBeChanged = req.params.name

	console.log('PUT /tools/  ', req.body)

	// Vilken är den nya datan?
	let newData = {
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity
	}
	// byt ut produkten toBeChanged mot newData
	products.forEach(p => {
		if( p.name === toBeChanged ) {
			p.name = newData.name
			p.price = newData.price
			p.quantity = newData.quantity
		}
	})
	// res.status(200).send(data)  - PUT behöver inte skicka tillbaka data
	res.sendStatus(200)
})

router.delete('/:name', (req, res) => {
	// :name fungerar som id, väljer ut vilken produkt som ska tas bort
	let toBeDeleted = req.params.name

	products = products.filter(p => p.name !== toBeDeleted)
	// products = products.filter(p => { return p !== toBeDeleted }) - detta går lika bra
	res.sendStatus(200)
})


module.exports = router
