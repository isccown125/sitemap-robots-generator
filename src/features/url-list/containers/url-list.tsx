import { useUrls } from "../hooks";
import {
  EmptyState,
  StatusTag,
  TagsContainer,
  UrlCard,
  UrlCardHeader,
  UrlContent,
  UrlDetails,
  UrlGrid,
  UrlListContainer,
  UrlListTitle,
  UrlTitle,
} from "../styles";
import { DeleteButton } from "../../../styles/common.styles";

export const UrlList: React.FC = () => {
  const { urls, removeUrl } = useUrls();

  if (urls.length === 0) {
    return (
      <UrlListContainer>
        <UrlListTitle>Lista wszystkich URL-i</UrlListTitle>
        <EmptyState>
          Brak dodanych URL-i. Dodaj URL-e w generatorze sitemapy lub
          robots.txt.
        </EmptyState>
      </UrlListContainer>
    );
  }

  return (
    <UrlListContainer>
      <UrlListTitle>Lista wszystkich URL-i</UrlListTitle>

      <UrlGrid>
        {urls.map((urlData) => (
          <UrlCard key={urlData.url}>
            <UrlCardHeader>
              <UrlContent>
                <UrlTitle>{urlData.url}</UrlTitle>
                <UrlDetails>
                  <p>Ostatnia modyfikacja: {urlData.lastModified}</p>
                  {urlData.priority && <p>Priorytet: {urlData.priority}</p>}
                  {urlData.changeFreq && (
                    <p>Częstotliwość zmian: {urlData.changeFreq}</p>
                  )}
                </UrlDetails>
                <TagsContainer>
                  <StatusTag $active={urlData.isInSitemap}>Sitemap</StatusTag>
                  <StatusTag $active={urlData.isInRobots}>Robots.txt</StatusTag>
                </TagsContainer>
              </UrlContent>

              <DeleteButton
                onClick={() => removeUrl(urlData.url)}
                aria-label="Usuń URL"
              >
                Usuń
              </DeleteButton>
            </UrlCardHeader>
          </UrlCard>
        ))}
      </UrlGrid>
    </UrlListContainer>
  );
};
