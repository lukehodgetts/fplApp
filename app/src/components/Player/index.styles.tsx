import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 98%;
  border-radius: 5px;
  padding: 3px 0px;
`;

interface Props {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around";
}

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export const PlayerImage = styled.img`
  border-radius: 5px;
`;
