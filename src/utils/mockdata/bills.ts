import { Bill } from '@/common/constants/types/Bill';

export const bills: Bill[] = [
  {
    id: '1',
    name: 'Rent',
    amount: 1000,
    dueDate: new Date(),
    createdAt: new Date(),
    status: 'paid',
  },
  {
    id: '2',
    name: 'CC',
    amount: 300,
    dueDate: new Date(),
    createdAt: new Date(),
    status: 'paid',
  },
  {
    id: '3',
    name: 'Student Loan',
    amount: 589,
    dueDate: new Date(),
    createdAt: new Date(),
    status: 'overdue',
  },
];
