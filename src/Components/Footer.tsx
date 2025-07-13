import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full text-white py-4 flex justify-center items-center '>
      <div className='flex w-[80%] border-b-[2px] border-white py-[15px] items-center justify-between'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <img src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/payments.svg" alt="" />
      </div>
    </div>
  )
}

export default Footer
