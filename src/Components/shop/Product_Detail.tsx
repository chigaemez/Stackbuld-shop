import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { FaCircleCheck } from 'react-icons/fa6'
import { useState } from 'react'
import { useCartStore } from '../../store/CartStore'
import toast from 'react-hot-toast'

const Product_Detail = () => {
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore(state => state.addToCart)
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity
    })

    toast.success(`${product.title} added to cart`)
  }
  const { id } = useParams()

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()),
    enabled: !!id
  })

  if (!id) return null

  return (
    <div className='  flex items-center justify-center z-50 mb-[100px] scroll-auto'>
      <div className='bg-white p-6 rounded-lg xl:max-w-[75%] lg:max-w-[75%] md:max-w-[75%] max-w-[100%]  w-full relative'>
        <button
          onClick={() => navigate("/shop")}
          className='absolute top-2 left-2 text-gray-500 hover:text-red-600 text-3xl'
        >
          &times;
        </button>
        {isLoading || !product ? (
          <p>Loading...</p>
        ) : (
          <div className='grid xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 grid-cols-1 items-center'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-full h-60 object-contain mb-4'
            />
            <div className='flex flex-col ml-6'>
              <p className='text-gray-600 font-[500] text-sm uppercase'>
                {product.category}
              </p>
              <h2 className='text-xl font-bold'>{product.title}</h2>
              <p className='text-stone-700 font-bold text-[20px]'>
                ${product.discountPercentage} - ${product.price}{' '}
                <span className='text-[15px] font-[400]'>& Free Shipping</span>
              </p>
              <p className='text-[16px] text-gray-700 my-2'>
                {product.description}
              </p>

              <div className='flex flex-col gap-[15px] border-t-[1px] border-t-stone-700 border-b-[1px] border-b-stone-700 py-[20px] my-[15px]'>
                <div className='flex items-center justify-start ml-6  gap-[30px]  '>
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className='text-[35px] border-[1px] border-stone-700 font-[500] h-[40px] flex items-center w-[40px] justify-center'
                  >
                    -
                  </button>
                  <span className='text-[20px] font-bold'>{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className='text-[35px] border-[1px] border-stone-700 font-[500] h-[40px] flex items-center w-[40px] justify-center'
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className='bg-[#ff334c] text-white outline-none px-6 py-2 rounded-[10px] hover:bg-[#ff334bde] transition duration-300 ease-in'
                >
                  Add to Cart
                </button>
              </div>

              <p className='text-[16px] text-gray-500'>
                SKU: {product.sku}{' '}
                <span className='ml-[15px]'>CATEGORY: {product.category}</span>
              </p>
              <h1 className='text-[19px] font-[600] my-[20px]'>
                Free shipping on orders over $50!
              </h1>
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[16px] text-gray-500 ml-2 flex gap-[5px] items-center'>
                  <FaCircleCheck className='text-green-500 text-[20px] mt-[5px]' />{' '}
                  No-Risk Money Back Guarantee!
                </p>
                <p className='text-[16px] text-gray-500 ml-2 flex gap-[5px] items-center'>
                  <FaCircleCheck className='text-green-500 text-[20px] mt-[5px]' />{' '}
                  No Hassle Refunds
                </p>
                <p className='text-[16px] text-gray-500 ml-2 flex gap-[5px] items-center'>
                  <FaCircleCheck className='text-green-500 text-[20px] mt-[5px]' />{' '}
                  Secure Payments
                </p>
                <p className='text-[16px] text-gray-500 ml-2 flex gap-[5px] items-center'>
                  <FaCircleCheck className='text-green-500 text-[20px] mt-[5px]' />{' '}
                  24/7 Customer Support
                </p>
              </div>

              <div className='flex items-center justify-center relative border-[2px] border-stone-700 py-[14px] my-[30px]'>
                <h1 className='text-[20px] absolute top-[-19px] bg-white '>
                  Guaranteed Safe Checkout
                </h1>
                <img
                  src='https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/payments.svg'
                  alt=''
                  className='z-20'
                />
              </div>
            </div>
          </div>
        )}

        {isLoading || !product ? (
          <p>Loading...</p>
        ) : (
          <div className='flex flex-col'>
            <h1 className='text-[20px] font-[500]'>
              Reviews {product.reviews.length}{' '}
            </h1>
            <div className='flex flex-col gap-[10px] mt-[20px]'>
              {product.reviews.map((review: any) => (
                <div
                  key={review.id}
                  className='border-b-[1px] border-stone-300 pb-4'
                >
                  <p className='text-gray-700 font-[500]'>
                    {review.user}{' '}
                    <span className='text-yellow-500'>
                      {'★'.repeat(review.rating)}
                    </span>
                  </p>
                  <p className='text-gray-600'>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product_Detail
