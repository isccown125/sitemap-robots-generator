export type TabId = "sitemap" | "robots" | "urls";

export interface Tab {
  id: TabId;
  label: string;
  icon?: React.ReactNode;
}
