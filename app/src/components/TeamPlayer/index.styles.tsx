import styled from "styled-components";

interface Props {
  rating: string;
}

export const PlayerCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  /* width: 20%; */
`;

export const Tile = styled.img`
  object-fit: contain;
  height: 90px;
  border-radius: 5px;
`;

export const Info = styled.h3`
  text-align: center;
`;

export const RatingTile = styled.div<Props>`
  background-color: ${(props) => (Number(props.rating) >= 7 ? "green" : "red")};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 80px;
  display: flex;
  justify-content: center;
`;

export const Rating = styled.h3`
  color: #ffffff;
`;
