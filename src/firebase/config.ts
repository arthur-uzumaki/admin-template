import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebass from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
if(!firebase.getApp.length){
  firebass.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebass