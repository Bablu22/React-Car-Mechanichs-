import { useEffect, useState } from "react"
import firebaseAuthentication from "../Firebase/firebse.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider } from "firebase/auth";

firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        googleSignIn,
        logOut,
        user,
        isLoading,
        facebookSignIn
    }
}

export default useFirebase;