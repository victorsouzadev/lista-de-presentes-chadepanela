import * as firebase from "firebase/app";
import firebaseConfig from './ConfigFirebase.js'

import "firebase/firebase-database";
import "firebase/firebase-auth"

console.log(firebaseConfig)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase