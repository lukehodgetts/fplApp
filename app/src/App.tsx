import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import useFavourites from "./hooks/useFavourites";
import useTeams from "./hooks/useTeams";

import { Main, Label } from "./App.styles";
import { Flex } from "./components/Player/index.styles";

import Player from "./components/Player";
import Search from "./components/Search";
import TeamView from "./components/TeamView";

function App() {
  const [result, setResult] = useState<any | undefined>();

  const [isToggled, setIsToggled] = useState(false);

  const player = result?.player;
  const statistic = result?.statistics[0];

  const {
    favourites,
    deleteFavourite,
    addFavourite,
    refetch: refetchFavourites,
  } = useFavourites("player", player?.id);

  const {
    createdTeams,
    deleteCreatedTeamPlayer,
    addCreatedTeamPlayer,
    refetch: refetchCreatedTeam,
  } = useTeams(
    player?.id,
    player?.firstname,
    player?.lastname,
    player?.photo,
    statistic?.games.position,
    statistic?.team.logo,
    statistic?.games.rating
  );

  const selectPlayer = (value?: any) => {
    setResult(value);
  };

  let isFavourite = false;
  if (
    favourites &&
    player &&
    favourites.find((favourite: any) => favourite.idRef === player.id)
  ) {
    isFavourite = true;
  }

  const toggleFavourite = async () => {
    if (isFavourite) {
      await deleteFavourite();
    } else {
      await addFavourite();
    }
    await refetchFavourites();
  };
  console.log(result);

  let isInCreatedTeam = false;
  if (
    createdTeams &&
    player &&
    createdTeams.find(
      (createdTeamPlayer: any) => createdTeamPlayer.idRef === player.id
    )
  ) {
    isInCreatedTeam = true;
  }

  const toggleTeamStatus = async () => {
    if (isInCreatedTeam) {
      await deleteCreatedTeamPlayer();
    } else {
      await addCreatedTeamPlayer();
    }
    await refetchCreatedTeam();
  };
  console.log(result);

  const toggleChecked = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  console.log(createdTeams);

  return (
    <Main>
      <Search onSelect={selectPlayer} />
      <Flex justifyContent={"center"}>
        <Label selected={!isToggled}>Player View</Label>
        <Switch onChange={toggleChecked} value={isToggled} />
        <Label selected={isToggled}>Team View</Label>
      </Flex>
      {result && !isToggled && (
        <Player
          player={player}
          statistic={statistic}
          onFavouriteClick={toggleFavourite}
          onAddToTeam={toggleTeamStatus}
          isFavourite={isFavourite}
          isInTeam={isInCreatedTeam}
          inTeamView={false}
        />
      )}
      {result && isToggled && (
        <>
          <Player
            player={player}
            statistic={statistic}
            onFavouriteClick={toggleFavourite}
            onAddToTeam={toggleTeamStatus}
            isFavourite={isFavourite}
            isInTeam={isInCreatedTeam}
            inTeamView={true}
          />
          <TeamView teamData={createdTeams}/>
        </>
      )}
    </Main>
  );
}

export default App;
