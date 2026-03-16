import { createContext,useContext,useEffect,useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){

    const [user,setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem("authUser");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    const login = (username,password) =>{
        if(username==="testuser" && password==="Test123"){
            const userData = {username};
            setUser(userData);
            localStorage.setItem("authUser",JSON.stringify(userData));
            return true;
        }
    }

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("authUser");
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export  function useAuth(){
    return useContext(AuthContext);
}