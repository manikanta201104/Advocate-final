import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function AppointmentBooking() {
  const [consultationType, setConsultationType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [lawyerSpecialty, setLawyerSpecialty] = useState('');

  const handleDateClick = (arg) => {
    console.log('Date clicked:', arg.dateStr); // Placeholder for Day 18
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Book a Consultation</h1>
      <div className="max-w-4xl w-full mx-auto mb-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={[{ title: 'Sample Consultation', date: '2025-08-11T10:00:00' }]}
          selectable={true}
          dateClick={handleDateClick}
          slotMinTime="09:00:00"
          slotMaxTime="17:00:00"
          slotDuration="00:30:00"
          weekends={false}
        />
      </div>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl flex flex-col md:grid md:grid-cols-2 md:gap-4">
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
    </div>
  );
}

export default AppointmentBooking;