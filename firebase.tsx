// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkljYbBnbblDNTdQGbS1r0RGh3l6sqG4U",
  authDomain: "safelydv300classproj.firebaseapp.com",
  projectId: "safelydv300classproj",
  storageBucket: "safelydv300classproj.firebasestorage.app",
  messagingSenderId: "130552682344",
  appId: "1:130552682344:web:f4346a2857acb59cc7e8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// db is our connection var to our firestore db


// HOMEWORK: 
// 1. Navigate to Details Screen & pass the data from the item that was clicked on (either all data or UID & call)
// 2. mark item as completed + strikethrough on home screen if completed
// 3. Add a delete button to the details screen to delete the item

// BONUS: 
// 4. real time data updates