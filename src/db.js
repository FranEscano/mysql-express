import { createConnection } from 'mysql2'
import dotenv from 'dotenv'

// require('dotenv').config()
dotenv.config()

const database = createConnection({
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export default database