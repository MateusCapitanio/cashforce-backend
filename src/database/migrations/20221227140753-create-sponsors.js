'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Sponsors', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			tradingName: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			cashforceTax: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			responsibleName: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			responsibleEmail: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			responsiblePosition: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			responsiblePhone: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			responsibleMobile: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			website: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			postalCode: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			address: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			number: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			complement: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			neighborhood: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			city: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			state: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			bank: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			bankAgency: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			account: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			phoneNumber: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			situation: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			situationDate: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			cnpjId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
			email: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Sponsors');
	}
};
