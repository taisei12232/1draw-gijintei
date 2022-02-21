import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    databaseURL: process.env.DATABASEURL
}

initializeApp(firebaseConfig);
const db = getFirestore();

export {db};