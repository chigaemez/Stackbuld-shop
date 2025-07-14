import { useNavigate } from 'react-router-dom'
import { useCartStore, useCart, useCartTotals } from '../../store/CartStore'

const CartPage = () => {
  const cart = useCart()
  const { totalPrice } = useCartTotals()
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const clearCart = useCartStore(state => state.clearCart)
  const navigate = useNavigate()

  const handleDecrease = (id: number, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1)
    }
  }

  return (
    <div className='mb-[100px] flex flex-col items-center justify-center p-6  mx-auto'>
      <div className='flex justify-between items-center mb-6 w-full md:w-[80%] lg:w-[80%] xl:w-[80%]'>
        <h1 className='text-2xl font-bold'>Your Cart</h1>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className='text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
          >
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex  flex-col xl:flex-row lg:flex-row md:flex-col  items-center justify-between w-full md:w-[80%] lg:w-[80%] xl:w-[80%] gap-[20px]  mx-auto'>
          <div className='overflow-x-auto w-[100%] xl:w-[70%] lg:w-[70%] md:w-[100%]'>
            <table className='min-w-full divide-y divide-gray-300 border border-gray-800 hidden md:table xl:table lg:table'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='p-4 text-left text-sm font-semibold text-gray-700'>
                    Product
                  </th>
                  <th className='p-4 text-left text-sm font-semibold text-gray-700'>
                    Price
                  </th>
                  <th className='p-4 text-left text-sm font-semibold text-gray-700'>
                    Quantity
                  </th>
                  <th className='p-4 text-left text-sm font-semibold text-gray-700'>
                    Total
                  </th>
                  <th className='p-4 text-left text-sm font-semibold text-gray-700'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td className='p-4 flex items-center gap-4'>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className='w-16 h-16 object-contain rounded'
                      />
                      <span className='text-sm font-medium text-gray-800'>
                        {item.title}
                      </span>
                    </td>
                    <td className='p-4 text-sm text-gray-600'>
                      {' '}
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className='p-4 text-sm text-gray-600'>
                      <div className='flex items-center gap-2'>
                        <button
                          className='px-2 py-1 border rounded hover:bg-gray-100'
                          onClick={() => handleDecrease(item.id, item.quantity)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className='px-2 py-1 border rounded hover:bg-gray-100'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='p-4 text-sm font-semibold text-gray-800'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className='p-4'>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-500 hover:underline text-sm'
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='md:hidden space-y-4 w-full'>
            {cart.map(item => (
              <div
                key={item.id}
                className='border border-[#F0F0F0] rounded-md bg-white shadow-sm'
              >
                {/* Header row: image + title */}
                <div className='flex items-center justify-between bg-[#F0F0F0] px-4 py-3'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className='w-12 h-12 object-contain rounded'
                    />
                    <span className='font-medium text-gray-800 text-sm'>
                      {item.title}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 text-sm hover:underline'
                  >
                    x
                  </button>
                </div>

                {/* Detail rows */}
                <div className='text-sm text-gray-700'>
                  <p className='flex items-center justify-between px-4 py-2 border-b'>
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </p>
                  <p className='flex items-center justify-between px-4 py-2 border-b'>
                    <strong>Quantity:</strong>
                    <span className='flex items-center gap-2'>
                      <button
                        className='px-2 py-1 border rounded hover:bg-gray-100'
                        onClick={() => handleDecrease(item.id, item.quantity)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className='px-2 py-1 border rounded hover:bg-gray-100'
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </span>
                  </p>
                  <p className='flex items-center justify-between px-4 py-2 border-b'>
                    <strong>Total:</strong> $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-center justify-center w-[100%] md:w-[70%] lg:w-[30%] xl:w-[30%] my-[100px] border-[1px] border-gray-300 p-6 rounded-lg mt-6'>
            <h1 className='text-[35px] font-[700]'>Cart Total</h1>
            <div className='mt-6 flex flex-col justify-between items-center'>
              <p className='text-lg font-bold'>
                Total Price: ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className='mt-4 flex justify-end'>
              <button
                onClick={() => navigate('/checkout')}
                className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition'
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
