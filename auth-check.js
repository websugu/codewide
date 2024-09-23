// auth-check.js
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is logged in, redirect to profile
        window.location.href = 'Profile.html';
    }
});


