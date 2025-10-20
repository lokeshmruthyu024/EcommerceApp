import './App.css'
import Home from './Home/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Home/Navbar/Navbar';
import Footer from './Home/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
