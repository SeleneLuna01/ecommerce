import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLAS0PJHIuxqGGBBoRtF2fuXXElUvtlGc",
    authDomain: "lunareactjs.firebaseapp.com",
    projectId: "lunareactjs",
    storageBucket: "lunareactjs.appspot.com",
    messagingSenderId: "640676245388",
    appId: "1:640676245388:web:31b55f22bf55591e0730a9",
    measurementId: "G-JX0DJK1B1C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase