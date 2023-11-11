import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar/Navbar'
import Calendar from '@/components/Navbar/Calendar/Calendar'


export default function Home() {
  return (
    <main className='bg-dark-gray-8 min-h-screen'>
    <Navbar/>
    <div className='flex items-center justify-center min-w-screen h-96 m-6 p-3'>
      <Calendar/>
    </div>
    </main>

  )
}
