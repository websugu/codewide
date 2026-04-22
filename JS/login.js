import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDuTtwVyvfidOwjzltlRUTOSYYaLtC_G1c",
  authDomain: "mmsp-b7835.firebaseapp.com",
  projectId: "mmsp-b7835",
  storageBucket: "mmsp-b7835.firebasestorage.app",
  messagingSenderId: "793727393765",
  appId: "1:793727393765:web:8b9813288c6eaabb27590c"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal"
});

// Send OTP
window.sendOTP = async function () {
  const phoneNumber = document.getElementById("phone").value;

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );

    window.confirmationResult = confirmationResult;
    document.getElementById("status").innerText = "OTP sent!";

  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "Error sending OTP";
  }
};

// Verify OTP
window.verifyOTP = async function () {
  const code = document.getElementById("otp").value;

  try {
    const result = await window.confirmationResult.confirm(code);
    const user = result.user;

    // Save user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      phone: user.phoneNumber,
      createdAt: new Date()
    });

    // Save session
    localStorage.setItem("user", user.uid);

    document.getElementById("status").innerText = "Login successful!";

    // Redirect
    window.location.href = "index.html";

  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "Invalid OTP";
  }
};