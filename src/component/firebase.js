import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: ""
}
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};