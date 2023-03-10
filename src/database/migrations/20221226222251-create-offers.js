'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Offers', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			tax: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			tariff: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adValorem: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			float: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			iof: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			expiresIn: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			paymentStatusSponsor: {
				type: Sequelize.TINYINT(1),
				defaultValue:0,
			},
			paymentStatusProvider: {
				type: Sequelize.TINYINT(1),
				defaultValue:0,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			orderId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
			sponsorId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Offers');
	}
};