import { AuthModalContext } from '@/common/constants/types/AuthModalContext';
import AuthModal from '@/components/AuthModals/AuthModal';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

type AuthProps = {
    
};

const AuthPage: React.FC<AuthProps> = () => {
  const [user, setUser] = useState(false); //use custom hook to call backend
  const router = useRouter();
  const authModal = useContext(AuthModalContext);

  const routeToHome = () => {
    if (user) {
      console.log('user is logged in');
      router.push('/');
    }
  };
  useEffect(() => {
    routeToHome();
  }, [user, router]);
  return (
    <div className='bg-light-gray-2 min-h-screen'>
      {<AuthModal/>}
    </div>
  );
};
export default AuthPage;
