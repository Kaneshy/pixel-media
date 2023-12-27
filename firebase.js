
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAlVVKuGZRYsgGIUv_9E4vbGyZqeKAql-M",
    authDomain: "media-recommendations-58f58.firebaseapp.com",
    projectId: "media-recommendations-58f58",
    storageBucket: "media-recommendations-58f58.appspot.com",
    messagingSenderId: "294648044811",
    appId: "1:294648044811:web:0e25e37cf601a1e5df560e",
    measurementId: "G-X7QVPWF7K9"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app