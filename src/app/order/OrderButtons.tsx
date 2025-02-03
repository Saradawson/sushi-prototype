'use client'

import { Item, Category } from "@/types/order"
import { useEffect, useState } from "react";

interface OrderButtonProps {
    items: Item[];
    categories: Category[];
    addItem: (item_id: string) => void;
    removeItem: (item_id: string) => void;
}

const OrderButtons: React.FC<OrderButtonProps> = ({ items, categories, addItem, removeItem, }) => {
    const [items, setItems] = useState<Item[]>;
    const [categories, setCategories] = useState<Category[]>;

    return (
        <div className="flex, flex-col">
            <h3>Order</h3>
            
            {categories?.map((category) => (
                <div key={category.id}>
                    <h4>{category.name}</h4>
                        {items?.map((item) => (
                            <button key={item.name} className="border bg-white p-4 rounded-md">{item.name}</button>
                        ))}
                </div>
            ))}

        </div>
    )
}

export default OrderButtons;