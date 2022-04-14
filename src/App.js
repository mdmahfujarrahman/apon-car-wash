import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Shared/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Home/Services/Services';
import About from './components/Pages/About/About';
import Footer from './components/Pages/Shared/Footer/Footer';
import ServicesDetail from './components/Pages/ServicesDetail/ServicesDetail';
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import Register from './components/Pages/Login/Register/Register';
import Login from './components/Pages/Login/Login/Login';

function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route
                  path="/service/:serviceId"
                  element={<ServicesDetail />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
