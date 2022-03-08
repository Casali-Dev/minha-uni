import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  main {
    height: max-content;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  h3 {
    font-weight: 400;
  }
`;
