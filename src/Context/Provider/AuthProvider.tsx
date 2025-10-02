import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User, type UserCredential } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import auth from "../../services/Firebase/firebase.config";
import AuthContext from "../Context/AuthContex";


interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // user login with firebase 
    const userLogin = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // user logout with firebase 
    const logout = (): Promise<void> => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

        });
        return () => unsubscribe();
    }, []);

    console.log(user)

    const authInfo = {
        user,
        loading,
        userLogin,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;