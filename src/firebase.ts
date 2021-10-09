import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import * as fireStore from "firebase/firestore";

// firebase
import { firebaseConfig } from "config/app.config";

firebase.initializeApp(firebaseConfig);

export { firebase, fireStore };
