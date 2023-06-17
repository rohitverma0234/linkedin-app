
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

  apiKey: "AIzaSyDb_5gIWciFM8VQl6dfhaiMerCAZHqbPtE",

  authDomain: "linkedin-app-6d7f3.firebaseapp.com",

  projectId: "linkedin-app-6d7f3",

  storageBucket: "linkedin-app-6d7f3.appspot.com",

  messagingSenderId: "1095425691989",

  appId: "1:1095425691989:web:0e9da795d6364b45641fdc"

};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  // export default firebase;
  export {db,auth};