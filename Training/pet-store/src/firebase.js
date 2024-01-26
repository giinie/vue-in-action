// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwqEl62deFsLyIo3sd_8zXG7DHWYBhvWY',
  authDomain: 'gi-works-test.firebaseapp.com',
  projectId: 'gi-works-test',
  storageBucket: 'gi-works-test.appspot.com',
  messagingSenderId: '914703372481',
  appId: '1:914703372481:web:ad536892989570770e4440',
  measurementId: 'G-Q8MV6YJ41R',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const productsRef = db.collection('PetStore');
