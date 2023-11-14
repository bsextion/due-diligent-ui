import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user, setUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const welcomeMessage = `Welcome, ${user}`;
  return (
    <nav className='flex w-full bg-brand-blue text-white px-2 items-center h-14'>
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
        {isLoggedIn && (
          <div className='flex flex-1 justify-center items-center w-1/3 h-12 text-lg'>
            {welcomeMessage}
          </div>
        )}
        <div className='flex justify-end px-12 w-1/3'>
          {isLoggedIn && (
            <div>
              <div className='pt-3 px-1'>
                <AiOutlineMenu className='text-white' size={33} />
              </div>
              <div className='p-2'>
                <img src='./avatar.png' className='h-9 ' />
              </div>
            </div>
          )}
          {isLoggedIn ? (
            <Link href='./' className='p-2'>
              <BiLogOut size={33} />
            </Link>
          ) : (
            <button className='m-2 bg-dark-blue-1 w-24 rounded-lg'>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
