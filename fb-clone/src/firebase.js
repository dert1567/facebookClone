import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC1Zy5czkHAtm25DwJePsAQqPKz5KSGDkc",
    authDomain: "facebookclone-6cb7c.firebaseapp.com",
    projectId: "facebookclone-6cb7c",
    storageBucket: "facebookclone-6cb7c.appspot.com",
    messagingSenderId: "188038151248",
    appId: "1:188038151248:web:5bd7932e273255ce8ea555"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  const auth= firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider}
  export default db;