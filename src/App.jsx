// NPM Packges 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ToastContainer } from 'react-toastify';
//css
import './App.css'

//Paths 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Checkout from './pages/Checkout';
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Cart = lazy(() => import('./pages/Cart'));
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>
          <Loader/>
        </div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer />
        </Suspense>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
