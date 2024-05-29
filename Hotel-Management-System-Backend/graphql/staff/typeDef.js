const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = require("graphql");
const hotelType = require("../hotel/typeDef")



const staffType = new GraphQLObjectType({
    name: "staff",
    fields: ()=>({
        id: {type: GraphQLInt},
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        hotels: {type: GraphQLList(hotelType)},

    })
})


module.exports = staffType;