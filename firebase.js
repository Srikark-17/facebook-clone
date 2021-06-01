import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWWTST6UZCirf4W7zwJ0nrFV2KQaiLssA",
  authDomain: "facebook-9346e.firebaseapp.com",
  projectId: "facebook-9346e",
  storageBucket: "facebook-9346e.appspot.com",
  messagingSenderId: "860618110201",
  appId: "1:860618110201:web:e0335ca27eb981f1c55e28",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
