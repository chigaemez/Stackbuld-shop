const Executive = () => {
  return (
    <div className='flex relative items-center justify-between h-screen '>
      <div  className=' relative inset-0 bg-cover bg-center w-[70%] h-[80%] xl:flex lg:flex md:flex hidden'
        style={{
          backgroundImage:
            "url('https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp')"
        }}>
          <div className='absolute inset-0 bg-black/10' />
      </div>
      <div className="flex   bg-[#f7eced] xl:w-[30%] lg:w-[30%] md:w-[30%] w-full h-[80%] items-center justify-center text-center px-4">

      </div>

      <div className='absolute xl:right-[250px] lg:right-[250px] md:right-[250px] right-[40px]  rounded-[50px] shadow-2xl z-10 flex flex-col bg-white items-center justify-center xl:h-[50%]  xl:w-[30%] lg:h-[50%] lg:w-[30%] md:w-[40%] w-[80%] h-[60%]  text-white text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-stone-800'>
          Executive Collection
        </h1>
        <p className='text-lg md:text-xl max-w-xl text-stone-600'>
          Explore our exclusive range of executive furniture and decor, designed to elevate your workspace with style and sophistication.
        </p>
        <button className='mt-6 px-6 py-3 bg-[#ff334c] text-stone-200 font-[600] rounded-full hover:bg-[#ff334bde] transition cursor-pointer'>
          Discover More
        </button>
        </div>
    </div>
  )
}

export default Executive
