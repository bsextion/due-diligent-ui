import { AuthModalState } from "@/common/constants/types/AuthModalContext";
import { User } from "@/common/constants/types/User";
import React from "react";

type LoginProps = {
  changeTypeHandler: (type: AuthModalState['type']) => void;
};

const Login: React.FC<LoginProps> = ({ changeTypeHandler }) => {
  const [userData, setUserData] = React.useState<{ email: string, password: string }>({
    email: "",
    password: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.email === "" || userData.password === "") {
        alert("Please enter a valid email and password");
      return;
    }
    console.log("user", userData);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
        ...prev, [e.target.name]: e.target.value
    }));
    console.log(userData);
  };


  return (
    <div className="">
      <form className="min-h-min text-center text-white m-1">
        <h3>Sign In</h3>
        <div className="flex flex-col m-5 w-3/5">
          <label htmlFor="email" className="text-sm font-medium m-1 text-left ">
            Enter Email:
          </label>
          <input
          onChange={inputChangeHandler}
            className="bg-light-blue-2 rounded"
            type="email"
            name="email"
            id="email"
          ></input>
        </div>
        <div className="flex flex-col m-5 w-3/5">
          <label htmlFor="email" className="text-sm font-medium m-1 text-left ">
            Enter Password:
          </label>
          <input
          onChange={inputChangeHandler}
            className="bg-light-blue-2 rounded"
            type="password"
            name="password"
            id="password"
          ></input>
        </div>
        <div className="flex flex-row justify-start my-8 px-5 w-full">
          <button onClick={() => changeTypeHandler('login')} type='submit' className="border rounded-md w-2/5 bg-brand-blue " >Log in</button>
        </div>
        <div className="flex flex-row justify-end my-1 pr-4 w-full">
          <a
            className="text-sm hover:text-light-blue-3"
            href="#"
            onClick={() => changeTypeHandler('reset')}>
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-row justify-start my-2 pl-4 w-full">
          <p className="text-sm hover:font-bold">
            Not Registered?
            <a
            
              href="#"
              className="text-light-blue-3"
              onClick={() => changeTypeHandler('register')}>
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
