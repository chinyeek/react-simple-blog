import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyArXyEQ4mezyIWmR7wMX2e-nrIR8jGMAS4",
  authDomain: "chinyeekarwehl-simple-blog.firebaseapp.com",
  projectId: "chinyeekarwehl-simple-blog",
  storageBucket: "chinyeekarwehl-simple-blog.appspot.com",
  messagingSenderId: "306319865174",
  appId: "1:306319865174:web:cc7e748e9c1d7263ae12f7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;