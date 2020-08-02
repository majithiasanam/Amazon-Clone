import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDG3Qylk4dp_SqzoE5blCr37pFjU6i0UpQ",
  authDomain: "clone-885ad.firebaseapp.com",
  databaseURL: "https://clone-885ad.firebaseio.com",
  projectId: "clone-885ad",
  storageBucket: "clone-885ad.appspot.com",
  messagingSenderId: "861674073812",
  appId: "1:861674073812:web:59a9e82a6cd9314d1ad541",
  measurementId: "G-Y3VHN374GF",
});

// const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { auth };
