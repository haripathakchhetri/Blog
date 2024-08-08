import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  }

  return (
    <div className='bg-black text-white px-5 py-3 flex justify-between items-end  sm:items-start'>

      <div>
        <h1 className='text-xl'>Blog Slice</h1>

        {/* only show dropdown in mobile and toggle value true   */}
        {show && <nav className='mt-1 hidden sm:flex'>
          <NavLink className='underline underline-offset-4'>AddBlog</NavLink>
        </nav>}


      </div>


      {/* button depend on toggle value */}
      {show ?

        <button onClick={handleToggle} className='hidden sm:flex mt-1'><HiOutlineX size={22} /></button> :


        <button onClick={handleToggle} className='hidden sm:flex mt-1'><FaBars size={22} /></button>}




      <nav className='sm:hidden'>
        <NavLink to='/add-blog'>AddBlog</NavLink>
      </nav>




    </div>
  )
}

export default Header