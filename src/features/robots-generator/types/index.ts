export type RuleType =
  | "allow"
  | "disallow"
  | "crawl-delay"
  | "host"
  | "sitemap"
  | "user-agent";

export interface RobotsRule {
  id: string;
  type: RuleType;
  value: string;
  userAgent?: string;
}

export interface RobotsContextType {
  rules: RobotsRule[];
  addRule: (rule: Omit<RobotsRule, "id">) => void;
  updateRule: (id: string, rule: Partial<RobotsRule>) => void;
  deleteRule: (id: string) => void;
  generateRobotsText: () => string;
  clearAllRules: () => void;
}

export interface RobotsFormData {
  type: RuleType;
  value: string;
  userAgent: string;
}

export const RULE_TYPES: RuleType[] = [
  "user-agent",
  "allow",
  "disallow",
  "crawl-delay",
  "host",
  "sitemap",
];

export const COMMON_USER_AGENTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "Twitterbot",
  "facebookexternalhit",
];
