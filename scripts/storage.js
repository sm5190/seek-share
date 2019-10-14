// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJiycczyJzRhuUYLgfN6YO3QmGCRh0aU0",
  authDomain: "seeknshare-fd878.firebaseapp.com",
  databaseURL: "https://seeknshare-fd878.firebaseio.com",
  projectId: "seeknshare-fd878",
  storageBucket: "seeknshare-fd878.appspot.com",
  messagingSenderId: "383874502946",
  appId: "1:383874502946:web:1eeb6c06707ecdca86557b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var storage = firebase.storage();
 var storageRef = storage.ref();
