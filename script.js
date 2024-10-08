// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC469sIwL2Ja5fIu4wC4yWotuXdZApNx3s",
  authDomain: "supplysynctest.firebaseapp.com",
  projectId: "supplysynctest",
  storageBucket: "supplysynctest.appspot.com",
  messagingSenderId: "153630325231",
  appId: "1:153630325231:web:f5c143dd4fc72fc301de1a",
  measurementId: "G-Q5FQREPD8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add Item functionality
document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const itemName = document.getElementById('item-name').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    // Add item to Firestore
    db.collection("inventory").add({
        name: itemName,
        description: description,
        quantity: parseInt(quantity),
        location: location
    })
    .then(() => {
        document.getElementById('add-confirmation-message').innerText = 'Item added successfully!';
        // Clear form fields
        document.getElementById('add-item-form').reset();
    })
    .catch((error) => {
        console.error('Error adding item:', error);
        document.getElementById('add-confirmation-message').innerText = 'Failed to add item.';
    });
});
