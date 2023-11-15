import { AuthModalContext } from '@/common/constants/types/AuthModalContext';
import React, { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [user, setUser] = useState(false); //use custom hook to call backend
  const { isOpen, type, toggleType, toggleOpen } = useContext(AuthModalContext); //use custom hook to call backend

  return (
    <div>
      {isOpen && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'>
          <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
            <div
              className='flex justify-end bg-light-blue-1 w-full h-96 rounded-lg bg-gradient-to-b from-brand-blue-s to-dark-blue-1
         mx-6'
            >
              <div className='flex flex-column justify-end w-full h-5 p-2 '>
                <button onClick={toggleOpen}>
                  <IoMdClose size={22} className='text-light-gray-1' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AuthModal;
