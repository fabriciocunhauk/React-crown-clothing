import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmCxjNTlE5vxEI-XES11Pa2Ny9DT_VMUM",
    authDomain: "crowndb-12b62.firebaseapp.com",
    databaseURL: "https://crowndb-12b62.firebaseio.com",
    projectId: "crowndb-12b62",
    storageBucket: "crowndb-12b62.appspot.com",
    messagingSenderId: "721025640539",
    appId: "1:721025640539:web:251c0f78e7119ce78cf77e",
    measurementId: "G-31EEN3KSLR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWhithGoogle = () => auth.signInWithPopup(provider);

export default firebase;