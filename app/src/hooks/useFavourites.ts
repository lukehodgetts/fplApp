import react, { useState } from "react";
import useAxios from "axios-hooks";

function useFavourite(type: string, idRef: number) {
  const [{ data: favourites, loading, error }, refetch] = useAxios({
    url: `http://localhost:3001/favourites/players`,
  });

  const [, deleteFavourite] = useAxios(
    {
      url: `http://localhost:3001/favourites/player/${idRef}`,
      method: "DELETE",
    },
    {
      manual: true,
    }
  );

  const [, addFavourite] = useAxios(
    {
      url: `http://localhost:3001/favourites`,
      method: "POST",
      data: {
        type,
        idRef,
      },
    },
    {
      manual: true,
    }
  );

  return { deleteFavourite, addFavourite, favourites, refetch };
}

export default useFavourite;
