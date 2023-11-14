import { createContext } from "react";

type AuthModalState = {
isOpen: boolean;
type: 'login' | 'register' | 'reset'
}

const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login'
}

export const AuthModalContext = createContext<AuthModalState>(initialAuthModalState);