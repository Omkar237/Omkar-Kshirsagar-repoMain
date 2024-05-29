const { GraphQLString } = require("graphql");
const staffType = require("./typeDef");
const bcrypt = require("bcrypt");
const {connect} = require("../../config/dbConnectionmysql");
const Staff = require("../../models/staffHotel");

const createUser = {
    type: staffType,
    args: {
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    resolve: async (parent, args, context, info)=>{
        args.password = bcrypt.hashSync(args.password, 10);
        await connect();
        const staff = await Staff.create(args);
        return staff;


    }
}

module.exports = {createUser}