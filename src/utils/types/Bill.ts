export type Bill = {
    id: string;
    name: string;
    amount: number;
    dueDate: Date;
    // createdBy: User["id"];
    createdAt: Date;
}