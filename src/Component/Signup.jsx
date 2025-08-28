import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (

    <div className='bg-[#373737] text-center p-6 rounded-x1 shadow flex items-center justify-center min-h-screen'>
    <div className='bg-[#0a0a0a] text-center p-6 rounded-md shadow-lg w-96 relative'>
        <div className='text-white font-bold text-3xl'>Sign In</div>

        <form className='mt-4'>
            <input type="text" placeholder='Username' id='firtname' required className='w-[250px] p-2 mb-3 rounded bg-[#525252] text-white focus:outline-none' />
            <input type="email" placeholder='Email' id='email' required className='w-[250px] p-2 mb-3 rounded bg-[#525252] text-white focus:outline-none' />
            <input type="password" placeholder='Password' id='password' required className='w-[250px] p-2 mb-8 rounded bg-[#525252] text-white focus:outline-none' />
        </form>
       <Link to="/homepage"><button className='w-[250px] bg-[#ff3c00] text-white p-2 rounded hover:bg-[#e63600] transition duration-300'>Sign In</button></Link>

    </div>
    </div>

  )
}

export default Signup
