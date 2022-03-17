import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDvnIUL1xRcAHlxL2CNVxp3eacvH7we_e4",
    authDomain: "webclub-24874.firebaseapp.com",
    projectId: "webclub-24874",
    storageBucket: "webclub-24874.appspot.com",
    messagingSenderId: "504853080291",
    appId: "1:504853080291:web:d302a9a9c4ae5e6fc73dd6",
    measurementId: "G-VV75G6ZKXD"
  };

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();
export default firebaseConfig;