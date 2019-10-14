const db = require('../config/db.config.js');
const Assigned = db.assignedhall;

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Post a Assigned
exports.create = (req, res) => {
	// Save to MySQL database
	Assigned.create({
		idSala: req.body.idSala,
		beginDate: req.body.beginDate,
		endDate: req.body.endDate
	}).then(salida => {
		// Send created assigned hall to client
		res.send(salida);
	});
};

exports.validar = (req, res) => {
	Assigned.findAll({
		where: {
			idSala: req.body.idSala,
			[Op.or]: [
				{
					beginDate: { [Op.lte]: req.body.beginDate },
					endDate: { [Op.gt]: req.body.beginDate },
				}, {
					beginDate: { [Op.lt]: req.body.endDate },
					endDate: { [Op.gte]: req.body.endDate },
				}, {
					beginDate: { [Op.gt]: req.body.beginDate },
					endDate: { [Op.lt]: req.body.endDate },
				}
			]
		}
	}).then(salida => {
		// Send all assigned halls to Client
		res.send(salida);
	});
};

// FETCH all Assigned Halls
exports.findAll = (req, res) => {
	Assigned.findAll({
		order: [['beginDate', 'ASC']]
	}).then(salida => {
		// Send all assigned halls to Client
		res.send(salida);
	});
};

// Find a Assigned by Id
exports.findById = (req, res) => {
	Assigned.findById(req.params.id).then(salida => {
		res.send(salida);
	})
};

// Update a Assigned Hall
exports.update = (req, res) => {
	const id = req.params.id;
	Assigned.update({ idSala: req.body.idSala, beginDate: req.body.beginDate, endDate: req.body.endDate },
		{ where: { id: req.params.id } }
	).then(() => {
		res.status(200).send("updated successfully a assigned hall with id = " + id);
	});
};

// Delete a Assigned by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Assigned.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a assigned hall with id = ' + id);
	});
};