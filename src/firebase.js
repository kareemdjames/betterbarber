import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBPeHcAPyaZXVtF1JbJI6RplhrDyfZq774",
    authDomain: "betterbarber-73ef1.firebaseapp.com",
    databaseURL: "https://betterbarber-73ef1.firebaseio.com",
    projectId: "betterbarber-73ef1",
    storageBucket: "",
    messagingSenderId: "215714466168"
};

firebase.initializeApp(config);

export default firebase

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
