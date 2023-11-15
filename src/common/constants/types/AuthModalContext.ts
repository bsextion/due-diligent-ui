import { createContext } from "react";

export type AuthModalState = {
isOpen: boolean;
type: 'login' | 'register' | 'reset';
toggleType: () => void;
toggleOpen: () => void;
}


export const AuthModalContext = createContext<AuthModalState>({} as AuthModalState);