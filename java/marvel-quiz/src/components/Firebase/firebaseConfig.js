import {initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGe7mYvGajivG1sohUVjM0T6ooFIg6t1U",
    authDomain: "marvel-quizz-636c8.firebaseapp.com",
    projectId: "marvel-quizz-636c8",
    storageBucket: "marvel-quizz-636c8.appspot.com",
    messagingSenderId: "109810897768",
    appId: "1:109810897768:web:82de0f851896fc5de3fcdd"
};

const app = initializeApp(config);
export const auth = getAuth(app);

/*
const app = initializeApp(config);
export const auth = getAuth(app);
*/
