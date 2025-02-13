import { InlineEdit } from "../../../common/inline-edit";
import { ActionButton } from "../../../styles/common.styles";
import { UrlItem } from "../styles";
import { SitemapUrl } from "../types";

interface SitemapListItemProps {
  url: SitemapUrl;
  onEdit: (url: SitemapUrl) => void;
  onRemove: (url: string) => void;
  onUpdateUrl: (oldUrl: string, newValue: string) => void;
}

export const SitemapListItem: React.FC<SitemapListItemProps> = ({
  url,
  onEdit,
  onRemove,
  onUpdateUrl,
}) => {
  return (
    <UrlItem>
      <div>
        <p>
          <InlineEdit
            value={url.loc}
            onSave={(newValue) => onUpdateUrl(url.loc, newValue)}
          />
        </p>
        <small>
          {url.lastmod && `Ostatnia modyfikacja: ${url.lastmod}`}
          {url.changefreq && ` | Częstotliwość: ${url.changefreq}`}
          {url.priority && ` | Priorytet: ${url.priority}`}
        </small>
      </div>
      <div>
        <ActionButton onClick={() => onEdit(url)}>Edytuj</ActionButton>
        <ActionButton onClick={() => onRemove(url.loc)}>Usuń</ActionButton>
      </div>
    </UrlItem>
  );
};
