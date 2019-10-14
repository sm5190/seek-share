// listen for auth status changes


auth.onAuthStateChanged(user => {
   var x = document.getElementById("myBtn");
   var y=document.getElementById("logout");
   var z=document.getElementById("loggedin");
   var k=document.getElementById("loggedout");
   var h=document.getElementById("signedin");
   var accountDetails = document.getElementById('modal-account');
  if (user) {
      x.style.display = "block";
        y.style.display = "block";
          z.style.display = "block";
          k.style.display = "none";
          h.style.display="none";
        // account info


        if(user.email=='admin@gmail.com'){
        document.getElementById('admin').style.display="block";
      }
      else{
document.getElementById('admin').style.display="none";

}

db.collection('users').doc(user.uid).get().then(doc => {
  const html = `
    <p> Logged in as ${user.email}</p>
    <p>${doc.data().bio}</p>
  `;
  accountDetails.innerHTML = html;
});











  }



   else {

   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";
   k.style.display="block";
     document.getElementById('admin').style.display="none";
h.style.display="block";
accountDetails.innerHTML = '';

  }
});


// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info

  const email = signupForm['usrname'].value;
  const password = signupForm['psw'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword( email, password).then(cred => {
    console.log(cred.user);
    //close the signup modal & reset form
    //const modal = document.querySelector('#modal-signup');
    //M.Modal.getInstance(modal).close();
    signupForm.reset();
    document.location.href = "./index.html?Signup=Successful";
  });
});
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
  document.location.href = "./index.html?Logout=Successful";
  })
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['usrname'].value;
  const password = loginForm['psw'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form

    loginForm.reset();
    document.location.href = "./index.html?Login=Successful";
  });

});
