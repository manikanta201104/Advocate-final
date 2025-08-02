import { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function AppointmentBooking() {
  const [lawyers, setLawyers] = useState([]);
  const [consultationType, setConsultationType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedLawyerId, setSelectedLawyerId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/lawyers/availability');
        setLawyers(response.data);
      } catch (error) {
        setError('Failed to load availability');
      }
      setLoading(false);
    };
    fetchAvailability();
  }, []);

  const calendarEvents = lawyers.flatMap((lawyer) =>
    lawyer.availableSlots.map((slot) => ({
      title: `Available - ${lawyer.name}`,
      start: slot,
      lawyerId: lawyer.lawyerId,
    }))
  );

  const handleEventClick = (info) => {
    setSelectedSlot(info.event.start);
    setSelectedLawyerId(info.event.extendedProps.lawyerId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!selectedSlot || !selectedLawyerId) {
      setError('Please select a time slot');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', {
        clientId: 'test-client',
        lawyerId: selectedLawyerId,
        time: selectedSlot.toISOString(),
        type: consultationType,
        urgency,
        specialty,
      });
      if (response.status === 200) {
        setShowModal(true);
        setConsultationType('');
        setUrgency('');
        setSpecialty('');
        setSelectedSlot(null);
        setSelectedLawyerId(null);
      }
    } catch (error) {
      setError(error.response?.data?.errors?.[0]?.msg || 'Failed to book appointment');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const specialties = [...new Set(lawyers.map((lawyer) => lawyer.specialty))];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Book a Consultation</h1>
      {loading && <p className="text-gray-600">Loading availability...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="max-w-4xl w-full mx-auto mb-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={calendarEvents}
          selectable={true}
          eventClick={handleEventClick}
          slotMinTime="09:00:00"
          slotMaxTime="17:00:00"
          slotDuration="00:30:00"
          weekends={false}
          eventBackgroundColor="#2563eb"
          eventBorderColor="#1e40af"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl flex flex-col md:grid md:grid-cols-2 md:gap-4"
      >
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
        </div>
        <div className="mb-4 md:col-span-2">
          <label htmlFor="lawyerSpecialty" className="text-gray-700 text-lg font-semibold mb-2 block">
            Lawyer Specialty
          </label>
          <select
            id="lawyerSpecialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select specialty</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
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
            <h2 className="text-2xl font-bold text-blue-900">Booking Confirmed!</h2>
            <p className="text-gray-700 mt-2">
              Appointment booked for {selectedSlot?.toLocaleString()} with{' '}
              {lawyers.find((l) => l.lawyerId === selectedLawyerId)?.name || 'Lawyer'}.
            </p>
            <button
              onClick={closeModal}
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