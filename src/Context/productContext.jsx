import { createContext , useContext } from "react";

const AppContext = createContext();

//provider
const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{myName : "Fuzo"}}>
            {children}
        </AppContext.Provider>
    )
}

//custom Hook
const useProductContext = () => {
    return useContext(AppContext)
};

export {AppProvider ,AppContext , useProductContext};