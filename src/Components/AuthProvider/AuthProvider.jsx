
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from '../../Firebase/firebaseConfig';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {loading, createUser}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;