const { GraphQLList, GraphQLInt } = require("graphql");
const { connect } = require("../../config/dbConnectionmysql");
const hotelm = require("../../models/hotelModel");
const hotelType = require("./typeDef");

const getAllAdminrecord = {
    type: new GraphQLList(hotelType),
    resolve: async (parent, args, context, info) => {
        await connect();
        const admin = await hotelm.findAll({
            include: ["user"]
        });
        return todos;
    }
}

const getAdminrecord = {
    type: hotelType,
    args: {
        id: { type: GraphQLInt },
    },
    resolve: async (parent, args, context, info) => {
        await connect();
        const admin = await hotelm.findByPk(args.id, {
            include: ["user"]
        });
        return todo;
    }
}

module.exports = {
    getAllAdminrecord,
    getAdminrecord
}