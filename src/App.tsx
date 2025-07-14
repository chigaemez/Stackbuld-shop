import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Index from './Page'
import Shop from './Components/shop/Shop'
import Product_Detail from './Components/shop/Product_Detail'
import Product_Detail_Modal from './Components/shop/Product_Detail_Modal'

function App () {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Index />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/product/:id" element={<Product_Detail />} />
      </Route>
    </Routes>
    <Product_Detail_Modal />
    </>
  )
}

export default App
