
import firebase from "firebase";

{/*/ For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6jVPfAHamSxKKfyfLyt2I1N1T-Y4724A",
  authDomain: "twitter-clone-app-a8e1b.firebaseapp.com",
  projectId: "twitter-clone-app-a8e1b",
  storageBucket: "twitter-clone-app-a8e1b.appspot.com",
  messagingSenderId: "717961570738",
  appId: "1:717961570738:web:238c973d8e962fdd1adcab",
  measurementId: "G-M5KZMT8RKD"
};*/}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6jVPfAHamSxKKfyFLyt2I1N1T-Y4724A",
  authDomain: "twitter-clone-app-a8e1b.firebaseapp.com",
  projectId: "twitter-clone-app-a8e1b",
  storageBucket: "twitter-clone-app-a8e1b.appspot.com",
  messagingSenderId: "717961570738",
  appId: "1:717961570738:web:288c973d8e962fdd1adcab",
  measurementId: "G-M5KZMT8RKD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export  {db,auth};
