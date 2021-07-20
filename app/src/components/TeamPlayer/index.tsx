import React from "react";

import { PlayerCard, Tile, Info, RatingTile, Rating } from "./index.styles";
import { Flex } from "../Player/index.styles";

interface Props {
  player: {
    firstname: string;
    lastname: string;
    photo: string;
    logo: string;
    position: string;
    teamlogo: string;
    rating: string;
  };
}

const TeamPlayer: React.FC<Props> = ({ player }) => {
  const shortenPosition = (position: String) => {
    let shortPosition = "";
    if (position === "Attacker") {
      shortPosition = "FW";
    } else if (position === "Midfielder") {
      shortPosition = "MF";
    } else if (position === "Defender") {
      shortPosition = "DF";
    } else if (position === "Goalkeeper") {
      shortPosition = "GK";
    }
    return shortPosition;
  };

  return (
    <PlayerCard>
      <Flex justifyContent={"flex-end"}>
        <Flex justifyContent={"center"}>
          <Tile src={player.photo} alt="player portrait" />
          <Info>
            {player.firstname} {player.lastname} <br />
            {shortenPosition(player.position)}
          </Info>
          <Tile src={player.teamlogo} alt="club logo" />
          <RatingTile rating={player.rating}>
            <Rating>{Number(player.rating).toFixed(2)}</Rating>
          </RatingTile>
        </Flex>
      </Flex>
    </PlayerCard>
  );
};

export default TeamPlayer;
