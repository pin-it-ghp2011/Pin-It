import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCvjPTDy9pi47E6qWXGnzj4Z1knQ7MLs_Q',
  authDomain: 'pinitfinal.firebaseapp.com',
  projectId: 'pinitfinal',
  storageBucket: 'pinitfinal.appspot.com',
  messagingSenderId: '923757809564',
  appId: '1:923757809564:web:efbc06396ce2c4464c4259'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
