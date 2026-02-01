# GitHub User Search Application

A modern, responsive React-based search engine for GitHub profiles. This application allows users to find GitHub accounts using the official GitHub API, featuring advanced filtering by location and repository count.

This project was built as part of the "Working with APIs" module to master advanced HTTP networking and React integration.

## 🚀 Project Overview
The **GitHub User Search Application** enables users to explore the GitHub ecosystem efficiently. It features a clean UI built with Tailwind CSS and handles complex API queries to filter users based on specific professional criteria.

## 🎯 Learning Objectives
- **Set Up a React Project for API Integration:** Configured a high-performance environment using Vite and Axios.
- **Advanced GitHub API Features:** Implemented basic username search and advanced multi-parameter filtering (location, repos).
- **UI/UX Excellence:** Utilized Tailwind CSS for a mobile-first, responsive design.
- **Professional Deployment:** Deployed a production-ready application to Vercel with environment variable management.

## ✨ Features
- **Instant Search:** Find GitHub users by username.
- **Advanced Filters:** Narrow down results by **Location** and **Minimum Repositories**.
- **Data Visualization:** Displays avatars, bios, location, and repository counts.
- **Dynamic Feedback:** Handles loading states and provides "User Not Found" messaging.
- **Direct Links:** One-click access to the user's official GitHub profile.

## 🛠️ Tech Stack
- **Frontend Framework:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Source API:** [GitHub API](https://docs.github.com/en/rest)

## 📂 Project Structure
```text
github-user-search/
├── src/
│   ├── components/      # React UI components (Search, Results, etc.)
│   ├── services/        # API service logic (githubService.js)
│   ├── App.jsx          # Main application logic
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── .env                 # Environment variables (API Keys)
└── tailwind.config.js   # Tailwind CSS configuration