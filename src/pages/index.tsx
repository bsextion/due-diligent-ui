import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import CalendarCanvas from '@/components/Calendar/CalendarCanvas'
import PreviewModal from '@/common/PreviewModal'
import { bills } from '@/utils/mockdata/bills'
import { Bill } from '@/common/constants/types/Bill'


export default function Home() {
  const billsData: Bill[] = bills;
  return (
    <main className='bg-light-gray-2 min-h-screen'>
    <Navbar/>
    <div className='flex items-center justify-around min-w-screen h-96 m-2 p-2'>
      <div className='flex flex-col h-full w-96 justify-between' >
      <PreviewModal title='Upcoming Bills (Next 30 Days)' bills={billsData}/>
      <PreviewModal title='Overdue Bills (Past 30 Days)' bills={billsData }/>
      </div>
      <CalendarCanvas/>
    </div>
    </main>

  )
}
