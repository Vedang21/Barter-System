import firebase from 'firebase';
require ('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyBuHEtHv9APlgRd5SnFGxLST_z_xFl9jH0",
  authDomain: "barter-system-4f3bd.firebaseapp.com",
  databaseURL: "https://barter-system-4f3bd.firebaseio.com",
  projectId: "barter-system-4f3bd",
  storageBucket: "barter-system-4f3bd.appspot.com",
  messagingSenderId: "541593354299",
  appId: "1:541593354299:web:8a01cd54d1c7deaa301c1e",
  measurementId: "G-WCNMR2GCPR"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()