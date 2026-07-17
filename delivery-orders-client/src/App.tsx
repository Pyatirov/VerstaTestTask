import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { OrderList } from './pages/OrderList'
import { CreateOrder } from './pages/CreateOrder'
import { OrderDetails } from './pages/OrderDetails'
import { MainLayout } from './layouts/MainLayout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<OrderList />}/>
          <Route path='/orders/new' element={<CreateOrder />}/>
          <Route path='/orders/:id' element={<OrderDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
