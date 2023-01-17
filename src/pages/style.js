import styled from "styled-components";

export const ContainerStComp = styled.div`
  display: grid;
  grid-template-columns: 280px 3fr;
  column-gap: 4vh;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
  };
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 320px;
  column-gap: 4vh;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
  };
`;