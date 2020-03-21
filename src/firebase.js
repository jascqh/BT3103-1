import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCEjANvsUO3JZ5cPR_8wYn08FQm3q0jsZs",
  authDomain: "groceryproject-6c9e3.firebaseapp.com",
  databaseURL: "https://groceryproject-6c9e3.firebaseio.com",
  projectId: "groceryproject-6c9e3",
  storageBucket: "groceryproject-6c9e3.appspot.com",
  messagingSenderId: "55146985585",
  appId: "1:55146985585:web:9631221d6a86e4298303d0",
  measurementId: "G-E7XVQE36E5"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;