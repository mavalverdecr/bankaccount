const { connect, connection } = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_PORT, DB_NAME} = process.env;

const connectDB = async () => {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    //console.log('MongoDB connected!')
}

connection.on("error", (err) => {
    console.log(err);
});

module.exports = {
    connectDB,
    connection
}