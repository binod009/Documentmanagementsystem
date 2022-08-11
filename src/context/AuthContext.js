import { createContext,useEffect,useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
currentUser : JSON.parse(localStorage.getItem("user")) || null,
};
//creating context which will be available to all the components
export const  AuthContext = createContext(INITIAL_STATE);


//Provider function/
export const  AuthContextProvider = ({children}) =>{
const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//whenever the currentUser changes this is going to be fired and the current user
//is going to be stored in localstorage  to manage the state.
useEffect(()=>{
localStorage.setItem("user",JSON.stringify(state.currentUser),)
},[state.currentUser])
return (
    <AuthContext.Provider value ={{currentUser:state.currentUser,dispatch}}>
          {children}
    </AuthContext.Provider>
   );
}
  