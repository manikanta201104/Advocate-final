function CaseSubmission() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Case Submission</h1>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="mb-4">
          <label htmlFor="caseType" className="text-gray-700 text-lg font-semibold mb-2 block">Case Type</label>
          <select
            id="caseType"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select a case type</option>
            <option value="digital-arrest">Digital Arrest</option>
            <option value="phishing">Phishing</option>
            <option value="otp-scam">OTP Scam</option>
            <option value="investment-fraud">Investment Fraud</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-700 text-lg font-semibold mb-2 block">Incident Description</label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-300 rounded-md h-32 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Describe the incident here"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="evidence" className="text-gray-700 text-lg font-semibold mb-2 block">Upload Evidence</label>
          <input
            type="file"
            id="evidence"
            multiple
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full md:w-auto mt-4"
        >
          Submit Your Case
        </button>
      </form>
      <div className="text-gray-600 text-sm mt-4 flex items-center justify-center gap-2">
        <div className="w-5 h-5 bg-gray-300"></div>
        <span className="italic">Your data is encrypted with 256-bit SSL for maximum security.</span>
      </div>
    </div>
  );
}

export default CaseSubmission;