import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCvjPTDy9pi47E6qWXGnzj4Z1knQ7MLs_Q',
  authDomain: 'pinitfinal.firebaseapp.com',
  projectId: 'pinitfinal',
  storageBucket: 'pinitfinal.appspot.com',
  messagingSenderId: '923757809564',
  appId: '1:923757809564:web:efbc06396ce2c4464c4259'
}

// //Your web app's Firebase configuration with .env.local file setup
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL, this one is not in our config file
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
