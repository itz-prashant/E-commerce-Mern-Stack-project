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
import CheckAuth from "./components/common/CheckAuth"
import UnAuth from "./pages/un-auth/UnAuth"

function App() { 

  const isAuthenticated = true;
  const user = {
    name: 'Prashant',
    role: 'admin'
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">

      <Routes>

        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="product" element={<Produt />}/>
          <Route path="orders" element={<Orders />}/>
        </Route>

        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<Home />}/>
          <Route path="listing" element={<Listing />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="account" element={<Account />}/>
        </Route>

        <Route path="*" element={<NotFound />}/>

        <Route path="/unauth" element={<UnAuth />}/>

      </Routes>
    </div>
  )
}

export default App
