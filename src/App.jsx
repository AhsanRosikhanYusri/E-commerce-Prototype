  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import ScrollToTop from './Component/UI-Component/ScrollToTop';
  import LandingPage from "./pages/landingPage"
  import LoginPage from './Component/LoginPage/PageLogin';
  import Homepage from "./pages/homePage"
  import ProductDetail from './pages/ProductDetail';
  import Cart from './pages/cart';
  import Payment from './pages/payment';


  function App() {
    
    return (
      <> 
      <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element ={<LandingPage/>} />
            <Route path='/Login' element = {<LoginPage/>} />
            <Route path='/Home' element = {<Homepage/>}/>
            <Route path='/Product/:id' element = {<ProductDetail/>}/>
            <Route path= '/cart' element={<Cart/>}/>
            <Route path= '/Pay' element={<Payment/>}/>
        </Routes>
      </Router>
      
      </>
    )
  }

  export default App
