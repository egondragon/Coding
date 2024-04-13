// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"; // Use "compat" for backward compatibility
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcBYaPQ_tfL4ISNiouwO1Cjb90rFkPt3Y",
    authDomain: "slack-clone-yt-b0996.firebaseapp.com",
    projectId: "slack-clone-yt-b0996",
    storageBucket: "slack-clone-yt-b0996.appspot.com",
    messagingSenderId: "845392635040",
    appId: "1:845392635040:web:8a72dbaf80b5e25920d5c5",
    measurementId: "G-KCQJFQRH55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth, provider, db
};
