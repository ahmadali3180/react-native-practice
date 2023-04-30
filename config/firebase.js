// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkPCIXBDeMym0gALjFOPqig62LqHp_6Wk',
  authDomain: 'redux-practice-app.firebaseapp.com',
  projectId: 'redux-practice-app',
  storageBucket: 'redux-practice-app.appspot.com',
  messagingSenderId: '346583868734',
  appId: '1:346583868734:web:123a0009d75f844070b86f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
