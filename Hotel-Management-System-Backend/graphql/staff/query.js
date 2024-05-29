const { GraphQLInt } = require("graphql");
const staffType = require("./typeDef");
const {connect} = require("../../config/dbConnectionmysql");
const staffmodel = require("../../models/staffHotel");

const getStaff = {
    type: staffType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: async (parent, args, context, info)=>{
        await connect();
        const user = await staffmodel.findByPk(args.id, {
            include: ["hotels"]
        });
        return user;
    }
}

module.exports = {getStaff};