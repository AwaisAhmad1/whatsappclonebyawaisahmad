import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDwbqZIN_TselQMIb32ry3vTis-bGN2xjY",
    authDomain: "whatsapp-clone-awaisahmad.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-awaisahmad.firebaseio.com",
    projectId: "whatsapp-clone-awaisahmad",
    storageBucket: "whatsapp-clone-awaisahmad.appspot.com",
    messagingSenderId: "199010065772",
    appId: "1:199010065772:web:d4c236d755a5de5d996749",
    measurementId: "G-YT0YWXZQF9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;