import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDNt0sZwE-anzM0XePRfTtKSSDd7sb5vxg",
    authDomain: "authentication-e01e3.firebaseapp.com",
    projectId: "authentication-e01e3",
    storageBucket: "authentication-e01e3.appspot.com",
    messagingSenderId: "1027205635402",
    appId: "1:1027205635402:web:331c915d866dc7fb77b5b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user);
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});
