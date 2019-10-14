module.exports = (sequelize, Sequelize) => {
	const ConferenceHall = sequelize.define('conference', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		name: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		numPersons: {
			type: Sequelize.INTEGER
		}
	});

	return ConferenceHall;
}