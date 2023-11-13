type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    bills: Bill[];
    createdAt: Date;
    updatedAt: Date;
}