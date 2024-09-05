  document.querySelector('.img__btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup');
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";
import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js"; 
const firebaseConfig = {
apiKey: "AIzaSyCXs4TBI4LXsA5-T4_K1qTb2xUFdsZMkUI",
authDomain: "login-signup-64f88.firebaseapp.com",
projectId: "login-signup-64f88",
storageBucket: "login-signup-64f88.appspot.com",
messagingSenderId: "570726021789",
appId: "1:570726021789:web:81eff550a01504aeef3274",
measurementId: "G-3T5DPKK4P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';






// signIn
const btn=document.getElementById('btn')
if(btn){
btn.addEventListener('click',()=>{
  const email= document.getElementById('email').value;
  const password= document.getElementById('password').value;
  alert("opening....")
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})
}
// with google
const googleBtn=document.getElementById('btn1')
googleBtn.addEventListener('click',()=>{
  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert('opening')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})



// signup


import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";


// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const auth1 = getAuth()

const btn1=document.getElementById('btn1');
btn1.addEventListener('click',()=>{
  const email1=document.getElementById('email1').value;
  const pass1=document.getElementById('pass1').value;
  alert('creating....')
  createUserWithEmailAndPassword(auth1, email1, pass1)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
  // ..
});
})
