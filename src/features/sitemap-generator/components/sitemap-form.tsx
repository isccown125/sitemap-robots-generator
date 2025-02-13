import React from "react";
import { useSitemapForm } from "../hooks";
import {
  ErrorMessage,
  FormContainer,
  FormGroup,
  FormHeader,
  Input,
  Select,
  SubmitButton,
} from "../../../styles/common.styles";
import { SitemapUrl } from "../types";

interface SitemapFormProps {
  editedUrl?: SitemapUrl;
  onSubmitSuccess?: () => void;
}

export const SitemapForm: React.FC<SitemapFormProps> = ({
  editedUrl,
  onSubmitSuccess,
}) => {
  const { form, onSubmit, isEditMode } = useSitemapForm({
    editedUrl,
    onSubmitSuccess,
  });

  const {
    register,
    formState: { errors },
  } = form;

  const changefreqOptions = [
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
  ];

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormHeader>
        <h2>{isEditMode ? "Edytuj URL" : "Dodaj nowy URL"}</h2>
        <p>
          {isEditMode
            ? "Zaktualizuj parametry URL-a w mapie strony"
            : "Dodaj nowy URL do mapy strony"}
        </p>
      </FormHeader>

      <FormGroup>
        <label htmlFor="loc">URL strony</label>
        <Input id="loc" type="url" {...register("loc")} $error={!!errors.loc} />
        {errors.loc && <ErrorMessage>{errors.loc.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="lastmod">Data ostatniej modyfikacji</label>
        <Input
          id="lastmod"
          type="date"
          {...register("lastmod")}
          $error={!!errors.lastmod}
        />
        {errors.lastmod && (
          <ErrorMessage>{errors.lastmod.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label htmlFor="changefreq">Częstotliwość zmian</label>
        <Select
          id="changefreq"
          {...register("changefreq")}
          $error={!!errors.changefreq}
        >
          {changefreqOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        {errors.changefreq && (
          <ErrorMessage>{errors.changefreq.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label htmlFor="priority">Priorytet</label>
        <Input
          id="priority"
          type="number"
          step="0.1"
          min="0"
          max="1"
          {...register("priority", { valueAsNumber: true })}
          $error={!!errors.priority}
        />
        {errors.priority && (
          <ErrorMessage>{errors.priority.message}</ErrorMessage>
        )}
      </FormGroup>

      <SubmitButton type="submit">
        {isEditMode ? "Zapisz zmiany" : "Dodaj URL do sitemapy"}
      </SubmitButton>
    </FormContainer>
  );
};
