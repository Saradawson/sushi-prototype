'use client'

import OrderButtons from "./OrderButtons";
import OrderList from "./OrderList";
import OrderForm from "./OrderForm";
import { useState } from "react";
import { OrderItem } from "@/types/order";


const Order = () => {
    // const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<OrderItem[]>([])


    const addItem = (item: Omit<OrderItem, "id" | "isSelected">) => {
        const newId = order.length > 0 ? order[order.length - 1].id + 1 : 1;
        const newItem = {
            ...item,
            id: newId,
            isSelected: false
        }
        setOrder([...order, newItem]);
        console.log(order);
    }

    // if (loading) return <p>Loading...</p>
    return(
        <div className="w-full h-full flex justify-end">
            <OrderList order={order} setOrder={setOrder}></OrderList>
            <OrderForm></OrderForm>
            <OrderButtons addItem={addItem}></OrderButtons>
        </div>
    )
}

export default Order;