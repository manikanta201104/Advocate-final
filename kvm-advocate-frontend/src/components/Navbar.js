import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">KVM Advocate</h1>
        <div className="space-x-4">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/case-submission" className="hover:text-gray-300">Case Submission</NavLink>
          <NavLink to="/appointment-booking" className="hover:text-gray-300">Appointment Booking</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;