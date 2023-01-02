import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.firstColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.bodyColor};
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 2rem;
`;

export const GameMenu = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  button {
    margin-top: 0.5rem;
    background-color: ${(props) => props.theme.colors.firstColor};
    border-radius: 0.25rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.15);
    font-size: var(--normal-font-size);
    font-weight: var(--font-regular);
    color: ${(props) => props.theme.colors.bodyColor};
    border: 0;
    padding: 0.5rem;

    &:hover {
      box-shadow: 0 4px 8px rgb(0, 0, 0, 0.15);
    }
  }
`;

export const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const GameButton = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => props.theme.colors.firstColor};
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.15);
  font-size: var(--h1-font-size);
  font-weight: var(--font-bold);
  color: ${(props) => props.theme.colors.bodyColor};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.15);
  }
`;
