export interface Order{
    id: number;
    productid: number;
    productName: string;
    quantity: number;
    price: number;
    orderDate: Date;
    deliveryDate: Date;
}