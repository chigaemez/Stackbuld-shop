import { useQuery } from '@tanstack/react-query'
import { IoMdCart } from 'react-icons/io'
import { FaRegEye } from 'react-icons/fa'

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  tags: string
  discountPercentage: number
}

type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const fetchProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch('https://dummyjson.com/products?limit=3')
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

const NewArrival: React.FC = () => {
  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ['threeProducts'],
    queryFn: fetchProducts
  })

  if (isLoading) return <div className='text-center py-8'>Loading...</div>
  if (isError || !data)
    return (
      <div className='text-red-500 text-center py-8'>
        Error loading products
      </div>
    )

  return (
    <div className='flex flex-col items-center justify-center h-screen  w-[80%] mx-auto'>
      <div className='flex w-full items-start justify-start flex-col px-[20px] '>
        <h1 className='text-5xl font-bold text-stone-800 mb-6 '>
          New Arrivals
        </h1>
        <p className='text-[20px] text-stone-700 '>
          Be the first to wear this season’s latest looks. Handpicked and
          freshly styled.
        </p>
      </div>

      <div className='  grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-[15px] mt-8'>
        {data.products.map((product: Product) => (
          <div key={product.id} className=' relative group  w-full p-4'>
            <div className='absolute inset-0 flex items-start px-[20px] py-[20px] justify-end bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[4px]'>
              <div className='flex flex-col items-center gap-2 text-stone-700'>
                <IoMdCart className='text-[25px] cursor-pointer hover:scale-110 transition-transform' />
                <FaRegEye className='text-[25px] cursor-pointer hover:scale-110 transition-transform' />
              </div>
            </div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-[400px] h-[400px] object-cover mb-2'
            />
            <h2 className='text-[20px] font-[500]'>{product.title}</h2>
            <h2 className='text-[14px] font-[500] text-stone-500'>{product.tags?.[1]}</h2>

            <p className='text-gray-600 font-[500]'>${product.discountPercentage} - ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrival
