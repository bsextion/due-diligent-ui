import { User } from "@/common/constants/types/User";
import React from "react";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
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
    console.log("user");
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
        <div className="flex flex-row justify-start my-9 px-5 w-full">
          <button className=" rounded-md w-2/5 bg-brand-blue">Register</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
