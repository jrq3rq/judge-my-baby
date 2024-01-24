import firebase from "firebase/app";
import "firebase/firestore";

// Firebase initialization (consider moving this to a separate config file)
const firebaseConfig = {
  // Your Firebase config
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const addBaby = async (baby) => {
  await db.collection("babies").add(baby);
};

export const getBabies = async () => {
  const snapshot = await db.collection("babies").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add more functions for update, delete, etc.

// You can directly use Firebase Firestore within your React components. This approach is straightforward but might lead to repetitive code if the same Firebase logic is used in multiple components.

// Setup: Initialize Firebase in your app, typically in index.js or a dedicated Firebase config file.
// Usage: Directly interact with Firestore in your component's lifecycle methods (e.g., useEffect for functional components) to fetch, add, update, or delete data.
