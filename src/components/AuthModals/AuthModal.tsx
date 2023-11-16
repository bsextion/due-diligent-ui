
  import React, { useContext, useState } from 'react';
  import Login from './Login';
  import Register from './Register';
  import ResetPassword from './ResetPassword';
import { AuthModalContext, AuthModalType } from '../../common/constants/AuthModalContext';
import { IoMdClose } from 'react-icons/io';
  type AuthModalProps = {};

  const AuthModal: React.FC<AuthModalProps> = () => {
    const [user, setUser] = useState(false);
    const {type, isOpen, toggleType, toggleOpen,  } = useContext(AuthModalContext);

    const closeHandler = () => {
      toggleOpen();
    };

    const changeTypeHandler = (type: AuthModalType['type']) => {
      toggleType(type);
      console.log('type ', type);
    };

    return (
      <>
        {isOpen && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
              <div className='flex flex-col flex-1 bg-light-blue-1 w-full h-96 rounded-lg bg-gradient-to-b from-brand-blue-s to-dark-blue-2 mx-6'>
                <div className='flex justify-end'>
                  <button onClick={closeHandler}>
                    <IoMdClose size={22} className='text-light-gray-1' />
                  </button>
                </div>
                {type === 'login' ? (
                  <Login changeTypeHandler={changeTypeHandler}/>
                ) : type === 'register' ? (
                  <Register />
                ) : (
                  <ResetPassword />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default AuthModal;
