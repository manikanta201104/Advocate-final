import { useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function AppointmentBooking() {
  const [consultationType, setConsultationType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [lawyerSpecialty, setLawyerSpecialty] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (arg) => {
    const selected = new Date(arg.dateStr);
    const day = selected.getDay();
    const hours = selected.getHours();
    if (day === 0 || hours < 9 || hours >= 17) {
      setErrors({ time: 'Please select a time between 9 AM and 5 PM, Monday to Saturday' });
      return;
    }
    setSelectedTime(arg.dateStr);
    setErrors({ ...errors, time: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!consultationType) newErrors.consultationType = 'Please select consultation type';
    if (!urgency) newErrors.urgency = 'Please select urgency';
    if (!lawyerSpecialty) newErrors.lawyerSpecialty = 'Please select a specialty';
    if (!selectedTime) newErrors.time = 'Please select a time slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = {
      clientId: 'test-client',
      lawyerId: 'lawyer1', // Placeholder until dynamic lawyer selection
      time: selectedTime,
      type: consultationType,
      urgency: urgency,
      specialty: lawyerSpecialty,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/appointments', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Response:', response);
      if (response.status === 200 && response.data.message === 'Appointment booked successfully') {
        setShowModal(true);
        setConsultationType('');
        setUrgency('');
        setLawyerSpecialty('');
        setSelectedTime('');
        setErrors({});
      }
    } catch (error) {
      console.log('Error:', error);
      setErrors({ api: error.response?.data?.errors?.[0]?.msg || 'Booking failed, please try again' });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Book a Consultation</h1>
      <div className="max-w-4xl w-full mx-auto mb-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={[{ title: 'Sample Consultation', date: '2025-08-12T10:00:00' }]}
          selectable={true}
          dateClick={handleDateClick}
          slotMinTime="09:00:00"
          slotMaxTime="17:00:00"
          slotDuration="00:30:00"
          weekends={false}
        />
        {errors.time && <div className="text-red-600 text-sm mt-1">{errors.time}</div>}
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl flex flex-col md:grid md:grid-cols-2 md:gap-4">
        <div className="mb-4">
          <label htmlFor="consultationType" className="text-gray-700 text-lg font-semibold mb-2 block">
            Consultation Type
          </label>
          <select
            id="consultationType"
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select consultation type</option>
            <option value="Video">Video</option>
            <option value="In-Person">In-Person</option>
          </select>
          {errors.consultationType && <div className="text-red-600 text-sm mt-1">{errors.consultationType}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="urgency" className="text-gray-700 text-lg font-semibold mb-2 block">
            Urgency
          </label>
          <select
            id="urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select urgency</option>
            <option value="Standard">Standard</option>
            <option value="Urgent">Urgent</option>
          </select>
          {errors.urgency && <div className="text-red-600 text-sm mt-1">{errors.urgency}</div>}
        </div>
        <div className="mb-4 md:col-span-2">
          <label htmlFor="lawyerSpecialty" className="text-gray-700 text-lg font-semibold mb-2 block">
            Lawyer Specialty
          </label>
          <select
            id="lawyerSpecialty"
            value={lawyerSpecialty}
            onChange={(e) => setLawyerSpecialty(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select specialty</option>
            <option value="Online Fraud Expert">Online Fraud Expert</option>
            <option value="Cybercrime Specialist">Cybercrime Specialist</option>
            <option value="Data Privacy Lawyer">Data Privacy Lawyer</option>
            <option value="General">General</option>
          </select>
          {errors.lawyerSpecialty && <div className="text-red-600 text-sm mt-1">{errors.lawyerSpecialty}</div>}
        </div>
        {errors.api && <div className="text-red-600 text-sm mt-1 mb-4 md:col-span-2">{errors.api}</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full md:w-auto mt-4 md:col-span-2"
        >
          Book Now
        </button>
      </form>
      <div className="text-gray-600 italic text-sm mt-4 flex items-center justify-center gap-2">
        <div className="w-5 h-5 bg-gray-300"></div>
        <span>Urgent slots available within 24 hours for immediate consultation.</span>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-blue-900">Success</h2>
            <p className="text-gray-700 mt-2">Appointment booked! You'll receive a confirmation soon.</p>
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

export default AppointmentBooking;