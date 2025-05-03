import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfSaxiuCUAE-h29ZDYqqyqdOmnNy25B8Y",
  authDomain: "hotel-e8531.firebaseapp.com",
  projectId: "hotel-e8531",
  storageBucket: "hotel-e8531.firebasestorage.app",
  messagingSenderId: "471189626439",
  appId: "1:471189626439:web:64daa283875f650257db62",
  measurementId: "G-E2N0P2JLT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)