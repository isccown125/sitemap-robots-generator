import { createContext } from "react";
import { SitemapContextType } from "../types";

export const SitemapContext = createContext<SitemapContextType | null>(null);
