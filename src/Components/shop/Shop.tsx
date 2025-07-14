import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductModal } from '../../store/useProductModal';

type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  tags?: string[]
}

type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const fetchAllProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

const Shop = () => {
  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ['allProducts'],
    queryFn: fetchAllProducts
  })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage] = useState<number>(9)
  const [sortOption, setSortOption] = useState<string>('default')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredProducts = (data?.products || [])
    .filter(product => product.title.toLowerCase().includes(searchQuery))
    .filter(
      product =>
        selectedCategory === 'all' || product.category === selectedCategory
    )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price
    if (sortOption === 'price-desc') return b.price - a.price
    return a.id - b.id // default
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

  return (
    <div className='flex flex-col items-center justify-center my-[30px] px-[10px] '>
      <div className='flex flex-col items-center justify-center xl:w-[80%] lg:w-[80%] md:w-[80%] w-full mx-auto'>
        <div className='flex flex-col items-start justify-start w-full border-b-[2px] py-[15px] border-stone-400'>
          <h1 className='text-3xl font-bold text-gray-800'>Shop</h1>
        </div>

        <div className='flex flex-col w-full '>
          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 w-full  gap-[30px]'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='text-[15px] w-full font-[400] text-gray-700'>
                Showing {indexOfFirstItem + 1}–
                {Math.min(indexOfLastItem, sortedProducts.length)} of{' '}
                {sortedProducts.length} results
              </h2>
              <input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value.toLowerCase())
                  setCurrentPage(1)
                }}
                className='outline-none w-[100%] bg-stone-200 rounded px-3 py-2'
              />
            </div>

            <div className='flex items-center justify-between xl:justify-end lg:justify-end  gap-[0px] xl:gap-[30px] lg:gap-[30px] md:gap-[25px] w-[100%]'>
              <select
                value={selectedCategory}
                onChange={e => {
                  setSelectedCategory(e.target.value)
                  setCurrentPage(1)
                }}
                className='border border-gray-300 rounded px-3 py-1 outline-none '
              >
                <option value='all'>All Categories</option>
                {/* Add dynamic options if needed */}
                <option value='fragrances'>Fragrances</option>
                <option value='beauty'>Beauty</option>
              </select>
              <div className='flex items-center justify-center'>
                <span className='text-[15px] font-[400] text-gray-700'>
                  Sort by:
                </span>
                <select
                  className='border border-gray-300 rounded p-1 outline-none'
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                >
                  <option value='default'>Default</option>
                  <option value='price-asc'>Price: Low to High</option>
                  <option value='price-desc'>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching products</p>}

          {data && (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full'>
              {currentProducts?.map(product => (
                <div
                  key={product.id}
                  onClick={() => useProductModal.getState().openModal(product.id)}
                  className='rounded p-4 group overflow-hidden w-full block'
                >
                  <div className='overflow-hidden rounded'>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className='h-[400px] w-[300px] object-contain transition-transform duration-500 group-hover:scale-125'
                    />
                  </div>
                  <h2 className='text-lg font-semibold mt-2'>
                    {product.title}
                  </h2>
                  <p className='text-gray-600 text-sm'>{product.category}</p>
                  <p className='text-green-600 font-bold'>
                    ${product.discountPercentage} - ${product.price}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className='flex justify-start mt-6 gap-2'>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
