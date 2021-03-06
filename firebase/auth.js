//Inside the AuthContext file.

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from './config';

// Inside AuthProvider
const provider = new GoogleAuthProvider();

const mapUserFromFirebaseAuthToUser = (user) => {
    console.log(user);
    if(user) {
        const {displayName, email, photoURL } = user
        return {
            avatar: photoURL,
            username: displayName,
            email
        }
    }
}

export const onStateChanged = (onChange) => {
    return onAuthStateChanged(auth, (user) => {
        const normalizedUser = mapUserFromFirebaseAuthToUser(user)
        onChange(normalizedUser)
    });
}

export const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log({ credential, token, user });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential });
        });
};

const logout = () => {
    auth.signOut();
    console.log("logout");
};