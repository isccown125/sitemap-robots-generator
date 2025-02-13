import { z } from "zod";
import { RULE_TYPES } from "../types";

export const robotsSchema = z.object({
  type: z.enum(RULE_TYPES),
  value: z.string().min(1, "Wartość jest wymagana"),
  userAgent: z.string(),
});

export type RobotsRuleFormData = z.infer<typeof robotsSchema>;
