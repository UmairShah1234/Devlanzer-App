import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyBj8j6WMoeOJWBgmY9vkAs67rCKDAWhWg0",
  authDomain: "devlanzer-53856.firebaseapp.com",
  projectId: "devlanzer-53856",
  storageBucket: "devlanzer-53856.appspot.com",
  messagingSenderId: "655178311525",
  appId: "1:655178311525:web:9ff6314671d4def1bce38c",
  measurementId: "G-LXZQ26HCL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
