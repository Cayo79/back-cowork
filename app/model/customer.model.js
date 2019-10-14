module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
		firstname: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		}
	});

	return Customer;
}