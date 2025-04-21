# Quiz Web Application

A comprehensive web-based quiz application built with vanilla JavaScript, HTML, and CSS.

## Features

### User Authentication
- User registration with email validation
- Secure login system
- Admin and regular user roles
- Session management

### Quiz Management
- Multiple quiz categories (JavaScript, HTML, CSS, Python)
- Difficulty levels (Easy, Medium, Hard, All Levels)
- Timer functionality adjusted based on difficulty:
  - Easy: 2 minutes
  - Medium: 1.5 minutes
  - Hard: 1 minute
  - All Levels: 3 minutes
- Persistent difficulty selection across quizzes

### Quiz Taking Experience
- Interactive quiz interface
- Multiple-choice questions
- Visual timer with warnings when time is running low
- Immediate feedback after quiz completion
- Score calculation and display

### Admin Dashboard
- View all user scores
- Sort scores by submission time
- See detailed information including:
  - Username
  - Quiz title
  - Score
  - Time taken
  - Submission timestamp
  - Difficulty level

### User Experience
- Responsive design
- Clean and intuitive interface
- Visual indicators for difficulty levels
- Score history tracking

### Data Management
- Local storage for quiz data
- Session storage for user authentication
- Score history persistence

## Technical Implementation
- Vanilla JavaScript (no frameworks)
- CSS for styling
- HTML5 for structure
- LocalStorage and SessionStorage for data persistence
- Responsive design principles

## Getting Started
1. Clone the repository
2. Open index.html in your browser
3. Register a new account or use the default admin account:
   - Username: admin@quiz.com
   - Password: admin123
4. Start taking quizzes!

## Default Admin Access
- Username: admin@quiz.com
- Password: admin123