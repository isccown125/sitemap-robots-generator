export interface SharedUrlData {
  url: string;
  lastModified: string;
  priority?: number;
  changeFreq?: string;
  isInSitemap: boolean;
  isInRobots: boolean;
}

export interface UrlContextType {
  urls: SharedUrlData[];
  addUrl: (url: SharedUrlData) => void;
  removeUrl: (url: string) => void;
  updateUrl: (url: string, data: Partial<SharedUrlData>) => void;
}
