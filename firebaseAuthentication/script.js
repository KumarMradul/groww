document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Here you can add your authentication logic using Firebase or any other method
        // For demonstration purposes, we'll just show a message based on the input values
        if (email === 'example@example.com' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
        } else {
            loginMessage.textContent = 'Invalid email or password';
        }
    });
});
// firebaseInit.js

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  // Your Firebase config values here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);