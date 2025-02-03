//Item Types
export interface Item {
    id: string;
    name: string;
    price: number | null;
    inventory_count: number | null;
    category_id: string;
}

//Category Types
export interface Category {
    id: string;
    name: string;
    default_price: number;
}

//Order Types
export interface OrderItem {
    item_id: string;
    quantity: number;
}

export interface Order {
    id: string;
    items: OrderItem[];
    total_price: number;
    created_at: Date;
}



