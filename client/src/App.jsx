import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin-view/AdminLayout"
import Dashboard from "./pages/admin-view/Dashboard"
import Produt from "./pages/admin-view/Produt"
import Orders from "./pages/admin-view/Orders"
import ShopingLayout from "./components/shopping-view/ShopingLayout"
import NotFound from "./pages/not-found/NotFound"
import Home from "./pages/shopping-view/Home"
import Listing from "./pages/shopping-view/Listing"
import Checkout from "./pages/shopping-view/Checkout"
import Account from "./pages/shopping-view/Account"

function App() {

  return (
    <div className="flex flex-col w-full overflow-hidden">

      <Routes >

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="product" element={<Produt />}/>
          <Route path="orders" element={<Orders />}/>
        </Route>

        <Route path="/shop" element={<ShopingLayout />}>
          <Route path="home" element={<Home />}/>
          <Route path="listing" element={<Listing />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="account" element={<Account />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </div>
  )
}

export default App
