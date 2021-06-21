import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzGrlqWQwnovqS5i6lFLdWaJodmVloX6M",
    authDomain: "crm-c33fe.firebaseapp.com",
    projectId: "crm-c33fe",
    storageBucket: "crm-c33fe.appspot.com",
    messagingSenderId: "339071777394",
    appId: "1:339071777394:web:7f0dc8b31acf06db0f60eb"
  };
  // Initialize Firebase
  
export default firebase.initializeApp(firebaseConfig);