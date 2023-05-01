import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDzX8EXM-UOOiPTM4vdeDBHnXrI9WMxtY0",
  authDomain: "project71-704f1.firebaseapp.com",
  projectId: "project71-704f1",
  storageBucket: "project71-704f1.appspot.com",
  messagingSenderId: "1042955322044",
  appId: "1:1042955322044:web:395cf4eb4d0b002ebc06b9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
