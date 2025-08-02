# KVM Advocate Website - Day 13 README

## Project Overview

KVM Advocate is a MERN-based website for a fictional law firm in LB Nagar, Hyderabad, specializing in cybercrime cases (e.g., digital arrests, phishing). It empowers victims to submit cases, book consultations, access resources, and track progress, fostering trust through secure features. This project showcases full-stack MERN skills and addresses Hyderabad’s cybercrime challenges.

## Day 13: Connect Case Submission Form to Backend

### Objective
Integrate the Case Submission form in `CaseSubmission.js` with the POST `/api/cases` backend API using Axios, implementing client-side validation, FormData for file uploads, and a confirmation modal for a seamless, trust-inspiring submission process.

### Deliverables
- **server.js**: Updated with CORS middleware.
- **CaseSubmission.js**: Updated with Axios, FormData, validation, and modal, fixing "Submission failed" error.
- **Tested**: End-to-end flow verified with Chrome and Postman.
- **Trello/Notion Update**: Day 13 tasks marked Done, screenshots saved.
- **GitHub Commits**: Changes pushed to `kvm-advocate` repository.

### Tasks Completed
1. Integrated Axios in `CaseSubmission.js` for POST `/api/cases`.
2. Implemented FormData for text and file uploads.
3. Added client-side validation for required fields and file constraints.
4. Added confirmation modal for successful submissions.
5. Fixed "Submission failed" error by improving Axios error handling and adding CORS.
6. Tested flow with Chrome (frontend) and Postman (backend).

### Testing
- **Frontend (Chrome)**:
  - Valid submission: Submitted form, verified modal, no "Submission failed" error.
  - Validation: Tested empty fields, oversized files, confirmed error messages.
  - Responsiveness: Verified on mobile (375px).
- **Backend (Postman)**:
  - Valid request: Sent POST `/api/cases`, verified 200 OK.
  - Error cases: Tested missing `caseType`, oversized file, invalid `caseType`.
- **MongoDB**: Verified case in `cases` collection.
- **File Upload**: Checked file in `uploads/`.
- **Email**: Confirmed email in Gmail inbox.
- **Navigation**: Verified nav bar links.
- **Peer Feedback**: Shared screenshots, confirmed fix.

### Tools Used
- VS Code: For editing and terminal commands.
- Chrome: For frontend testing and DevTools.
- Postman: For backend API testing.
- MongoDB Compass: For verifying `cases` collection.
- Terminal: For running servers and Git commits.
- Trello/Notion: For task updates.
- Axios/Tailwind Docs: For reference.

### Notes
- Fixed "Submission failed" error by improving Axios response handling and adding CORS.
- Aligns with Day 12 API and Day 11 form.
- Uses ES Modules for consistency.
- Leverages ChillBoard’s full-stack experience.

**Author**: [Your Name]  
**Date**: August 10, 2025  
**Repository**: [Link to GitHub repo]