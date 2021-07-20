import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import PlayerView from "../PlayerView";

import Statistic from "../../types/Statistics";
import PlayerTypes from "../../types/PlayerTypes";

import { Header, Flex, PlayerImage } from "./index.styles";

interface Props {
  player: PlayerTypes;
  statistic: Statistic;

  onFavouriteClick: () => void;
  onAddToTeam: () => void;
  isFavourite: boolean;
  isInTeam: boolean;
  inTeamView: boolean;
}

const Player: React.FC<Props> = ({
  player,
  statistic,
  onFavouriteClick,
  onAddToTeam,
  isFavourite,
  isInTeam,
  inTeamView,
}) => {
  return (
    <>
      <Header>
        <Flex>
          <PlayerImage src={player.photo} alt="player photo" />
          <h1>
            {player.firstname} {player.lastname} - {statistic.games.position} -{" "}
            {player.age} years old <br /> {statistic.team.name}
          </h1>
          <FontAwesomeIcon
            icon={isFavourite ? solidStar : regStar}
            color={"gold"}
            size={"4x"}
            onClick={onFavouriteClick}
          />
        </Flex>
        <Flex>
          <h1>
            average rating: {Number(statistic.games.rating).toFixed(2)} <br />{" "}
            Added to team <FontAwesomeIcon icon={isInTeam ? faCheckCircle : faTimesCircle} color={isInTeam ? "#3aa52f" : "red"} onClick={onAddToTeam}/>
          </h1>
          <img src={statistic.team.logo} alt="club badge" />
        </Flex>
      </Header>
      {!inTeamView && <PlayerView player={player} statistic={statistic} />}
    </>
  );
};

export default Player;
