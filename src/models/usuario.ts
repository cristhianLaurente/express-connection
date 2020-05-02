import { Sequelize, DataTypes } from 'sequelize';

export const usuario_model: Function = (connection : Sequelize) => {
    const modelo = connection.define('Usuarios', {
        usu_id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        usu_name: {type: DataTypes.STRING},
        usu_ape: {type: DataTypes.STRING},
        usu_hobbit: {type: DataTypes.STRING},
        usu_mascota: {type: DataTypes.STRING}
    },{
        tableName: 't_usuario'
    });
    return modelo
}