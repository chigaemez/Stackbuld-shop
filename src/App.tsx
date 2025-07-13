import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Index from './Page'

function App () {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Index />} />
      </Route>
    </Routes>
  )
}

export default App
