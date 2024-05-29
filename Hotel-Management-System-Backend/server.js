const express = require("express")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3002;
const mysqldb = require("./config/dbConnectionmysql");
const app = express();
const errorHandler = require('./middleware/errorHandler');
const ConnectionDb = require("./config/dbConnection");
const {graphqlHTTP} = require("express-graphql");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const staffmutations = require("./graphql/staff/mutations");
const adminmutations = require("./graphql/hotel/mutations");
const staffQuery = require("./graphql/staff/query");
const adminQuery = require("./graphql/hotel/query");
const staffModel = require("./models/staffHotel");
const hotelAdmin = require("./models/hotelModel");
ConnectionDb();
// mysqldb.init();


app.use(express.json());
app.use("/api/users", require("./routes/usersRoute"))
app.use(errorHandler);


staffModel.hasMany(hotelAdmin,{as: "hotels"})
hotelAdmin.belongsTo(staffModel)

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...staffQuery, ...adminQuery,
    }
})

const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields: ()=>({
        ...staffmutations, ...adminmutations
    })
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: Query,
        mutation: Mutation,
    })
}))













app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})