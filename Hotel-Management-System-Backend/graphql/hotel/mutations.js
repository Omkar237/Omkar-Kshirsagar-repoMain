const { GraphQLString, GraphQLNonNull, GraphQLInt} = require("graphql");
const hotelType = require("../hotel/typeDef");
const {connect} = require("../../config/dbConnectionmysql");
const hotelmodel = require("../../models/hotelModel");

const createadminHotel = {
    type: hotelType,
    args:{
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        userid: {type: GraphQLNonNull(GraphQLInt)},
    },
    reslove: async (parent, args, context, info)=>{
        await connect();
        const admin = await hotelmodel.create(args);
        return admin;
    }
}


const updateadminHotel = {
    type: hotelType,
    args: {
        title: {type: GraphQLNonNull(GraphQLInt)},
        description: {type: GraphQLString},
    },
    reslove: async (parent, args, context, info)=>{
        await connect();
        const updateAdmin = await hotelmodel.update(args,{
            where:{
                id: args.id
            }
        })
        return updateAdmin;
    }
}



const deleteAdminHotel = {
    type: GraphQLString,
    args: {
        id: {type: GraphQLNonNull(GraphQLInt)},
    },
    reslove: async (parent, args, context, info)=>{
        await connect();
        const deleteAdmin = await hotelmodel.destroy({
            where: {
                id: args.id,
            }
        })
        return "adminEntry Deleted Successfully"
    }
}


module.exports = {
    createadminHotel,
    updateadminHotel,
    deleteAdminHotel
}