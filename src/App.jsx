  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import ScrollToTop from './Component/UI-Component/ScrollToTop';
  import LandingPage from "./pages/landingPage"
  import LoginPage from './Component/LoginPage/PageLogin';
  import Homepage from "./pages/homePage"
  import ProductDetail from './pages/ProductDetail';


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
        </Routes>
      </Router>
      
      </>
    )
  }

  export default App
