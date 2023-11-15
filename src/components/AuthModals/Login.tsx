import React from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
  return (
    <div className=''>
      <form className='min-h-min text-center text-white m-1'>
      <h3>Sign In</h3>
      <div className='flex flex-col m-5 w-3/5'>
        <label htmlFor='email' className='text-sm font-medium m-1 text-left '>Enter Email:</label>
        <input className='bg-light-blue-2 rounded' type='email' name='email' id='email'></input>
        </div>
        <div className='flex flex-col m-5 w-3/5'>
        <label htmlFor='email' className='text-sm font-medium m-1 text-left '>Enter Password:</label>
        <input className='bg-light-blue-2 rounded' type='email' name='email' id='email'></input>
        </div>
        <div className='flex flex-row justify-start my-9 px-5 w-full'>
        <button className='border rounded-md w-2/5 '>Log in</button>
        </div>
        <div className='flex flex-row justify-end my-1 pr-4 w-full'>
        <a className='text-sm hover:text-light-blue-3' href='#'>Forgot Password?</a>
        </div>
        <div className='flex flex-row justify-start my-2 pl-4 w-full'>
        <p className='text-sm hover:font-bold'>Not Registered?<a href='#' className='text-light-blue-3'> Create Account</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
