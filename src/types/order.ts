//Item Types
export interface Item {
    id: string;
    name: string;
    price: number;
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
    id: number// Unique identifier
    name: string
    price: number
    isSelected: boolean
}

export interface SubmittedOrder {
    id: number;
    items: [];
    total_price: number;
    sent_at: Date | null;
}



