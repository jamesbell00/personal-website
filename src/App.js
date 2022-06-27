import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Work from './pages/Work'
import Projects from './pages/Projects'


function App() {
  return (
    // <div className="App">
    <div>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/projects' element={<Projects/>} />        
      </Routes>
    </Router>
    <Footer />

    </div>
  );
}

export default App;
