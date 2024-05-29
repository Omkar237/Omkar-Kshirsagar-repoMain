const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projectexpress", "root", "omkar@123", {
    dialect: "mysql",
    host: "localhost",
})

function init(){
    const StaffHotel = require("../models/staffHotel");
    const hotelModel = require("../models/hotelModel");
    sequelize.sync({
        alert: true
    }).then((res)=>{
        console.log("Database connection successfull!!!");
    }).catch((err)=> console.log("Errors", err))
}

async function connect(){
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully!!!");
    }catch(error){
        console.log("unable to connect", error);
    }
}

function close(){
    sequelize.close();
}

module.exports ={
    init,
    connect,
    close,
    sequelize,
}