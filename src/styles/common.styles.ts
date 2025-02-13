import styled, { keyframes } from "styled-components";

// Wspólne animacje
export const animations = {
  slideDown: keyframes`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  shake: keyframes`
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    75% {
      transform: translateX(10px);
    }
  `,
};

// Wspólne komponenty
export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border.primary};
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.sm};
  max-width: 800px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm};
`;

interface InputProps {
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme, $error }) =>
    $error ? theme.colors.error.dark : theme.colors.background.tertiary};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.primary.light};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.primary.light};
    box-shadow: 0 0 0 3px
      ${({ theme, $error }) =>
        $error ? theme.colors.error.light : theme.colors.primary.light + "33"};
  }
`;

export const Select = styled.select<InputProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 2px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e0e0e0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.md} center;
  background-size: 16px;
  padding-right: ${({ theme }) => theme.spacing.xl};

  &:hover {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.primary.main};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.error.main : theme.colors.primary.main};
    box-shadow: 0 0 0 3px
      ${({ theme, $error }) =>
        $error ? theme.colors.error.light : theme.colors.primary.light + "33"};
  }

  option {
    background: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error.main};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  animation: ${animations.slideDown} ${({ theme }) => theme.transitions.slow};
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  margin: ${({ theme }) => `${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border.primary};
    cursor: not-allowed;
    transform: none;
  }
`;

export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin: ${({ theme }) => `${theme.spacing.sm}`};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }
`;

export const DownloadButton = styled(ActionButton)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;
export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h2 {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.text.disabled};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${animations.slideDown} ${({ theme }) => theme.transitions.slow};
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.error.light};
    color: ${({ theme }) => theme.colors.error.main};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.error.light};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
