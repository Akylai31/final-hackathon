import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAJqz0SdS-2yaGsBm4cP1gfX4LqVrobmAE",
    authDomain: "final-hackathon-a7900.firebaseapp.com",
    projectId: "final-hackathon-a7900",
    storageBucket: "final-hackathon-a7900.appspot.com",
    messagingSenderId: "330660431067",
    appId: "1:330660431067:web:794231984719381a7df8fe",
    measurementId: "G-91XL16HHLS"
});
export default app;
export const auth = app.auth();
export const firestore = firebase.firestore();