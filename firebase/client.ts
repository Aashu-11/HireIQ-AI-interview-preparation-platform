import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmHf3vAOq8fXUTL-oqn3u-KGg51waLIuU",
  authDomain: "aiinterviewplatform-3e53e.firebaseapp.com",
  projectId: "aiinterviewplatform-3e53e",
  storageBucket: "aiinterviewplatform-3e53e.firebasestorage.app",
  messagingSenderId: "514047005879",
  appId: "1:514047005879:web:a6d783c0c5f043fc932932",
  measurementId: "G-JBB5B6GFW6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
