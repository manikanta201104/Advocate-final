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
          <Route path="/success-stories" element={<div><h1 className="text-2xl font-bold">Success Stories Page</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;