import { useContext } from "react";
import { RobotsContext } from "../context/robots.context";

export const useRobots = () => {
  const context = useContext(RobotsContext);
  if (!context) {
    throw new Error("useRobots must be used within a RobotsProvider");
  }
  return context;
};
