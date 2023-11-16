import { Bill } from "./Bill";

export type User = {
    id: string;
    firstName: string;
    email: string;
    password: string; 
    bills: Bill[];
    createdAt: Date;
    updatedAt: Date;
}