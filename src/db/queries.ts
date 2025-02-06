'use server'

import { db } from "./connection"; // Import the database connection

// Fetch all categories
export const getCategories = async () => {
    const result = await db.query("SELECT * FROM categories");
    return result.rows;
};

// Fetch all items
export const getItems = async () => {
    const result = await db.query("SELECT * FROM items");
    return result.rows;
};
