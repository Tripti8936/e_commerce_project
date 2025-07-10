import { useRoutes } from "react-router-dom";
import ProtectedRouter from "./Protected";
import PublicRouter from "./Public";

export default function Routers() {
    const publicRoutes = PublicRouter();
    // const protectedRoutes = ProtectedRouter();
    const routes = useRoutes([...publicRoutes]);
    return routes;

}