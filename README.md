# Quiz Web App

An interactive quiz application built with vanilla HTML, CSS, and JavaScript, allowing user authentication, quiz taking, and score tracking with an admin dashboard.

## Features

* **Authentication:**
    * Login and Registration forms.
    * Stores user credentials in `localStorage`.
    * Allows login if credentials exist in `localStorage`.
    * Hardcoded admin login (`admin@quiz.com` / `admin123`) redirects to the dashboard.
* **Home Page:**
    * Displays a welcome message.
    * Lists available quizzes retrieved from `localStorage`.
    * Clicking a quiz opens the Quiz Page.
* **Quiz Page:**
    * Shows 3 multiple-choice questions per quiz (questions retrieved from `localStorage`).
    * Each question has at least 3 options and one correct answer.
    * Users can select answers and submit.
    * After submission, the score is displayed and saved in `localStorage` for the user.
    * **Dark Mode:** Offers a toggleable dark theme for improved user experience in low-light environments.
    * **Timer:** Each quiz has a 90-second time limit.
* **Dashboard Page (Admin Only):**
    * Pulls data from `localStorage`.
    * Displays all registered users and their scores.

## Technologies Used

* HTML
* CSS
* JavaScript (vanilla - no frameworks or libraries)

## How to Use

1.  Open the `index.html` file in your web browser.
2.  You will be directed to the Authentication Page where you can either log in if you have existing credentials in `localStorage` or register a new account.
3.  If you log in as the hardcoded admin user (`admin@quiz.com` / `admin123`), you will be redirected to the Dashboard.
4.  After successful login (as a regular user), you will be taken to the Home Page, where you can see a list of available quizzes.
5.  Click on a quiz to start it. You will be presented with 3 multiple-choice questions and a 90-second timer will begin.
6.  Select your answers and click the submit button before the timer runs out. Your score will be displayed and saved.
7.  The application includes a toggle to switch between light and dark mode. Look for a button or icon (e.g., a moon or sun icon) to activate it.
8.  The Dashboard (accessible only by the admin user) will show a list of all registered users and their recorded quiz scores.

## Installation

This application is built with only vanilla HTML, CSS, and JavaScript, so no specific installation steps are required. Simply download or copy the project files and open the `index.html` file in your web browser.

## Data Storage

The application utilizes `localStorage` in the browser to store:

* User credentials
* Quiz data (questions, options, correct answers)
* User scores
* User's preferred theme (for dark mode)

**Note:** Clearing your browser's `localStorage` will reset the application's data and theme preference.
