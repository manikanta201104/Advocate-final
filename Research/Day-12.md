# KVM Advocate Website - Day 12 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 12: Implement Case Submission Backend API

### Objective
Develop a POST `/api/cases` route in the Express backend using ES Modules, handling form data, file uploads (Multer), MongoDB storage, and email confirmations (Nodemailer), ensuring secure and trust-inspiring functionality.

### Deliverables
- **routes/cases.js**: POST `/api/cases` route with validation, Multer, MongoDB save, and Nodemailer, using ES Modules.
- **server.js**: Updated to mount cases router.
- **.env**: Added email credentials.
- **Tested**: API verified with Postman, MongoDB Compass, and email inbox.
- **Trello/Notion Update**: Day 12 tasks marked Done, screenshots saved.
- **GitHub Commits**: Changes pushed to `kvm-advocate` repository.

### Tasks Completed
1. Created POST `/api/cases` route with ES Modules in `routes/cases.js`.
2. Configured Multer for file uploads (local storage, 5MB limit).
3. Added validation (`express-validator`) and MongoDB save for case data.
4. Set up Nodemailer for confirmation emails.
5. Tested API with Postman, verified data, files, and email.

### Testing
- **API Response**: Verified 200 OK for valid request, 400 for invalid inputs.
- **MongoDB**: Confirmed case saved in `cases` collection via Compass.
- **File Uploads**: Checked files in `uploads/` folder.
- **Email**: Verified confirmation email in Gmail inbox.
- **Peer Feedback**: Shared screenshots, confirmed functionality.

### Tools Used
- VS Code: For editing and terminal commands.
- Postman: For API testing.
- MongoDB Compass: For verifying `cases` collection.
- Chrome: For email verification.
- Terminal: For npm installs, server, and Git commits.
- Trello/Notion: For task updates.
- Multer/Nodemailer Docs: For configuration reference.

### Next Steps
- Day 13: Connect Case Submission form to POST `/api/cases` with Axios, displaying success/error messages.

### Notes
- API aligns with Day 6 schema and Day 11 form fields.
- Uses ES Modules for modern code structure.
- Setup leverages ChillBoard’s API experience.

**Author**: [Your Name]  
**Date**: August 9, 2025  
**Repository**: [Link to GitHub repo]