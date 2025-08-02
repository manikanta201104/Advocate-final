import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">KVM Advocate</h1>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-lg hover:underline">Home</NavLink>
          <NavLink to="/case-submission" className="text-lg hover:underline">Case Submission</NavLink>
          <NavLink to="/appointment-booking" className="text-lg hover:underline">Appointment Booking</NavLink>
          <NavLink to="/success-stories" className="text-lg hover:underline">Success Stories</NavLink>
        </div>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;