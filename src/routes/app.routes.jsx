import { Routes, Route } from "react-router-dom"

import { Favorites } from "../pages/Favorites"
import { Details } from "../pages/Details"
import { Orders } from "../pages/Orders"
import { Payment } from "../pages/Payment"
import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/details/:id" element={ <Details /> } />
      <Route path="/orders" element={ <Orders /> } />
      <Route path="/payment" element={ <Payment /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  )
}
