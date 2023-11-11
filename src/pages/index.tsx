import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar/Navbar'


export default function Home() {
  return (
    <main className='bg-dark-gray-8 min-h-screen'>
    <Navbar/>
    </main>

  )
}
