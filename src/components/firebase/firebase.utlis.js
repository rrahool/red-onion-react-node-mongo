import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLG5N3k1oz0kN15G5RNvR3a5ZMzlmxaBM",
  authDomain: "test-5fe2a.firebaseapp.com",
  databaseURL: "https://test-5fe2a.firebaseio.com",
  projectId: "test-5fe2a",
  storageBucket: "test-5fe2a.appspot.com",
  messagingSenderId: "34812902267",
  appId: "1:34812902267:web:b16b0ad09a3210d46e5bde"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'Select a Account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;