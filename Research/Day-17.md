# KVM Advocate Website - Day 17 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 17: Implement Basic Authentication

### Objective
Develop POST `/api/auth/signup` and `/api/auth/login` routes with JWT and bcrypt, store user data in MongoDB, create a temporary Auth page in React, and test with Postman for secure client feature access.

### Deliverables
- **routes/auth.js**: POST `/api/auth/signup` and `/api/auth/login` routes with JWT, bcrypt.
- **models/User.js**: User schema for `email`, `password`, `role`.
- **server.js**: Updated to mount auth router.
- **src/components/Auth.js**: Temporary page with signup/login forms.
- **src/App.js**: Updated with `/auth` route.
- **Tested**: APIs verified with Postman, MongoDB, and browser.
- **Trello/Notion Update**: Day 17 tasks marked Done, screenshots saved.
- **GitHub Commits**: Changes pushed to `kvm-advocate` repository.

### Tasks Completed
1. Created POST `/api/auth/signup` and `/api/auth/login` routes in `routes/auth.js`.
2. Implemented JWT for tokens and bcrypt for password hashing.
3. Created `users` collection and `User.js` model.
4. Built temporary `Auth.js` with signup/login forms and Axios.
5. Tested APIs with Postman: signup, login, token validation.

### Testing
- **Postman**:
  - POST `/api/auth/signup`: 200 OK, user registered.
  - POST `/api/auth/login`: 200 OK, JWT returned.
  - Errors: Duplicate email (409), invalid credentials (401).
  - GET `/api/test/protected`: 200 OK (valid token), 401 (invalid).
- **MongoDB**: Verified `users` collection in Compass.
- **Browser**: Tested Auth page at `http://localhost:3000/auth`.
- **Peer Feedback**: Shared screenshots, confirmed functionality.

### Tools Used
- VS Code: For editing and terminal.
- Postman: For API testing.
- MongoDB Compass: For database verification.
- Terminal: For npm, server, Git.
- Trello/Notion: For task updates.
- JWT/bcrypt/Tailwind Docs: For reference.

### Next Steps
- Day 18: Connect Case Submission and Appointment Booking forms to require authentication.

### Notes
- Aligns with Days 6, 13–16.
- Uses ES Modules and MongoDB `_id`.
- Leverages ChillBoard’s authentication experience.

**Author**: [Your Name]  
**Date**: August 14, 2025  
**Repository**: [Link to GitHub repo]