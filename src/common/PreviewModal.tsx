import React from 'react';
import { Bill } from '@/utils/types/Bill';
import { bills } from '@/utils/mockdata/bills';
type PreviewModalProps = {
  title: string;
  bills: Bill[];
};

const PreviewModal: React.FC<PreviewModalProps> = ({ title, bills }) => {
  return (
    <div>
      {title}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.name}</td>
              <td>{bill.amount}</td>
              <td>{bill.dueDate.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PreviewModal;
