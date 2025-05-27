  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import ScrollToTop from './Component/UI-Component/ScrollToTop';
  import LandingPage from "./pages/landingPage"
  import LoginPage from './Component/LoginPage/PageLogin';
  import Homepage from "./pages/homePage"
  import ProductDetail from './pages/ProductDetail';
  import Cart from './pages/cart';
  import Payment from './pages/payment';
  import Liked from './pages/liked';
  import SearchPage from './pages/search';
  import Profile from './pages/profile';
  import CustomerService from './pages/CustomerService';
  import CouponPage from './pages/coupon';
  import HistoryOrder from './pages/history';
  import TrackOrder from './pages/trackOrder';

  import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
 
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data =>  {
          const filteredProducts = data.filter(
          (item) => item.category.toLowerCase() !== "electronics"
        );

        setProducts(filteredProducts)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Home' element={<Homepage />} />
        <Route path='/Product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Pay' element={<Payment />} />
        <Route path='/Liked' element={<Liked />} />
        <Route path='/search' element={<SearchPage products={products} />} />
        <Route path='/Profile' element ={<Profile/>}/>
        <Route path='/cs' element ={<CustomerService/>}/>
        <Route path='/coupon' element ={<CouponPage/>}/>
        <Route path='/history' element ={<HistoryOrder/>}/>
        <Route path= '/tracking' element={<TrackOrder/>} />
        
      </Routes>
    </Router>
  );
}

  export default App
