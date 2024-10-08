#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const sslConfig = isProduction ? "?sslmode=require" : "";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 32 ),
  message VARCHAR ( 255 ),
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

function getArgumentValue(flag, defaultValue) {
	const index = process.argv.indexOf(flag);
	return index > -1 ? process.argv[index + 1] : defaultValue;
}

async function main() {
	console.log("seeding...");

	const user = getArgumentValue("--user", process.env.USER);
	const password = getArgumentValue("--password", process.env.PASSWORD);
	const host = getArgumentValue("--host", process.env.HOST);
	const database = getArgumentValue("--database", process.env.DATABASE);

	const client = new Client({
		connectionString: `postgresql://${user}:${password}@${host}:5432/${database}${sslConfig}`,
		ssl: isProduction ? { rejectUnauthorized: false } : false,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("seeding complete");
}

main();
