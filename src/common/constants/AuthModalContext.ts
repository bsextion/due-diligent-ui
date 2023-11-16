import { createContext } from "react";

export type AuthModalType = {
isOpen: boolean;
type: 'login' | 'register' | 'reset';
toggleType: (type: AuthModalType['type']) => void;
toggleOpen: () => void;
}


export const AuthModalContext = createContext<AuthModalType>({} as AuthModalType);