import { createContext } from "react";
import { RobotsContextType } from "../types";

export const RobotsContext = createContext<RobotsContextType | null>(null);
