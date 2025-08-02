import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Fight Cybercrime with KVM Advocate</h1>
        <p className="text-lg md:text-xl mt-4 text-center">Secure, Trusted Legal Help for Hyderabad’s Cybercrime Victims</p>
        <Link to="/case-submission">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-6">
            Submit Your Case
          </button>
        </Link>
      </div>

      {/* Trust Signals Section */}
      <div className="bg-gray-100 py-8 flex flex-col md:flex-row justify-center gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <span className="mr-2">🛡️</span>
          <p>Certified Experts</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <span className="mr-2">🔒</span>
          <p>256-bit SSL Secure</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <span className="mr-2">📰</span>
          <p>Featured in The Hindu</p>
        </div>
      </div>
      <div className="bg-gray-100 text-center text-lg font-semibold">
        <p>500+ Cases Resolved | 98% Client Satisfaction</p>
      </div>

      {/* Success Story Snippet */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
        <p className="text-gray-700 italic">"KVM Advocate recovered my ₹5 lakh!"</p>
        <span className="block mt-2 text-gray-500">– Anonymous</span>
        <Link to="/success-stories">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;