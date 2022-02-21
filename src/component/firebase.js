import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    databaseURL: process.env.REACT_APP_DATABASEURL
}

initializeApp(firebaseConfig);
const db = getFirestore();

export {db};