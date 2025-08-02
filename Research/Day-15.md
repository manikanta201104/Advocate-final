# KVM Advocate Website - Day 15 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 15: Implement Appointment Booking Backend API

### Objective
Develop a POST `/api/appointments` route with input validation, MongoDB storage, mocked lawyer availability, and email/WhatsApp confirmations, ensuring a reliable scheduling process.

### Deliverables
- **routes/appointments.js**: POST `/api/appointments` route with validation and notifications.
- **models/Appointment.js**: Appointment schema.
- **models/Lawyer.js**: Lawyer schema for mock data.
- **server.js**: Updated to mount appointments router.
- **Tested**: API verified with Postman, MongoDB, and notifications.
- **Trello/Notion Update**: Day 15 tasks marked Done, screenshots saved.
- **GitHub Commits**: Changes pushed to `kvm-advocate` repository.

### Tasks Completed
1. Created POST `/api/appointments` route in `routes/appointments.js`.
2. Added validation and MongoDB save for appointment data.
3. Created `lawyers` collection with mock availability data.
4. Configured Nodemailer for email, optional Twilio for WhatsApp.
5. Tested API with Postman, verified MongoDB and notifications.

### Testing
- **Postman**:
  - Valid request: POST `/api/appointments` with JSON, verified 200 OK.
  - Errors: Invalid time, missing fields, invalid lawyerId (400).
  - Saved collection.
- **MongoDB**: Verified `appointments` and `lawyers` collections in Compass.
- **Notifications**: Confirmed email in Gmail, WhatsApp (if used) via Twilio.
- **Peer Feedback**: Shared screenshots, confirmed functionality.

### Tools Used
- VS Code: For editing and terminal.
- Postman: For API testing.
- MongoDB Compass: For database verification.
- Terminal: For npm, server, Git.
- Chrome: For email/WhatsApp checks.
- Trello/Notion: For task updates.
- Nodemailer/Twilio Docs: For reference.

### Next Steps
- Day 16: Connect Appointment Booking form to POST `/api/appointments` using Axios.

### Notes
- Aligns with Day 14 UI and Day 6 schema.
- Uses ES Modules and MongoDB `_id`.
- Leverages ChillBoard’s API experience.

**Author**: [Your Name]  
**Date**: August 12, 2025  
**Repository**: [Link to GitHub repo]