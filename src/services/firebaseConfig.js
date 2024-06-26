import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyYqyVMbPu7HBVVhGCVO2kkZfZjo8eI4o",
  authDomain: "itaipu-30a06.firebaseapp.com",
  databaseURL: "https://itaipu-30a06-default-rtdb.firebaseio.com",
  projectId: "itaipu-30a06",
  storageBucket: "itaipu-30a06.appspot.com",
  messagingSenderId: "1062050257200",
  appId: "1:1062050257200:web:4ef34d2b5d867f920890f5",
  measurementId: "G-8G2N464EYB"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  throw new Error('Firebase configuration is invalid');
}
export { database, auth };
