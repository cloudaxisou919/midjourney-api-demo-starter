// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqgiWMpRLluoFggUQKG2K0qU7UdlXrk90",
  authDomain: "magiclabai-392600.firebaseapp.com",
  projectId: "magiclabai-392600",
  storageBucket: "magiclabai-392600.appspot.com",
  messagingSenderId: "752288224277",
  appId: "1:752288224277:web:1e0d2313281c36e716ea1c",
  measurementId: "G-YLMESBNFL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
