module.exports = (sequelize, Sequelize) => {
	const AssignedHall = sequelize.define('assigned', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		idSala: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		beginDate: {
			allowNull: false,
			type: Sequelize.DATE
		},
		endDate: {
			allowNull: false,
			type: Sequelize.DATE
		}
	});

	return AssignedHall;
}