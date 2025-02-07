'use client'

// import { useState } from "react";
import { OrderItem } from "@/types/order";

interface OrderListProps {
    order: OrderItem[];
    setOrder: (order: OrderItem[]) => void;
}


const OrderList = (({ order, setOrder }: OrderListProps) => {
    // const [selectedItems, setSelectedItems] = useState(false);

    const toggleItem = ( id: number) => {
        const updatedOrder = order.map((item, i) =>
            i === id ? { ...item, isSelected: !item.isSelected } : item
          )
          setOrder(updatedOrder);
          console.log(order[id])
        };
    
    // const removeSelectedItems = () => {
    //     const updatedOrder = order.filter((item) => !item.isSelected);
    //     setOrder(updatedOrder);
    //     setSelectedItems(false);  
    // }

    return (
        <div className="w-full h-full border flex flex-col items-center bg-white font-medium">
            <h3 className="text-xl border-y h-12 w-full text-center p-2">Order</h3>
            {
                order.map((item) => {
                    return(
                        <div 
                            key={item.id} 
                            className={`p-2 pl-6 w-full flex flex-row text-start justify-between border cursor-pointer ${item.isSelected ? 'bg-gray-300' : ''}`}
                            onClick={() => toggleItem(item.id)}>
                            <ol>{item.name}</ol>
                            <ol>${item.price.toFixed(2)}</ol> 
                        </div>
                    )
                })
            }
        </div>
    );
})

export default OrderList;