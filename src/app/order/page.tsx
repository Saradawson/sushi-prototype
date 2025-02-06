'use client'

import OrderButtons from "./OrderButtons";
import { useEffect, useState } from "react";
import { Item, Category } from "@/types/order";


const Order= () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/order');
                if (!res.ok) throw new Error('Failed to fetch Categories');
                const data = await res.json();
                setCategories(data.categories);
                setItems(data.items);
            } catch (error){
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>
    return(
        <div>
            <OrderButtons categories={categories} items={items}></OrderButtons>
        </div>
    )
}

export default Order;