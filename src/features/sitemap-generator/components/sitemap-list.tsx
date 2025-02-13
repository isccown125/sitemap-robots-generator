import React from "react";
import { useSitemap } from "../hooks";
import { UrlListContainer, UrlList } from "../styles";
import { Container, DownloadButton } from "../../../styles/common.styles";
import { SitemapUrl } from "../types";
import { SitemapListItem } from "./sitemap-list-item";

type SitemapListProps = {
  onEdit: (url: SitemapUrl) => void;
};

export const SitemapList: React.FC<SitemapListProps> = ({ onEdit }) => {
  const { urls, removeUrl, updateUrl, generateXml } = useSitemap();

  const handleDownload = () => {
    const xml = generateXml();
    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleUpdateUrl = (oldUrl: string, newValue: string) => {
    updateUrl(oldUrl, { loc: newValue });
  };

  if (urls.length === 0) {
    return (
      <UrlListContainer>
        <h2>Lista URL-i</h2>
        <p>Brak dodanych URL-i w mapie strony</p>
      </UrlListContainer>
    );
  }

  return (
    <UrlListContainer>
      <h2>Lista URL-i w mapie strony</h2>
      <UrlList>
        {urls.map((url) => (
          <SitemapListItem
            key={url.loc}
            url={url}
            onEdit={onEdit}
            onRemove={removeUrl}
            onUpdateUrl={handleUpdateUrl}
          />
        ))}
      </UrlList>
      <DownloadButton onClick={handleDownload}>
        Pobierz sitemap.xml
      </DownloadButton>
    </UrlListContainer>
  );
};
