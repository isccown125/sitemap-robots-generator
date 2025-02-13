import { createContext } from "react";
import { UrlContextType } from "../types";

export const UrlContext = createContext<UrlContextType | null>(null);
