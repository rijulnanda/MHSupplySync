// Import the functions you need from the SDKs you need

var firebaseConfig = {
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
  var quantity = document.getElementById('quantity').value
  var text = document.getElementById('location').value

  database.ref('inventory/' + item).set({
    quantity : quantity,
    text : location,
    item : item,
  })

alert('Saved')
}
