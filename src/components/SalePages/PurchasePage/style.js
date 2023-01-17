import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 4vh;
  row-gap: 4vh;
  margin-top: 3%;
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: 100%;
  };
`;