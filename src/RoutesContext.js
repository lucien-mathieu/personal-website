import { createContext, useContext, useState } from "react";

const RoutesContext = createContext();

export const RoutesProvider = ({ children }) => {
    const [routes] = useState(['/home', '/test']); // List of all routes

    return (
        <RoutesContext.Provider value={routes}>
            {children}
        </RoutesContext.Provider>
    )
}

export const useRoutes = () => useContext(RoutesContext);