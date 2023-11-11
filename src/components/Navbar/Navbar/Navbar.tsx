import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user, setUser] = React.useState(null);
  const welcomeMessage = `Welcome, ${user}`;
  return (
    <nav className='flex w-full bg-brand-blue text-white px-2 items-center h-14 "shadow-md'>
      <div className='flex justify-between items-center w-full'>
        <Link href='/' className='flex flex-1 h-12 w-1/3'>
          <img
            className='self-center'
            src='/due-logo.png'
            alt='Logo for this app'
            height={100}
            width={150}
          />
        </Link>
        {user && (
          <div className='flex flex-1 justify-center items-center w-1/3 h-12 text-lg'>
            {welcomeMessage}
          </div>
        )}
        <div className='flex justify-end px-12 w-1/3'>
        <div className='p-2'>
            <HiMenu className='text-white' size={35}/>
          </div>
          <div className='p-2'>
            <img src='./avatar.png' className='h-9 '/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
