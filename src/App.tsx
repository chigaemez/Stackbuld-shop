import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Index from './Page'
import Shop from './Components/shop/Shop'
import Product_Detail from './Components/shop/Product_Detail'
import Product_Detail_Modal from './Components/shop/Product_Detail_Modal'
import { Toaster } from 'react-hot-toast'
import CartPage from './Components/Cart/CartPage'
import CheckoutPage from './Components/shop/Checkout'
import NotFound from './Components/PageNotFound'
import AboutIndex from './Page/AboutIndex'

function App () {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Index />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/product/:id" element={<Product_Detail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Product_Detail_Modal />
    <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
