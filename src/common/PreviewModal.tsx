import React from 'react';
import { Bill } from '@/common/constants/types/Bill';
import { bills } from '@/utils/mockdata/bills';
type PreviewModalProps = {
  title: string;
  bills: Bill[];
};

const PreviewModal: React.FC<PreviewModalProps> = ({ title, bills }) => {
  return (
    <div className='flex flex-col h-6 border-2 rounded-t-lg'>
      <div className='flex justify-center p-2 bg-dark-blue-1 text-white text-lg font-mono rounded-t-lg'>
        {title}
      </div>

      <table className='bg-light-gray-1 w-full'>
        <thead className=''>
          <tr className='w-full'>
            <th scope='1' className='text-left py-3 w-0 font-medium'>
              Name
            </th>
            <th scope='1' className='text-left py-3 w-0 font-medium'>
              Amount
            </th>
            <th scope='1' className='text-left py-3 font-medium'>
              Due
            </th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr
              key={bill.id}
              className={`${index % 2 == 0 ? 'bg-light-blue-1' : ''}`}
            >
              <td scope='col' className='py-2'>
                {bill.name}
              </td>
              <td scope='col' className=' py-2'>
                {bill.amount}
              </td>
              <td scope='col' className='py-2'>
                {bill.dueDate.toDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PreviewModal;
