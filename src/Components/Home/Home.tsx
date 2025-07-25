import { useNavigate } from "react-router-dom"

const Home = () => { 
  const navigate = useNavigate()
  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-gray-100'>
     
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp')"
        }}
      />

      <div className='absolute inset-0 bg-black/70' />

      <div className='relative z-10 flex flex-col items-center justify-center h-full w-full md:w-[70%] lg:w-[70%] xl:w-[60%] text-white text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Timeless Fashion & Fragrance for the Modern Lifestyle
        </h1>
        <p className='text-lg md:text-xl max-w-xl'>
          Discover premium Beauty & Personal Care for Men, Women, and Kids —
          from captivating fragrances to daily essentials, all crafted to
          inspire confidence.
        </p>
        <button onClick={() => navigate("/shop")} className='mt-6 px-6 py-3 bg-[#ff334c] text-stone-200 font-[600] rounded-full hover:bg-[#ff334bde] transition cursor-pointer'>
          Explore the Collection
        </button>
      </div>
    </div>
  )
}

export default Home
