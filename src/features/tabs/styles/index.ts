import styled from "styled-components";
import { animations } from "../../../styles/common.styles";

export const TabsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const TabList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TabButtonProps {
  $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border: none;
  border-bottom: 2px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary.main : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary.main : theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  white-space: nowrap;

  &:hover {
    color: ${({ theme, $active }) =>
      $active ? theme.colors.primary.main : theme.colors.text.primary};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TabContent = styled.div`
  animation: ${animations.fadeIn} ${({ theme }) => theme.transitions.default};
`;
