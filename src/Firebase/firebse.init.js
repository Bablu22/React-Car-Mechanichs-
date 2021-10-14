import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confir";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default firebaseAuthentication;