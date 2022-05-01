import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import AddService from './components/Pages/Home/AddService/AddService';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Home/Services/Services';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './components/Pages/ManageServices/ManageServices';
import ServicesDetail from './components/Pages/ServicesDetail/ServicesDetail';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';
import NotFound from './components/Pages/Shared/NotFound/NotFound';

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
              <Route
                  path="/checkout"
                  element={
                      <RequireAuth>
                          <CheckOut />
                      </RequireAuth>
                  }
              ></Route>
              <Route
                  path="/addservice"
                  element={
                      <RequireAuth>
                          <AddService />
                      </RequireAuth>
                  }
              ></Route>
              <Route
                  path="/manage"
                  element={
                      <RequireAuth>
                          <ManageServices />
                      </RequireAuth>
                  }
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
