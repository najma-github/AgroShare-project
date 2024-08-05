import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB-z9SNypbmpCfY3yzrVyaFJnAVZnCJ5IE",
    authDomain: "agroshare-project.firebaseapp.com",
    databaseURL: "https://agroshare-project-default-rtdb.firebaseio.com",
    projectId: "agroshare-project",
    storageBucket: "agroshare-project.appspot.com",
    messagingSenderId: "444750909875",
    appId: "1:444750909875:web:68372fafa9a6f77433bbc6",
    measurementId: "G-WBVY2TF663"
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
