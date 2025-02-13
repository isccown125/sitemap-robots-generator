import styled from "styled-components";

export const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px dashed #4a9eff;
  color: inherit;
  font: inherit;
  padding: 2px 4px;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid #4a9eff;
    background-color: rgba(74, 158, 255, 0.1);
  }
`;

export const Text = styled.span`
  &:hover {
    cursor: pointer;
    background-color: rgba(74, 158, 255, 0.1);
  }
`;
