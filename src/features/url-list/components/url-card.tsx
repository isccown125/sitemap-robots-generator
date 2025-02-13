import React from "react";
import { SharedUrlData } from "../types";
import {
  UrlCard,
  UrlCardHeader,
  UrlContent,
  UrlTitle,
  UrlDetails,
  TagsContainer,
  StatusTag,
} from "../styles";
import { DeleteButton } from "../../../styles/common.styles";

interface UrlCardProps {
  data: SharedUrlData;
  onDelete: (url: string) => void;
}

export const UrlCardComponent: React.FC<UrlCardProps> = ({
  data,
  onDelete,
}) => {
  return (
    <UrlCard>
      <UrlCardHeader>
        <UrlContent>
          <UrlTitle>{data.url}</UrlTitle>
          <UrlDetails>
            <p>Ostatnia modyfikacja: {data.lastModified}</p>
            {data.priority && <p>Priorytet: {data.priority}</p>}
            {data.changeFreq && <p>Częstotliwość zmian: {data.changeFreq}</p>}
          </UrlDetails>
          <TagsContainer>
            <StatusTag $active={data.isInSitemap}>Sitemap</StatusTag>
            <StatusTag $active={data.isInRobots}>Robots.txt</StatusTag>
          </TagsContainer>
        </UrlContent>

        <DeleteButton onClick={() => onDelete(data.url)} aria-label="Usuń URL">
          Usuń
        </DeleteButton>
      </UrlCardHeader>
    </UrlCard>
  );
};
