const { DataTypes } = require("sequelize");
const db = require("../config/dbConnectionmysql");
const staffHotel = require("./staffHotel");


const hotelmodel = db.sequelize.define("hotelinfonew", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
},{
    timestamps: true,
});

module.exports = hotelmodel;