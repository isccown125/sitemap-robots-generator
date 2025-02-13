import { z } from "zod";

export const sitemapSchema = z.object({
  loc: z
    .string()
    .url("URL musi być poprawnym adresem")
    .startsWith("http", "URL musi zaczynać się od http lub https"),
  lastmod: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data musi być w formacie YYYY-MM-DD"),
  changefreq: z.enum([
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
  ]),
  priority: z
    .number()
    .min(0, "Priorytet musi być większy lub równy 0")
    .max(1, "Priorytet musi być mniejszy lub równy 1"),
});
