import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKrRtEYKTtqSSPv9f-oiA-oTZLDfX4JGw",
  authDomain: "fir-clone-d52ea.firebaseapp.com",
  databaseURL: "https://fir-clone-d52ea.firebaseio.com",
  projectId: "fir-clone-d52ea",
  storageBucket: "fir-clone-d52ea.appspot.com",
  messagingSenderId: "405434634144",
  appId: "1:405434634144:web:136c942806df214696dec5",
  measurementId: "G-ZGVP7LF31G",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
