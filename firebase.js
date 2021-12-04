import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo2Bzdp9jmB5g1dWv1XQVEpCAAFcuBo7E",
  authDomain: "twitter-clone-be6e7.firebaseapp.com",
  projectId: "twitter-clone-be6e7",
  storageBucket: "twitter-clone-be6e7.appspot.com",
  messagingSenderId: "361589562706",
  appId: "1:361589562706:web:ce95b3fe42900104c12e8b",
  measurementId: "G-RK84V08Q0H",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };