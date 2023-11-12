import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import CalendarCanvas from '@/components/Calendar/CalendarCanvas'


export default function Home() {
  return (
    <main className='bg-light-gray-1 min-h-screen'>
    <Navbar/>
    <div className='flex items-center justify-end min-w-screen h-96 m-2 p-3'>
      
      <CalendarCanvas/>
    </div>
    </main>

  )
}
