import React, { useState } from "react";

import {
  Main,
  Header,
  StatBody,
  PlayerImage,
  Flex,
  SectionHeader,
  StatHeader,
} from "./App.styles";

import Search from "./components/Search";
import Stat from "./components/Stat";

function App() {
  const [result, setResult] = useState<any | undefined>();

  const selectPlayer = (value?: any) => {
    setResult(value);
  };

  console.log(result);

  const player = result?.player;
  const statistic = result?.statistics[0];

  return (
    <Main>
      <Search onSelect={selectPlayer} />
      {result && (
        <>
          <Header>
            <Flex>
              <PlayerImage src={player.photo} alt="player photo" />
              <h1>
                {player.firstname} {player.lastname} -{" "}
                {statistic.games.position} - {player.age} years old <br />{" "}
                {statistic.team.name}
              </h1>
            </Flex>
            <Flex>
              <h1>
                average rating: {Number(statistic.games.rating).toFixed(2)}
              </h1>
              <img src={statistic.team.logo} alt="club badge" />
            </Flex>
          </Header>
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
            <Stat content={`Goals: ${statistic.tackles.total}`} />
            <Stat content={`Goals: ${statistic.tackles.blocks}`} />
            <Stat content={`Goals: ${statistic.tackles.interceptions}`} />
            <Stat content={`Goals: ${statistic.duels.won}`} />
            <Stat content={`Goals: ${statistic.fouls.committed}`} />
            <Stat content={`Goals: ${statistic.cards.yellow}`} />
            <Stat content={`Goals: ${statistic.cards.red}`} />
          </StatBody>
        </>
      )}
    </Main>
  );
}

export default App;
