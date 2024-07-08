import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'

import Home from './Pages/Home/Home'
import Layout from './components/layout/Layout';
import Hostels from './Pages/Hostels';
import Service from './Pages/Service';
import Complaint from './Pages/Complaint';
import Servicer from './Pages/Servicer';
import Login from './Pages/Login';
import Tilak from './components/Tilak';
import Malvia from './components/Malvia';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ComplaintUpdateForm from './components/ComplaintUpdateForm';
import DiamondJublee from './components/DiamondJublee';
import KamlaNhre from './components/KamlaNhre';
import SwamiVive from './components/SwamiVive';
import Sarujani from './components/Sarujani';
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/signup';

  return (
    <div>
      {showHeaderFooter && <Layout />}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostel" element={<Hostels />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicer" element={<Servicer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tilak" element={<Tilak />} />
          <Route path="/malvia" element={<Malvia />} />
          <Route path="/djgh" element={<DiamondJublee />} />
          <Route path="/kngh" element={<KamlaNhre />} />
          <Route path="/svs" element={<SwamiVive />} />
          <Route path="/sngh" element={<Sarujani />} />
          <Route path="/complaintup" element={<ComplaintUpdateForm />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      {showHeaderFooter && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;


