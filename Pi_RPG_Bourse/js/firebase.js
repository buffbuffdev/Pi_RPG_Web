// js/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDq-z7KvKm6fK1WsbDYIr-ohO_AhgFpFvA",
  authDomain: "pi-bourse.firebaseapp.com",
  databaseURL: "https://pi-bourse-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "pi-bourse",
  storageBucket: "pi-bourse.appspot.com",
  messagingSenderId: "691911373853",
  appId: "1:691911373853:web:7d065225e3d656161c42f4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
