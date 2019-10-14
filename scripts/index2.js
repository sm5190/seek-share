

const accountDetails = document.querySelector('#account-details');
function setupUI() {
  console.log('setup called');
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.email);


      const html = `
        <p> Logged in as ${user.email}</p>
      `;
      accountDetails.innerHTML = html;
      // account info
      db.collection('users').doc(user.uid).get().then(doc => {
        const html = `
          <p> Logged in as ${user.email}</p>
          <p>${doc.data().bio}</p>
        `;
        accountDetails.innerHTML = html;
        console.log(html);
      });

    } else {
      accountDetails.innerHTML = '';
    }
  });
};
    setupUI();
