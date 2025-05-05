import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./pages/landingPage"
import LoginPage from './Component/LoginPage/PageLogin';

function App() {
  
  return (
    <> 
    <Router>
      <Routes>
          <Route path='/Welcome' element ={<LandingPage/>} />
          <Route path='/Login' element = {<LoginPage/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
