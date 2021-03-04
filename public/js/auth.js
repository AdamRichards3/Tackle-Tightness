// This get the users inforamtion once they have signed in and display there username 
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const el = document.getElementById('greeting');
  el.textContent = 'Hello ' + profile.getName() + '!';

  setTimeout(callServer, 100);
}
// This will sign the user out and display a message
async function signOut() {
  await gapi.auth2.getAuthInstance().signOut();
  console.log('User signed out.');
  const el = document.getElementById('greeting');
  el.textContent = 'Welcome!';
}
// This will actually get the data from the google auth
async function callServer() {
  const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

  const el = document.getElementById('server-response');
  
  const fetchOptions = {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  };
  const response = await fetch('/api/hello', fetchOptions);
  if (!response.ok) {
    // handle the error
    el.textContent = "Server error:\n" + response.status;
    return;
  }

  // handle the response
  const data = await response.text();
  console.log('setting text content: ' + data);
  el.textContent = data;
}