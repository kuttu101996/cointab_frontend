# Cointab SE-ASSIGNMENT
### Deployed Link - 
#### https://cointab-employee.netlify.app/

This repository contains a React web application for the Cointab SE-ASSIGNMENT. The application consists of several components to display user information and posts, allowing users to add and download posts in bulk.

# Components
1. App.jsx
Main application component.
Combines the Header and Outlet components.
Renders the application structure using React Router.
2. Header.jsx
Header component displaying the application title.
Includes conditional rendering based on the presence of user information.
3. Card.jsx
Component for displaying user information in a card format.
Provides the option to add a user and navigate to user-specific posts.
4. Post.jsx
Component for displaying user-specific posts.
Allows bulk addition of posts and downloading posts in Excel format.
Utilizes the DownloadExcelButton component for Excel download.
5. DownloadExcelButton.jsx
A reusable button component for downloading user-specific posts in Excel format.
# Usage
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.
# Dependencies
React
react-router-dom
# API Endpoints
User data: https://cointab-backend-uwqe.onrender.com/users/insert-user
Posts data: https://cointab-backend-uwqe.onrender.com/posts
Placeholder posts data: https://jsonplaceholder.typicode.com/posts
# Notes
The application uses Tailwind CSS for styling.
Make sure to replace the placeholder API endpoints with the actual backend endpoints in a production environment.
