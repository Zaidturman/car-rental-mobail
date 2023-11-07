// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjsoct27QYmA3EOb4fwsBQalBBKSJSmRI",
    authDomain: "car-rental-app-4972b.firebaseapp.com",
    projectId: "car-rental-app-4972b",
    storageBucket: "car-rental-app-4972b.appspot.com",
    messagingSenderId: "719817119026",
    appId: "1:719817119026:web:177c1546903d8ed1e9b32b",
    measurementId: "G-P11J72YPX3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
firebase.initializeApp(firebaseConfig);

export {firebase}
// Initialize Firebase
