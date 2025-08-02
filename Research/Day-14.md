# KVM Advocate Website - Day 14 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 14: Design Appointment Booking UI

### Objective
Develop a static Appointment Booking page UI in `AppointmentBooking.js`, integrating FullCalendar.js, form fields (consultation type, urgency, lawyer specialty), a “Book Now” button, and an availability note, styled with Tailwind CSS for a trust-inspiring, responsive interface.

### Deliverables
- **AppointmentBooking.js**: Static UI with FullCalendar.js, form, and note.
- **Tested**: UI verified in Chrome, backend continuity confirmed with Postman.
- **Trello/Notion Update**: Day 14 tasks marked Done, screenshots saved.
- **GitHub Commits**: Changes pushed to `kvm-advocate` repository.

### Tasks Completed
1. Installed FullCalendar.js and integrated weekly calendar in `AppointmentBooking.js`.
2. Created form with dropdowns (consultation type, urgency, lawyer specialty) and “Book Now” button.
3. Added availability note for urgency.
4. Styled UI with Tailwind CSS, ensuring mobile-friendliness.
5. Tested UI in Chrome and verified backend continuity with Postman.

### Testing
- **UI (Chrome)**:
  - Verified calendar (weekly view), form, and note at `http://localhost:3000/appointment-booking`.
  - Tested responsiveness (375px).
  - Tested navigation (Home, Case Submission).
- **Backend (Postman)**:
  - Tested GET `/api/test`: 200 OK.
  - Tested POST `/api/test-user`: 200 OK, verified in MongoDB.
  - Tested POST `/api/cases`: 200 OK, verified data, file, email.
  - Error cases: Missing fields, oversized files (400 Bad Request).
- **MongoDB**: Verified `users` and `cases` collections.
- **File Upload**: Checked `uploads/` folder.
- **Email**: Confirmed email in Gmail inbox.
- **Peer Feedback**: Shared screenshots, confirmed UI.

### Tools Used
- VS Code: For editing and terminal.
- Chrome: For UI testing and DevTools.
- Postman: For backend testing.
- MongoDB Compass: For database verification.
- Terminal: For npm, servers, Git.
- Trello/Notion: For task updates.
- FullCalendar/Tailwind Docs: For reference.

### Next Steps
- Day 15: Implement POST `/api/appointments` backend API with MongoDB and email confirmation.

### Notes
- Aligns with Day 3 wireframe and Day 13 functionality.
- Uses ES Modules for consistency.
- Leverages ChillBoard’s UI experience.

**Author**: [Your Name]  
**Date**: August 11, 2025  
**Repository**: [Link to GitHub repo]