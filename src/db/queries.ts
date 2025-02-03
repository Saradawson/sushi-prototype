// 'use server'

// import sql from './connection';

// // Fetch all orders
// export const getOrders = async () => {
//   return await sql`SELECT * FROM orders ORDER BY created_at DESC;`;
// };

// // Insert a new order
// export const insertOrder = async (userId: number, items: string, totalPrice: number) => {
//   return await sql`
//     INSERT INTO orders (user_id, items, total_price)
//     VALUES (${userId}, ${items}, ${totalPrice})
//     RETURNING *;
//   `;
// };

// // Fetch user by username (for authentication)
// export const getUserByUsername = async (username: string) => {
//   const users = await sql`SELECT * FROM users WHERE username = ${username};`;
//   return users[0]; // Return first result or undefined
// };
