import { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
   
  ]

  return (
    <div className='flex flex-col'>
      {/* Top Nav */}
      <div className='flex items-center lg:px-24 px-4 justify-between h-[80px] py-5 relative z-50'>
        <h1 className='text-3xl font-bold text-stone-800 cursor-pointer'>StackShop</h1>

        {/* Desktop Nav */}
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-9'>
            {navLinks.map(link => (
              <li key={link.name} className='text-lg text-black hover:text-gray-600 font-medium'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Cart */}
        <Link
          to='/cart'
          className='hidden lg:flex relative bg-stone-700 py-2 px-5 rounded'
        >
          <BsCart4 className='text-stone-300 text-2xl' />
        </Link>

        {/* Mobile Menu + Cart */}
        <div className='flex lg:hidden items-center gap-4'>
          <button onClick={() => setShowMenu(prev => !prev)}>
            {showMenu ? (
              <RiCloseLine className='text-3xl text-black' />
            ) : (
              <RiMenu2Line className='text-3xl text-black' />
            )}
          </button>
          <Link
            to='/cart'
            className='relative bg-stone-700 py-2 px-5 rounded'
          >
            <BsCart4 className='text-stone-300 text-2xl' />
          </Link>
        </div>

        {/* Overlay */}
        {showMenu && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={() => setShowMenu(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-[280px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            showMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className='flex flex-col mt-20 space-y-6 px-6'>
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setShowMenu(false)}
                  className='text-lg text-gray-800 hover:text-gray-500'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Promo Bar */}
      <div className='flex items-center justify-center bg-black h-[55px]'>
        <h1 className='text-white text-center text-sm md:text-base'>
          Get 15% off on your first order
        </h1>
      </div>
    </div>
  )
}

export default NavBar
