import styled from "styled-components";

export const ButtonStyling = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  border: ${({ theme }) => theme.border};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
  }
`;
