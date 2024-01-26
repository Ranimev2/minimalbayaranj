// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBML3HRi76hP3vjtOWwO3n4nA0j9RBRY6s",
  authDomain: "e-nebula-400807.firebaseapp.com",
  projectId: "e-nebula-400807",
  storageBucket: "e-nebula-400807.appspot.com",
  messagingSenderId: "704685869889",
  appId: "1:704685869889:web:77b3b206df5d6aaeb6efc0",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
