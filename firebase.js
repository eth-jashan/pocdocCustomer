import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBzXcQ-YH-9fj9JXYY6TKipHJV5QpnpQk4",
    authDomain: "pocdocadmin.firebaseapp.com",
    databaseURL: "https://pocdocadmin.firebaseio.com",
    projectId: "pocdocadmin",
    storageBucket: "pocdocadmin.appspot.com",
    messagingSenderId: "705259645850",
    appId: "1:705259645850:web:0cf7a23f41c343fd316823",
    measurementId: "G-M5KQDKMYKX"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    export default firebase
