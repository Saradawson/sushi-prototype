'use client'

import { Item, Category } from "@/types/order"

interface OrderButtonProps {
    items: Item[];
    categories: Category[];
}

const OrderButtons: React.FC<OrderButtonProps> = ({ items, categories }) => {

    return (
        <div className="flex, flex-col">
            <h3>Order</h3>
            {categories.map((category) => {
                const filteredItems = items.filter((item) => item.category_id === category.id)
                return(
                    <div key={category.id}>
                        <h4>{category.name}</h4>
                        <div>
                            {filteredItems.map((item) => (
                                <button key={item.name} className="border bg-white p-4 rounded-md">{item.name}</button>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderButtons;