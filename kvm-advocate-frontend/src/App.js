import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CaseSubmission from './components/CaseSubmission';
import AppointmentBooking from './components/AppointmentBooking';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-submission" element={<CaseSubmission />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          <Route path="*" element={<div className="text-2xl text-red-600 text-center mt-8"><h1>Page Not Found</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;