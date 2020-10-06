import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';

const firebaseConfig = {
    apiKey: window.apiKey,
    authDomain: "famitalk-3aaec.firebaseapp.com",
    databaseURL: "https://famitalk-3aaec.firebaseio.com",
    projectId: "famitalk-3aaec",
    storageBucket: "famitalk-3aaec.appspot.com",
    messagingSenderId: window.messagingSenderId,
    appId: "1:1007517701682:web:7bf51c508cc49e786c4e2b",
    measurementId: "G-TGG635H8BZ",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
// const baseDb = myFirebase.firestore();
// export const db = baseDb;