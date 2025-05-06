import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./pages/landingPage"
import LoginPage from './Component/LoginPage/PageLogin';
import Homepage from "./pages/homePage"

function App() {
  
  return (
    <> 
    <Router>
      <Routes>
          <Route path='/' element ={<LandingPage/>} />
          <Route path='/Login' element = {<LoginPage/>} />
          <Route path='/Home' element = {<Homepage/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
