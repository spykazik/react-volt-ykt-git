import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfWrlLh8EQVZ4v6gtPQ-Iuoo1OhzmwXqY",
    authDomain: "volt-yakutiya.firebaseapp.com",
    projectId: "volt-yakutiya",
    storageBucket: "volt-yakutiya.appspot.com",
    messagingSenderId: "517561304948",
    appId: "1:517561304948:web:acc218f529154d88ff0e21",
    measurementId: "G-9DFQLPNESL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;