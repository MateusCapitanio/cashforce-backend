'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Cnpjs', [
			{
				id: 1,
				cnpj: '00000000000001',
				companyType: '2',
				createdAt: '2020-10-29 21:20:33',
				updatedAt: '2020-10-29 21:20:33',
			},
			{
				id: 2,
				cnpj: '00000000000002',
				companyType: '1',
				createdAt: '2020-10-29 21:20:33',
				updatedAt: '2020-10-29 21:20:33',
			},

		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Cnpjs', null, {});
	}
};
