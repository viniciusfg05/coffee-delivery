import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Checkout } from './pages/Checkout/Index'
import { Home } from './pages/Home/Index'
import { Success } from './pages/Success'

export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/checkout/success" element={<Success />}/>
      </Route>
    </Routes>
  )
}
