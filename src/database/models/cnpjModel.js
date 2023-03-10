const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Cnpj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		cnpj: {
			type: DataTypes.STRING,
			unique: true,
		},
		companyType: DataTypes.STRING,
	}, {
		tableName: 'Cnpjs'
	});

	return cnpjTable;
};

module.exports = cnpjModel;