
import knex from "knex";

const deploy = process.env.NODE_ENV || "development"

const config = require("../../knexfile")[deploy];

const connection = knex(config)

if(deploy !== 'test'){
    connection.migrate.latest()
}
    
export default  connection;