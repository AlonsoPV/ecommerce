
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Detalle from './Pages/Detalle';
import Login from './Pages/Auth/Login';
import Header from "../src/Components/Header";
import Footer from './Components/Footer/Footer';

import { ProductProvider } from "../src/Context/ProductContext";
import { AuthProvider } from '@/Context/AuthContext'

import './App.css'

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Detalle" element={<Detalle />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </AuthProvider>
    </ProductProvider>

  )
}

export default App