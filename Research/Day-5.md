# KVM Advocate Website - Day 5 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 5: Install Node.js and Initialize Backend

### Objective
Install Node.js and initialize an Express-based backend with a test route, ensuring a secure foundation for APIs.

### Deliverables
- **Backend Folder**: `kvm-advocate-backend` with:
  - `package.json`: Dependencies (express, mongoose, dotenv, multer, jsonwebtoken).
  - `.gitignore`: Excludes `node_modules/` and `.env`.
  - `.env`: Empty file with `PORT=5000`.
  - `server.js`: Express server with GET `/api/test` route returning `{ "message": "Server running" }`.
- **Trello/Notion Update**: Day 5 tasks marked Done, test results noted.

### Tasks Completed
1. Installed Node.js LTS (v20.x) and npm (v10.x).
2. Created `kvm-advocate-backend` folder and initialized with `npm init -y`.
3. Installed dependencies: express, mongoose, dotenv, multer, jsonwebtoken.
4. Created `server.js` with test route.
5. Tested server via Postman (`http://localhost:5000/api/test`).

### Testing
- **Installation Check**: Verified `node -v`, `npm -v`.
- **Initialization Check**: Confirmed `package.json` and folder structure.
- **Dependency Check**: Validated installed packages in `package.json`.
- **Server Test**: Ran `server.js`, tested `/api/test` in Postman (200 OK, `{ "message": "Server running" }`).
- **Peer Feedback**: Shared setup with peer, confirmed functionality.

### Tools Used
- VS Code: For folder and file management.
- Terminal: For Node.js, npm, and server commands.
- Postman: For API testing.
- Chrome: For quick route testing.
- Trello/Notion: For task updates.

### Next Steps
- Day 6: Configure MongoDB Atlas and create schemas for users, cases, appointments.

### Notes
- Setup prioritizes secure dependencies (e.g., jsonwebtoken) for data leak fears.
- Test route confirms backend readiness for APIs.
- Folder structure aligns with ChillBoard’s backend setup.

**Author**: [Your Name]  
**Date**: August 2, 2025  
**Repository**: [Link to GitHub repo, if created]  