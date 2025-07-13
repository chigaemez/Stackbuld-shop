import React, { useEffect, useState } from 'react'

type CountdownProps = {
  targetDate: string // e.g. "2025-07-20T23:59:59"
}

const Discount = ({targetDate}: {targetDate: string}) => {
    const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div className="text-red-500">Offer Expired</div>;
  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-gray-100'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1623882151192-5c6e32a99462?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full xl:w-[60%] lg:w-[60%] md:w-[70%] w-full  text-white text-center px-4'>
        <h1 className='text-2xl md:text-6xl font-bold mb-4'>
          Hurry Up! Get Up to 50% Off
        </h1>
        <p className='text-lg md:text-xl max-w-xl'>
          Step into summer with sun-ready styles at can't-miss prices.
        </p>
        <div className='grid grid-cols-4 gap-4 text-xl font-semibold text-white p-4 rounded'>
          <div className='w-[50px] h-[50px] rounded-[5px] bg-white flex items-center justify-center text-stone-700'>{timeLeft.days}d</div>
          <div className='w-[50px] h-[50px] rounded-[5px] bg-white flex items-center justify-center text-stone-700'>{timeLeft.hours}h</div>
          <div className='w-[50px] h-[50px] rounded-[5px] bg-white flex items-center justify-center text-stone-700'>{timeLeft.minutes}m</div>
          <div className='w-[50px] h-[50px] rounded-[5px] bg-white flex items-center justify-center text-stone-700'>{timeLeft.seconds}s</div>
        </div>
      </div>
    </div>
  )
}

export default Discount
