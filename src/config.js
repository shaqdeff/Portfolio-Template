// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXjYpiT2eFVTZ4euM-pLaF7CBUW5Itjnk",
  authDomain: "portfolio-projec-1707216060128.firebaseapp.com",
  databaseURL: "https://portfolio-projec-1707216060128-default-rtdb.firebaseio.com",
  projectId: "portfolio-projec-1707216060128",
  storageBucket: "portfolio-projec-1707216060128.appspot.com",
  messagingSenderId: "875327441255",
  appId: "1:875327441255:web:076ec001bf150f353ac7c2",
  measurementId: "G-25MVL66C1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);