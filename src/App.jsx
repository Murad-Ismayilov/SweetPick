import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './containers/Home'
import NotFound from './containers/404NoutFound'
import HomeTransparent from './containers/HomeTransparent'
import SingleProduct from './containers/SingleProduct'
import About from './containers/About'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

import Navbar from './components/Navbar'

import Footer from './components/Footer'



function App() {

  return (
    <div className=''>
      
      <BrowserRouter>

      
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/Hometransparent' element={<HomeTransparent/>}/>
        <Route path='/Singleproduct' element={<SingleProduct/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
   
      <Footer/>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
