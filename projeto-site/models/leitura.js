'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		id: {
			field: 'idDados',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		ram : {
			field: 'ram',
			type: DataTypes.REAL,
			allowNull: false
		},
		temperatura: {
			field: 'temperatura',
			type: DataTypes.REAL,
			allowNull: false
		},
		processador: {
			field: 'processador',
			type: DataTypes.REAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		dataDado: {
			field: 'dataDado',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		fkMaquina: {
			field: 'fkMaquina',
			type: DataTypes.REAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'leitura', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
