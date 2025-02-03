// 'use client';

// import { useEffect, useState } from 'react';

// interface Order {
//   id: number;
//   user_id: number;
//   items: string;
//   total_price: number; // Ensure total_price is typed as a number
//   created_at: string;
// }

// export default function HomePage() {
  // const [orders, setOrders] = useState<Order[] | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const res = await fetch('/api/orders'); // Make a GET request
  //       if (!res.ok) throw new Error('Failed to fetch orders');
  //       const data = await res.json();
  //       setOrders(data); // Update the state with fetched orders
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false); // Stop the loading state
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  // if (loading) return <p>Loading...</p>;

  // return (
  //   <div className="p-6">
  //     <h1 className="text-2xl font-bold mb-4">All Orders</h1>
  //     {orders && orders.length === 0 ? (
  //       <p>No orders found.</p>
  //     ) : (
  //       <ul className="space-y-4">
  //         {orders?.map((order) => (
  //           <li key={order.id} className="border p-4 rounded-lg shadow-md">
  //             <p><strong>Order ID:</strong> {order.id}</p>
  //             <p><strong>Items:</strong> {order.items}</p>
  //             <p><strong>Total Price:</strong> ${Number(order.total_price).toFixed(2)}</p>
  //             <p className="text-gray-500 text-sm">
  //               <strong>Created At:</strong> {new Date(order.created_at).toISOString()}
  //             </p>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
// }
