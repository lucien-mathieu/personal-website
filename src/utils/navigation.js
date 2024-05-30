import { useNavigate } from "react-router-dom";
import { useRoutes } from '../RoutesContext';

// For navigation with input text
export const useExploreApp = () => {
    const navigate = useNavigate();
    const routes = useRoutes();

    return () => {
        const page = document.getElementById("input_explorer").value;
        const path = `/${page}`;

        // Check if path is include in existing routes
        if(routes.includes(path)) {
            navigate(path)
        } else {
            alert("Cette page n'existe pas");
        }
    }
}