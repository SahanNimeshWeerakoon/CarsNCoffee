import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0AZ4J3r6hI5mQA3_iCS0ORCyN-xVay9c",
    authDomain: "dev-cloud-b25c3.firebaseapp.com",
    projectId: "dev-cloud-b25c3",
    storageBucket: "dev-cloud-b25c3.appspot.com",
    messagingSenderId: "437962864253",
    appId: "1:437962864253:web:bf6ba79e35d7534a9ee314",
    measurementId: "G-11M3YLT17Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectFirestore = firebaseApp.firestore();
// const auth = firebase.auth();

export {projectFirestore};

  