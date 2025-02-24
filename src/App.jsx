// NPM Packges 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
//css
import './App.css'

//Paths 
import Navbar from './components/Navbar'
const Home = lazy(() => import('./pages/Home'))
function App() {

  return (
    <div>
          <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
