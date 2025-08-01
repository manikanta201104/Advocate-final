# KVM Advocate Website - Day 6 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 6: Set Up MongoDB and Database Schema

### Objective
Configure MongoDB Atlas, create a `kvm_advocate` database, define schemas for Users, Cases, and Appointments, and connect the Express server, ensuring a secure data foundation.

### Deliverables
- **MongoDB Setup**: `kvm_advocate` database in MongoDB Atlas (or local), visible in Compass.
- **Schemas**: `User.js`, `Case.js`, `Appointment.js` in `models` folder for Users, Cases, Appointments.
- **Server Connection**: Updated `server.js` with Mongoose connection and POST `/api/test-user` route.
- **.env**: Updated with `MONGODB_URI`, `PORT`, `JWT_SECRET`.
- **Trello/Notion Update**: Day 6 tasks marked Done, test results noted.

### Tasks Completed
1. Set up MongoDB Atlas (Cluster0, Mumbai region).
2. Created `kvm_advocate` database in Compass.
3. Defined schemas for Users, Cases, Appointments in `models` folder.
4. Connected Express server to MongoDB with Mongoose, tested with `/api/test-user`.
5. Updated `.env` with secure variables.

### Testing
- **MongoDB Setup**: Verified Atlas connection in Compass.
- **Database Check**: Confirmed `kvm_advocate` exists, tested with sample document.
- **Schema Check**: Validated `User.js`, `Case.js`, `Appointment.js` fields.
- **Connection Test**: Ran server, tested POST `/api/test-user` in Postman, checked user in Compass.
- **.env Validation**: Confirmed server uses `.env` variables, `.gitignore` correct.
- **Peer Feedback**: Shared setup with peer, confirmed functionality.

### Tools Used
- VS Code: For schema files and server updates.
- MongoDB Compass: For database visualization.
- MongoDB Atlas: For cloud database hosting.
- Postman: For API testing.
- Chrome: For Atlas access.
- Trello/Notion: For task updates.

### Next Steps
- Day 7: Create Express routes for user registration, case submission, and appointment booking.

### Notes
- Schemas align with Day 3 wireframes (e.g., Case Submission form).
- Secure setup addresses Day 2 data leak fears (e.g., encrypted Atlas connection).
- Setup leverages ChillBoard’s database experience.

**Author**: [Your Name]  
**Date**: August 3, 2025  
**Repository**: [Link to GitHub repo, if created]  