import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBN8EvS6YZepwdo9o9uqO2tpVO1NytWD1M",
  authDomain: "slack-clone-38816.firebaseapp.com",
  databaseURL: "https://slack-clone-38816.firebaseio.com",
  projectId: "slack-clone-38816",
  storageBucket: "slack-clone-38816.appspot.com",
  messagingSenderId: "1056283957232",
  appId: "1:1056283957232:web:a63e5e1f60659a5a1d6f35",
  measurementId: "G-0LY109CRLF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
