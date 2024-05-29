const { DataTypes } = require("sequelize");
const db = require("../config/dbConnectionmysql");
const hotelmodelinfo = require("./hotelModel");


const staffmodel = db.sequelize.define("hotelStaffInfo", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    firstname: DataTypes.STRING,
    password: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
});

staffmodel.hasMany(hotelmodelinfo, {as: 'hotels'});
module.exports = staffmodel;
