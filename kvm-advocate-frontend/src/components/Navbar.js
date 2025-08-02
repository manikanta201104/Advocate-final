import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">KVM Advocate</h1>
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <NavLink to="/" className={({ isActive }) => `text-lg ${isActive ? 'text-blue-300 underline' : 'text-white hover:text-blue-300'}`}>Home</NavLink>
          <NavLink to="/case-submission" className={({ isActive }) => `text-lg ${isActive ? 'text-blue-300 underline' : 'text-white hover:text-blue-300'}`}>Case Submission</NavLink>
          <NavLink to="/appointment-booking" className={({ isActive }) => `text-lg ${isActive ? 'text-blue-300 underline' : 'text-white hover:text-blue-300'}`}>Appointment Booking</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `text-lg ${isActive ? 'text-blue-300 underline' : 'text-white hover:text-blue-300'}`}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => `text-lg ${isActive ? 'text-blue-300 underline' : 'text-white hover:text-blue-300'}`}>Services</NavLink>
        </div>
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;