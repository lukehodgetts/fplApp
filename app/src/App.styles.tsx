import styled from "styled-components";

interface Props {
  selected: boolean
}

export const Main = styled.div`
  background-color: #374762;
  height: 100%;
  padding: 16px;
`;

export const Label = styled.label<Props>`
  color: ${(props) => props.selected ? "#3beb28" : "#a3a3a3"};
`;