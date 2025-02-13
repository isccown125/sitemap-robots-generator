import React from "react";
import { RobotsContext } from "./robots.context";
import { RobotsRule } from "../types";
import { useLocalStorage } from "../../../common/use-local-storage";

const STORAGE_KEY = "robots_rules";

export const RobotsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: rules, setValue: setRules } = useLocalStorage<RobotsRule[]>(
    STORAGE_KEY,
    []
  );

  const addRule = (rule: Omit<RobotsRule, "id">) => {
    const newRule: RobotsRule = {
      ...rule,
      id: Date.now().toString(),
    };
    setRules((prev) => [...prev, newRule]);
  };

  const updateRule = (id: string, updatedFields: Partial<RobotsRule>) => {
    setRules((prev) =>
      prev.map((rule) =>
        rule.id === id ? { ...rule, ...updatedFields } : rule
      )
    );
  };

  const deleteRule = (id: string) => {
    setRules((prev) => prev.filter((rule) => rule.id !== id));
  };

  const generateRobotsText = (): string => {
    const grouped = rules.reduce((acc, rule) => {
      const userAgent = rule.userAgent || "*";
      if (!acc[userAgent]) {
        acc[userAgent] = [];
      }
      acc[userAgent].push(rule);
      return acc;
    }, {} as Record<string, RobotsRule[]>);

    let output = "";
    Object.entries(grouped).forEach(([userAgent, userRules]) => {
      output += `User-agent: ${userAgent}\n`;
      userRules.forEach((rule) => {
        if (rule.type !== "user-agent") {
          const ruleType =
            rule.type.charAt(0).toUpperCase() + rule.type.slice(1);
          output += `${ruleType}: ${rule.value}\n`;
        }
      });
      output += "\n";
    });

    const sitemapRule = rules.find((r) => r.type === "sitemap");
    const hostRule = rules.find((r) => r.type === "host");

    if (sitemapRule) {
      output += `Sitemap: ${sitemapRule.value}\n`;
    }
    if (hostRule) {
      output += `Host: ${hostRule.value}\n`;
    }

    return output;
  };

  const clearAllRules = () => {
    setRules([]);
  };

  return (
    <RobotsContext.Provider
      value={{
        rules,
        addRule,
        updateRule,
        deleteRule,
        generateRobotsText,
        clearAllRules,
      }}
    >
      {children}
    </RobotsContext.Provider>
  );
};
