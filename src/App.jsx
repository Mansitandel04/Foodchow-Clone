
import './App.css'

import Footer from './components/Footer/Footer'

import Homecart from './components/HomePage/Cart/Homecart'
import Categories from './components/HomePage/Categories/Categories'
import HomePage from './components/HomePage/HomePage'
import MainMenu from './components/HomePage/MainMenu/MainMenu'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
<Navbar />
<div className='row mainhero' >
  <Categories/><HomePage/>
<Homecart/>
 
 <Footer/>
  </div>

    </>
  )
}

export default App
