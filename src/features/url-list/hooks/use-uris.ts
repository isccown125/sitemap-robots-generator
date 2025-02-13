import { useContext } from "react";
import { UrlContext } from "../context";

export const useUrls = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrls must be used within a UrlProvider");
  }
  return context;
};
