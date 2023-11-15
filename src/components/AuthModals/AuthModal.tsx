import { AuthModalContext } from '@/common/constants/types/AuthModalContext';
import React, { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [user, setUser] = useState(false); //use custom hook to call backend
  const { isOpen, type, toggleOpen, toggleType } = useContext(AuthModalContext); //use custom hook to call backend

  const handleOnClose = () => {
    toggleOpen();
  };
  
  return (
    <div>
      {isOpen && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'>
          <div className=' w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
            <div
              className='flex-row flex-1 bg-light-blue-1 w-full h-96 rounded-lg bg-gradient-to-b from-brand-blue-s to-dark-blue-2
                         mx-6'
            >
              <div className='flex justify-end p-2'>
                <button onClick={handleOnClose}>
                  <IoMdClose size={22} className='text-light-gray-1'/>
                </button>
              </div>
              

              {type === 'login' ? (
                                <Login />
                            ) : type === 'register' ? (
                                <Register />
                            ) : (
                                <ResetPassword />
                            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AuthModal;
