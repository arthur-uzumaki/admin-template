import { useContext } from "react";
import { AuthContext } from "../contex/AuthContex";


export const useAuth = () => useContext(AuthContext)