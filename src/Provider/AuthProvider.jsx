import { createContext, useState } from "react";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const authInfo = {
        isSidebarOpen,
        setIsSidebarOpen
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;