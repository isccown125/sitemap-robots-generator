import React, { useState } from "react";
import { Container } from "../../../styles/common.styles";
import { SitemapForm, SitemapList } from "../components";
import { SitemapUrl } from "../types";

export const SitemapGenerator: React.FC = () => {
  const [editedUrl, setEditedUrl] = useState<SitemapUrl | undefined>();

  const handleEditStart = (url: SitemapUrl) => {
    setEditedUrl(url);
    // Przewiń do formularza
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEditComplete = () => {
    setEditedUrl(undefined);
  };

  return (
    <Container>
      <SitemapForm editedUrl={editedUrl} onSubmitSuccess={handleEditComplete} />
      <SitemapList onEdit={handleEditStart} />
    </Container>
  );
};
