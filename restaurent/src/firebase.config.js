import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBij31F3Gr7hxofNcqTX2BM-SHbEFe_c0",
  authDomain: "foodapp-73bc3.firebaseapp.com",
  databaseURL: "https://foodapp-73bc3-default-rtdb.firebaseio.com",
  projectId: "foodapp-73bc3",
  storageBucket: "foodapp-73bc3.appspot.com",
  messagingSenderId: "801229215519",
  appId: "1:801229215519:web:27296f77de5532d065822a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
