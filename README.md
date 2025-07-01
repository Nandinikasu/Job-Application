# Job Application Web App

A full-stack web application that allows users to submit and manage job applications with essential candidate details.

##  Features

- Submit job application with:
  - Personal information
  - Educational qualifications
  - Work experience
  - Resume link
  - Skills, relocation, and disability status
- View submitted applications
- Delete applications if needed

##  Technologies Used

- **Frontend:** React.js, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Other Tools:** Postman (for API testing)

##  Application Flow

1. User visits the homepage with options to Apply or View Applications.
2. The "Apply" page shows a form to enter job application details.
3. On submission, data is saved to MongoDB.
4. The "View Applications" page displays all submitted entries with delete options.

## Folder Structure
/client --> React frontend
/server --> Express backend with MongoDB connection

markdown
Copy
Edit

## Setup Instructions

1. Clone the repo:
git clone https://github.com/Nandinikasu/Job-Application.git
cd Job-Application

2. Install backend dependencies:
cd server
npm install
npm start
3. Install frontend dependencies:
cd ../client
npm install
npm start

4. Ensure MongoDB is connected (update `.env` if needed).

## 🔗 GitHub

[GitHub Repository](https://github.com/Nandinikasu/Job-Application)

---

Feel free to modify and customize as per your project updates!
