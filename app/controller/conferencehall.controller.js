const db = require('../config/db.config.js');
const Hall = db.conferencehall;

// Init data
exports.init = (req, res) => {
	Hall.create({
		name: "Orinoco",
		description: "Salon Principal",
		numPersons: 10
	}).then(sal => {
		res.send(sal);
	});
};

// Post a Hall
exports.create = (req, res) => {	
	// Save to MySQL database
	Hall.create({  
	  name: req.body.name,
	  description: req.body.description,
	  numPersons: req.body.numPersons
	}).then(salida => {		
		// Send created hall to client
		res.send(salida);
	});
};
 
// FETCH all Halls
exports.findAll = (req, res) => {
	Hall.findAll().then(salida => {
	  // Send all halls to Client
	  res.send(salida);
	});
};

// Find a Hall by Id
exports.findById = (req, res) => {	
	Hall.findById(req.params.id).then(salida => {
		res.send(salida);
	})
};
 
// Update a Hall
exports.update = (req, res) => {
	const id = req.params.id;
	Hall.update( { name: req.body.name, description: req.body.description, numPersons: req.body.numPersons }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a hall with id = " + id);
				   });
};
 
// Delete a Hall by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Hall.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a hall with id = ' + id);
	});
};