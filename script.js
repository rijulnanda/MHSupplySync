// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC469sIwL2Ja5fIu4wC4yWotuXdZApNx3s",
  authDomain: "supplysynctest.firebaseapp.com",
  databaseURL: "https://supplysynctest-default-rtdb.firebaseio.com",
  projectId: "supplysynctest",
  storageBucket: "supplysynctest.appspot.com",
  messagingSenderId: "153630325231",
  appId: "1:153630325231:web:f5c143dd4fc72fc301de1a",
  measurementId: "G-Q5FQREPD8H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var item = document.getElementById('item').value
  var location = document.getElementById('location').value
  var quantity = document.getElementById('quantity').value

  database.ref('users/' + username).set({
    item : item,
    location : location,
    quantity : quantity
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}
