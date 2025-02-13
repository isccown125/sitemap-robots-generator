export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapContextType {
  urls: SitemapUrl[];
  addUrl: (url: SitemapUrl) => void;
  removeUrl: (url: string) => void;
  generateXml: () => string;
  updateUrl: (urlLoc: string, updatedUrl: Partial<SitemapUrl>) => void;
}

export interface SitemapFormData {
  loc: string;
  lastmod: string;
  changefreq: SitemapUrl["changefreq"];
  priority: number;
}
