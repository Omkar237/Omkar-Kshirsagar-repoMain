const {GraphQLObjectType, GraphQLInt, GraphQLString} = require("graphql");

const hotelType = new GraphQLObjectType({
    name: "hotelinfo",
    fields: ()=>({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        // hotelsinfos:,
        userid: {type: GraphQLInt},

    })
})

module.exports = hotelType;