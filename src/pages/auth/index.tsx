import { AuthModalContext } from '@/common/constants/types/AuthModalContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

type AuthProps = {};

const AuthPage:React.FC<AuthProps> = () => {
    const [user, setUser] = useState(false); //use custom hook to call backend
    const router = useRouter();
    const authModal = useContext(AuthModalContext);

    useEffect(() => {
        if (user) {
            console.log('user is logged in');
            router.push('/');
        }
    }, [user,router]);
    return (<>
    <div>Welcome to the div page</div>
    {authModal.isOpen && <div>Auth Modal</div>}
    </>)
}
export default AuthPage;