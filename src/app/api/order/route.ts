import { NextResponse } from 'next/server';
import { getCategories, getItems } from '@/db/queries';

// Handle the GET request for fetching catagories
export async function GET() {
  try {
      // Fetch categories and items concurrently
      const [categories, items] = await Promise.all([
          getCategories(),
          getItems(),
      ]);

      return NextResponse.json({ categories, items });
  } catch (error) {
      console.error("Database error:", error);
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

// // Handle the GET request for fetching catagories
// export async function handleGetItems() {
//   try {
//     const items = await getItems(); // Fetch items from your database (e.g., Neon)
//     return NextResponse.json(items); // Return the items as a JSON response
//   } catch (error) {
//     console.error(error); // Log the error
//     return NextResponse.json({ error: error }, { status: 500 }); // Return error response
//   }
// }
