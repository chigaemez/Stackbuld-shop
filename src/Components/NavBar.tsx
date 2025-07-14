import { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [showMenu, setShowManu] = useState<boolean>(false)
  return (
    <div className='flex flex-col'>
      
      <div className='flex items-center lg:px-24 px-4 justify-between duration-300 ease-in left-0 z-40 w-full   h-[80px] py-5 '>
        {showMenu && (
          <div className='absolute z-[999] inset-0 flex lg:hidden h-screen bg-black opacity-70 duration-700 ease-in'></div>
        )}
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl flex font-bold text-stone-800 relative  z-50 cursor-pointer duration-300 ease-in '>
            StackShop
          </h1>
        </div>
        <div className='hidden md:hidden lg:flex'>
          <div>
            <ul className='flex items-center gap-9'>
              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                <Link to='/'>Home</Link>
              </li>
              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                <Link to='/shop'>Shop</Link>
              </li>
              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                Blog
              </li>

              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                About
              </li>
              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                Careers
              </li>

              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                FAQ's
              </li>
              <li
                className={
                  'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                }
              >
                Contact
              </li>
            </ul>
          </div>
        </div>

        <Link
          to='/cart'
          className='relative bg-stone-700 py-2 px-7  rounded duration-300 ease-in'
        >
          <BsCart4 className='text-stone-300 text-2xl duration-300 ease-in' />

          <p className='text-lg text-red-600 absolute top-[-4px] right-9 font-extrabold'></p>
        </Link>
        <div className='flex lg:hidden items-center justify-between gap-4'>
          <div
            className= 'flex text-black gap-6 lg:hidden text-2xl z-50 duration-300 ease-in '
            
          >
            <RiMenu2Line />
          </div>
          <Link to='/cart' className='relative z-40'>
            <BsCart4
              className='text-stone-800 text-2xl duration-300 ease-in'
              
            />
            <p className='text-lg text-red-400 absolute top-[-16px] right-1 font-bold'>
              0
            </p>
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-center bg-black h-[55px]'>
        <h1 className='text-white'>Get 15% off on your first order</h1>
      </div>
    </div>
  )
}

export default NavBar
