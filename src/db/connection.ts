import { Pool } from "pg";

// Create a PostgreSQL connection pool
export const db = new Pool({
    connectionString: process.env.DATABASE_URL, // Use the connection string from .env
    ssl: {
        rejectUnauthorized: false, // Required for Neon-hosted databases
    },
});

