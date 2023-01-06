import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({

        apiKey: "AIzaSyALl6MsVlrPVOrZzr9ehgBg51EYcnyrpnk",
        authDomain: "unichat-f2e54.firebaseapp.com",
        projectId: "unichat-f2e54",
        storageBucket: "unichat-f2e54.appspot.com",
        messagingSenderId: "596191436981",
        appId: "1:596191436981:web:51d38be1fa2a81ba4c9efc"

}).auth();
