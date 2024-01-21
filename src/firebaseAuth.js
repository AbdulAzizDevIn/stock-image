import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA4P2la4fqCPfKEttyz6uCfzHn3tdYUEbc",
    authDomain: "stock-image-e7760.firebaseapp.com",
    projectId: "stock-image-e7760",
    storageBucket: "stock-image-e7760.appspot.com",
    messagingSenderId: "172226627919",
    appId: "1:172226627919:web:f05606a1e884d2c08a1d3a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};