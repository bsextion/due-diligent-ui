import { AuthModalState } from "@/common/constants/types/AuthModalContext";
import { User } from "@/common/constants/types/User";
import React from "react";

type RegisterProps = {
    changeTypeHandler: (type: AuthModalState['type']) => void;
};

const Register: React.FC<RegisterProps> = ({changeTypeHandler}) => {
  const [userData, setUserData] = React.useState<User>({
    id: "",
    firstName: "",
    email: "",
    password: "",
    bills: [],
    createdAt: new Date(),
    updatedAt: new Date(),
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

  const clickHandler = () => {

  }

  return (
    <div className="">
      <form className="min-h-min text-center text-white m-1" onSubmit={submitHandler}>
        <h3>Register</h3>
        <div className="flex flex-col m-5 w-3/5">
          <label htmlFor="email" className="text-sm font-medium m-1 text-left ">
            Enter First Name:
          </label>
          <input
          onChange={inputChangeHandler}
            className="bg-light-blue-2 rounded"
            type="firstName"
            name="firstName"
            id="firstName"
          ></input>
        </div>
        <div className="flex flex-col m-5 w-3/5">
          <label htmlFor="email" className="text-sm font-medium m-1 text-left ">
            Enter Email Address:
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
          <button type="submit" className=" rounded-md w-2/5 bg-brand-blue">Register</button>
        </div>
         <div className="flex flex-row justify-start my-2 pl-4 w-full">
          <p className="text-sm hover:font-bold">
            Already have an Account?
            <a
            
              href="#"
              className="text-light-blue-3"
              onClick={() => changeTypeHandler('login')}>
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
