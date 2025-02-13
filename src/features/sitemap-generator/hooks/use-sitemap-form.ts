import { useForm } from "react-hook-form";
import { SitemapFormData, SitemapUrl } from "../types";
import { useSitemap } from "../hooks";
import { createZodResolver } from "../../../utils";
import { sitemapSchema } from "../utils";
import { useEffect } from "react";

interface UseSitemapFormProps {
  editedUrl?: SitemapUrl;
  onSubmitSuccess?: () => void;
}

export const useSitemapForm = ({
  editedUrl,
  onSubmitSuccess,
}: UseSitemapFormProps = {}) => {
  const { addUrl, updateUrl } = useSitemap();

  const form = useForm<SitemapFormData>({
    resolver: createZodResolver(sitemapSchema),
    defaultValues: {
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    if (editedUrl) {
      form.reset(editedUrl);
    }
  }, [editedUrl, form]);

  const onSubmit = (data: SitemapFormData) => {
    if (editedUrl) {
      // W trybie edycji, używamy starego URL do identyfikacji
      updateUrl(editedUrl.loc, {
        ...data,
        // Jeśli URL się zmienił, usuwamy stary i dodajemy nowy
        ...(data.loc !== editedUrl.loc && { loc: data.loc }),
      });
    } else {
      addUrl(data);
    }
    form.reset();
    onSubmitSuccess?.();
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isEditMode: !!editedUrl,
  };
};
