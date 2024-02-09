
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.DB_FIREBASE,
    authDomain: "media-recommendations-58f58.firebaseapp.com",
    projectId: "media-recommendations-58f58",
    storageBucket: "media-recommendations-58f58.appspot.com",
    messagingSenderId: "294648044811",
    appId: "1:294648044811:web:0e25e37cf601a1e5df560e",
    measurementId: "G-X7QVPWF7K9"
  };

const app = initializeApp(firebaseConfig);

export default app