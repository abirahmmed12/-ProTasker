// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTMw_juJnJDuKj05FxyAqv_H15A2bBKmU",
  authDomain: "task-management-7738d.firebaseapp.com",
  projectId: "task-management-7738d",
  storageBucket: "task-management-7738d.appspot.com",
  messagingSenderId: "319060594133",
  appId: "1:319060594133:web:30c5c256d6f6637347815c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app