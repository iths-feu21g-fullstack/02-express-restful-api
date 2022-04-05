const express = require('express')
const router = express.Router()

// 5a - 5d
let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

router.get('/', (req, res) => {
	// Allt som skickas med querystring är STRING
	let indexString = req.query.index
	if( indexString === undefined ) {
		res.send( fruits )
		return
	}

	let index = Number(indexString)
	let isValidIndex = (index >= 0) && (index <= fruits.length - 1)
	if( isValidIndex ) {
		res.send( fruits[index] )
		return
	}

	// 404 not found   - ?index=500
	// 400 bad request - ?index=hej  (ogiltigt format)
	if( Number.isInteger(index) && index < 0 ) {
		// index är utanför arrayen
		res.sendStatus(404)
		return
	} else if( Number.isInteger(index) ) {
		// index större än sista index i arrayen
		res.send( fruits[Math.floor(Math.random() * fruits.length)] )
		return
	}
	// troligen NaN - bad request
	res.sendStatus(400)
})

// 5c* Men om ett request innehåller en querystring parameter med namnet index så ska servern skicka tillbaka frukten med det indexet. Tänk på att skicka en lämplig HTTP status code om index inte är ett giltigt index.
// Exempel på request: GET http://localhost:1234/fruits?index=2

// 5d* Om index är för högt ska servern skicka ett slumpvis valt element i arrayen, i stället för en felkod.

module.exports = router
