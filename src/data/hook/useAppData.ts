import { useContext } from "react";
import { AppContext } from "../contex/AppContext";

export const useAppData = () =>  useContext(AppContext)

