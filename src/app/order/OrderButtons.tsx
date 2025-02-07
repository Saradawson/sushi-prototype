'use client'

import { Item, Category, OrderItem } from "@/types/order"
import { useState, useEffect } from "react";

const initialItems = [
    {
        id: 'sake maki',
        name: 'sake maki',
        price: 10.00,
        inventory_count: null,
        category_id: 'makis',
    },
    {
        id: 'hamachi maki',
        name: 'hamachi maki',
        price: 10.00,
        inventory_count: null,
        category_id: 'makis',
    },
    {
        id: 'maguro maki',
        name: 'maguro maki',
        price: 10.00,
        inventory_count: null,
        category_id: 'makis',
    },
    {
        id: 'dragon roll',
        name: 'dragon roll',
        price: 11.00,
        inventory_count: null,
        category_id: 'rolls',
    },{
        id: 'philly roll',
        name: 'philly roll',
        price: 11.00,
        inventory_count: null,
        category_id: 'rolls',
    },
]

const initialCategories = [
    {
        id: 'makis',
        name: 'makis',
        default_price: 10.00,
    },
    {
        id: 'rolls',
        name: 'rolls',
        default_price: 11.00,
    },
]

interface OrderButtonProps {
    addItem: (item: Omit<OrderItem, "id" | "isSelected">) => void;
}

const OrderButtons = ({ addItem }: OrderButtonProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [items, setItems] = useState<Item[]>([]);

    // useEffect(() => {
        //     const fetchData = async () => {
        //         try{
        //             const res = await fetch('/api/order');
        //             if (!res.ok) throw new Error('Failed to fetch Categories');
        //             const data = await res.json();
        //             setCategories(data.categories);
        //             setItems(data.items);
        //         } catch (error){
        //             console.log(error)
        //         } finally {
        //             setLoading(false);
        //         }
        //     }
        //     fetchData();
        // }, []);
    
        useEffect(() => {
            setItems(initialItems);
            setCategories(initialCategories);
        }, [])

    return (
        <div className="w-1/2 h-full">
            <h3>Order</h3>
            {categories.map((category) => {
                const filteredItems = items.filter((item) => item.category_id === category.id)
                return(
                    <div key={category.id}>
                        <h4 className="text-gray-500">{category.name}</h4>
                        <div>
                            {filteredItems.map((item) => (
                                <button
                                    key={item.name} 
                                    className="border bg-white p-4 rounded-md"
                                    onClick={() => addItem(item)}
                                    >
                                        {item.name}</button>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderButtons;