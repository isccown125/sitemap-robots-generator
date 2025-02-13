import React from "react";
import { useRobotsForm } from "../hooks/use-robots-form";
import { RULE_TYPES, COMMON_USER_AGENTS } from "../types";
import { FormHeader, RobotsFormContainer } from "../styles";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Select,
} from "../../../styles/common.styles";

export const RobotsForm: React.FC = () => {
  const { form, onSubmit } = useRobotsForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <RobotsFormContainer onSubmit={form.handleSubmit(onSubmit)}>
      <FormHeader>
        <h2>Generator Robots.txt</h2>
        <p>Dodaj nową regułę do pliku robots.txt</p>
      </FormHeader>

      <FormGroup>
        <Label htmlFor="userAgent">User-agent</Label>
        <Select
          id="userAgent"
          {...register("userAgent")}
          $error={!!errors.userAgent}
        >
          {COMMON_USER_AGENTS.map((agent) => (
            <option key={agent} value={agent}>
              {agent}
            </option>
          ))}
        </Select>
        {errors.userAgent && <span>{errors.userAgent.message}</span>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="type">Typ reguły</Label>
        <Select id="type" {...register("type")} $error={!!errors.type}>
          {RULE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        {errors.type && <span>{errors.type.message}</span>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="value">Wartość</Label>
        <Input
          id="value"
          {...register("value")}
          $error={!!errors.value}
          placeholder="Wprowadź wartość reguły"
        />
        {errors.value && <span>{errors.value.message}</span>}
      </FormGroup>

      <Button type="submit">Dodaj regułę</Button>
    </RobotsFormContainer>
  );
};
