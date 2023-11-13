export type Bill = {
  id: string;
  name: string;
  amount: number;
  dueDate: Date;
  status: 'paid' | 'overdue';
  // createdBy: User["id"];
  createdAt: Date;
};
