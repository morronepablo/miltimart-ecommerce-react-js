import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpl66uZshsu1tqrbTf6pLMPrzdsvLLr2I",
  authDomain: "multimart-91d61.firebaseapp.com",
  projectId: "multimart-91d61",
  storageBucket: "multimart-91d61.appspot.com",
  messagingSenderId: "275521705462",
  appId: "1:275521705462:web:e3ab81f262834e4af3a3d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
