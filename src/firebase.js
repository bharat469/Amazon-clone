import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc9Az34livlnlyLD2SUnHK2Z-xU0K1PNs",
    authDomain: "fir-afade.firebaseapp.com",
    databaseURL: "https://fir-afade.firebaseio.com",
    projectId: "fir-afade",
    storageBucket: "fir-afade.appspot.com",
    messagingSenderId: "459538075976",
    appId: "1:459538075976:web:5cc81d953b9756ba16a37d",
    measurementId: "G-1E1746TWH1"
  }; 


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };

  