

const Hero = () => {
  return (
   <div className='relative h-screen w-full flex items-center justify-center bg-gray-100'>
     
      <div
        className='absolute inset-0 bg-cover bg-center h-[70%] w-full '
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      />

      <div className='absolute inset-0 bg-black/70 h-[70%]' />

      <div className='relative z-10 flex flex-col mb-[250px]  items-center justify-center h-full w-full md:w-[70%] lg:w-[70%] xl:w-[60%] text-white text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Style That Lingers Like a Scent, and Sits Like a Statement.
        </h1>
        <p className='text-lg md:text-xl max-w-xl'>
         Elegant Scents. Timeless Furniture. Style That Follows You Home.
        </p>
      </div>
    </div> 
  )
}

export default Hero
