// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9xxG1mWJwFoIC4hKBzloRFNiPb6Wvfi4",
    authDomain: "contact-cc139.firebaseapp.com",
    databaseURL: "https://contact-cc139.firebaseio.com",
    projectId: "contact-cc139",
    storageBucket: "",
    messagingSenderId: "409761899892",
    appId: "1:409761899892:web:711dd2cdea022d9a3eb821"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form function here
  function submitForm(e){
    e.preventDefault();

    // Get values
    var name = document.getElementById('name').value; //getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();

    //redirect to home page

    setTimeout(function(){
      document.location.href="./index.html";
    },3050);


  }

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
