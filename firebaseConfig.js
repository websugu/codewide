const firebaseConfig = {
  apiKey: "AIzaSyChHJORSiWCfP94HFA7b2-zu1tewsSCNIU",
  authDomain: "codewide-9c807.firebaseapp.com",
  projectId: "codewide-9c807",
  storageBucket: "codewide-9c807.appspot.com",
  messagingSenderId: "402735947518",
  appId: "1:402735947518:web:93c1c91954727b40148faf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
// const auth = firebase.auth();
// firebase.auth().currentUser;


