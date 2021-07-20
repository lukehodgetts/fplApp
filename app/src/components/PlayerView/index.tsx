import React from "react";

import Stat from "../Stat";

import { StatHeader, SectionHeader, StatBody } from "./index.styles";

import Statistic from "../../types/Statistics"
import PlayerTypes from "../../types/PlayerTypes"

interface Props {
  player: PlayerTypes
  statistic: Statistic;
}

const PlayerView: React.FC<Props> = ({ player, statistic }) => {
  return (
    <>
      <SectionHeader>Personal Stats</SectionHeader>
      <StatBody>
        <Stat content={`Date of Birth: ${player.birth.date}`} />
        <Stat
          content={`Place of Birth: ${player.birth.place} - ${player.birth.country}`}
        />
        <Stat content={`Height: ${player.height}`} />
        <Stat content={`Weight: ${player.weight}`} />
      </StatBody>
      <SectionHeader>Season Stats</SectionHeader>
      <StatHeader>Games</StatHeader>
      <StatBody>
        <Stat content={`Appearences: ${statistic.games.appearences}`} />
        <Stat content={`Starts: ${statistic.games.lineups}`} />
        <Stat content={`Minutes: ${statistic.games.minutes}`} />
        <Stat content={`Subs in: ${statistic.substitutes.in}`} />
        <Stat content={`Subs out: ${statistic.substitutes.out}`} />
        <Stat content={`Unused: ${statistic.substitutes.bench}`} />
      </StatBody>
      <StatHeader>Attacking</StatHeader>
      <StatBody>
        <Stat content={`Goals: ${statistic.goals.total}`} />
        <Stat content={`Shots: ${statistic.shots.total}`} />
        <Stat content={`Shots on target: ${statistic.shots.on}`} />
        <Stat content={`Passes: ${statistic.passes.total}`} />
        <Stat content={`Key Passes: ${statistic.passes.key}`} />
        <Stat content={`Pass Accuracy: ${statistic.passes.accuracy}%`} />
        <Stat content={`Penalties Scored: ${statistic.penalty.scored}`} />
        <Stat content={`Penalties Missed: ${statistic.penalty.missed}`} />
      </StatBody>
      <StatHeader>Defending</StatHeader>
      <StatBody>
        <Stat content={`Tackles: ${statistic.tackles.total}`} />
        <Stat content={`Blocks: ${statistic.tackles.blocks}`} />
        <Stat content={`Interceptions: ${statistic.tackles.interceptions}`} />
        <Stat content={`Duels won: ${statistic.duels.won}`} />
        <Stat content={`Fouls: ${statistic.fouls.committed}`} />
        <Stat content={`Yellows: ${statistic.cards.yellow}`} />
        <Stat content={`Reds: ${statistic.cards.red}`} />
      </StatBody>
    </>
  );
};

export default PlayerView;
