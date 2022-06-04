import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDOmain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
    appid:process.env.REACT_APP_FIREBASE_APP_ID
  };
  //Initialize Firebase
 
  const app = initializeApp(firebaseConfig);

  //Initialize firbase authentication and get a refrence to the service;
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);