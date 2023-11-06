// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDveRo5TusyW4j0FNd6Cvij2dFd9jYR9Gc",
    authDomain: "online-market-e149d.firebaseapp.com",
    projectId: "online-market-e149d",
    storageBucket: "online-market-e149d.appspot.com",
    messagingSenderId: "493121624416",
    appId: "1:493121624416:web:b779b16b142f2c0119e605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };