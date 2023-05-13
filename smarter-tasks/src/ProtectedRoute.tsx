import { Navigate } from "react-router-dom";
type ProtectedRouteProps = {
    element: JSX.Element;
}
  
export const ProtectedRoute : React.FC<ProtectedRouteProps> = ({element}) =>{
 const authenticated = localStorage.getItem("authenticated");
 if (authenticated === "true") {
   return element;
 } else {
   return <Navigate to="/signin" />;
 }
}