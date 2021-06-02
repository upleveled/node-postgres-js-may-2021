import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read the PostgreSQL secret connection information
// (host, database, username, password) from the .env file
dotenvSafe.config();

// Connect to the database
const sql = postgres();

// Perform a first query
async function getUsers() {
  const users = await sql`SELECT * FROM users`;
  return users.map((user) => camelcaseKeys(user));
}

const allUsers = await getUsers();

console.log(allUsers);

console.log('first user, first name:', allUsers[0].firstName);

// ONLY FOR DEMO PURPOSES
// DO NOT COPY
sql.end();
