import React from "react";
import { useRobots } from "../hooks/use-robots";
import { PreviewContainer, PreviewContent } from "../styles";
import { DownloadButton } from "../../../styles/common.styles";

export const RobotsPreview: React.FC = () => {
  const { rules, generateRobotsText } = useRobots();

  const handleDownload = () => {
    const content = generateRobotsText();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "robots.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (rules.length === 0) {
    return null;
  }

  return (
    <PreviewContainer>
      <h3>Podgląd robots.txt</h3>
      <PreviewContent>{generateRobotsText()}</PreviewContent>
      <DownloadButton onClick={handleDownload}>
        Pobierz robots.txt
      </DownloadButton>
    </PreviewContainer>
  );
};
