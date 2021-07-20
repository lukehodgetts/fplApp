import react, { useState } from "React";
import useAxios from "axios-hooks";

function useTeams(
  idRef: number,
  firstname: string,
  lastname: string,
  photo: string,
  position: string,
  teamlogo: string,
  rating: string
) {
  const [{ data: createdTeams, loading, error }, refetch] = useAxios({
    url: `http://localhost:3001/createdteams`,
  });

  const [, deleteCreatedTeamPlayer] = useAxios(
    {
      url: `http://localhost:3001/createdteams/${idRef}`,
      method: "DELETE",
    },
    {
      manual: true,
    }
  );

  const [, addCreatedTeamPlayer] = useAxios(
    {
      url: `http://localhost:3001/createdteams`,
      method: "POST",
      data: {
        idRef,
        firstname,
        lastname,
        photo,
        position,
        teamlogo,
        rating
      },
    },
    {
      manual: true,
    }
  );

  return {
    deleteCreatedTeamPlayer,
    addCreatedTeamPlayer,
    createdTeams,
    refetch,
  };
}

export default useTeams;
