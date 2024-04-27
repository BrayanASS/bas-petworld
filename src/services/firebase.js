import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyfDTdLLDb1-qPFwCuEZXps4Vbybm9mjU",
  authDomain: "bas-petworld-e764f.firebaseapp.com",
  databaseURL: "https://bas-petworld-e764f-default-rtdb.firebaseio.com",
  projectId: "bas-petworld-e764f",
  storageBucket: "bas-petworld-e764f.appspot.com",
  messagingSenderId: "37865520860",
  appId: "1:37865520860:web:fc2cb90f4c3db27b66be19",
  measurementId: "G-0CGBHCSVZT",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();

export { database, app, auth };
