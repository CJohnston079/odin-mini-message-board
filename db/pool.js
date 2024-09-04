require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

module.exports = new Pool({
	host: process.env.HOST,
	user: process.env.USER,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: 5432,
	ssl: isProduction
		? {
				rejectUnauthorized: false,
				require: true,
		  }
		: false,
});
