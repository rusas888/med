const Products      = require('../models/products')
/**
	Math controller with sum and mul	
*/

function getAll(req, res){
	Products.find({}, (err, result) => {
		if(err) res.send({err: err, data: null}).err(err).end()
			else res.status(200).send({err: null, data: result}).end()
	})
}

function getById(req, res){
	Products.findOne({_id: req.params.id}, (err, result) => {
		if(err) res.send({err: err, data: null}).err(err).end()
			else res.status(200).send({err: null, data: result}).end()
	})
}


function createNew(req, res){
	var newProd = new Products({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		currency: req.body.course
	})

	newProd.save((err, result) => {
		if(err) console.log(err);
		res.status(200).send({err: err, data: result}).end()
	})	
}

function find(req, res){
	// let keywords = req.params.query.split(/\s+/).map(kw => `"${kw}"`).join(' ')
	// console.log(typeof req.params.query)

	Products.find({'$text': {'$search': req.params.query}}, (err, result) => {

		if(!result) res.status(400).send({err: err, data: null}).end()
			else res.status(200).send({err: null, data: result}).end()
	})
}


module.exports = {
    getAll,
    getById,
    createNew,
    find
}