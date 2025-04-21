// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore service
import { getAuth } from "firebase/auth"; // Authentication service
import { firebaseConfig } from "./config"; // Import the firebaseConfig

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);  // Initialize Firestore
const auth = getAuth(app);     // Initialize Auth

// Export the initialized services to be used in other files
export { db, auth };  // Ensure both db and auth are exported correctly

