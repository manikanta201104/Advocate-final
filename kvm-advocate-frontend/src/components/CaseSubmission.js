import { useState } from 'react';
import axios from 'axios';

function CaseSubmission() {
  const [caseType, setCaseType] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!caseType) newErrors.caseType = 'Please select a case type';
    if (!description) newErrors.description = 'Description is required';
    if (description.length > 1000) newErrors.description = 'Description too long';
    if (files.length > 5) newErrors.files = 'Maximum 5 files allowed';
    files.forEach((file, index) => {
      if (file.size > 100 * 1024 * 1024) {
        newErrors.files = 'Each file must be less than 100MB';
      }
      const validTypes = ['image/png', 'image/jpeg', 'audio/mpeg', 'audio/wav','application/pdf'];
      if (!validTypes.includes(file.type)) {
        newErrors.files = 'Invalid file type';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('clientId', 'test-client');
    formData.append('caseType', caseType);
    formData.append('description', description);
    files.forEach(file => formData.append('evidence', file));

    try {
      const response = await axios.post('http://localhost:5000/api/cases', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Response:', response); // Debug log
      if (response.status === 200 && response.data.message === 'Case submitted successfully') {
        setShowModal(true);
        setCaseType('');
        setDescription('');
        setFiles([]);
        setErrors({});
      }
    } catch (error) {
      console.log('Error:', error); // Debug log
      setErrors({ api: error.response?.data?.errors?.[0]?.msg || 'Submission failed, please try again' });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Case Submission</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="mb-4">
          <label htmlFor="caseType" className="text-gray-700 text-lg font-semibold mb-2 block">Case Type</label>
          <select
            id="caseType"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select a case type</option>
            <option value="Digital Arrest">Digital Arrest</option>
            <option value="Phishing">Phishing</option>
            <option value="OTP Scam">OTP Scam</option>
            <option value="Investment Fraud">Investment Fraud</option>
            <option value="Other">Other</option>
          </select>
          {errors.caseType && <div className="text-red-600 text-sm mt-1">{errors.caseType}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-700 text-lg font-semibold mb-2 block">Incident Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md h-32 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Describe the incident here"
          ></textarea>
          {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="evidence" className="text-gray-700 text-lg font-semibold mb-2 block">Upload Evidence</label>
          <input
            type="file"
            id="evidence"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files))}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          {errors.files && <div className="text-red-600 text-sm mt-1">{errors.files}</div>}
        </div>
        {errors.api && <div className="text-red-600 text-sm mt-1 mb-4">{errors.api}</div>}
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
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-blue-900">Success</h2>
            <p className="text-gray-700 mt-2">Case submitted! We'll review within 24 hours.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseSubmission;