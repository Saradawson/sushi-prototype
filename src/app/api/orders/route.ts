// src/app/api/orders/route.ts
import { NextResponse } from 'next/server';
import { getOrders } from '@/db/queries'; // Ensure you import the getOrders function

// Handle the GET request for fetching orders
export async function GET() {
  try {
    const orders = await getOrders(); // Fetch orders from your database (e.g., Neon)
    return NextResponse.json(orders); // Return the orders as a JSON response
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json({ error: error }, { status: 500 }); // Return error response
  }
}
