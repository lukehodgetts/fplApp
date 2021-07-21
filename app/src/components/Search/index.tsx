import React, { useState } from "react";

import { InputBox } from "./index.styles";
import { TextField } from "@material-ui/core";
import useAxios from "axios-hooks";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  onSelect: (value?: any) => void;
}

const Search: React.FC<Props> = ({ onSelect }) => {
  const [search, setSearch] = useState("kane");

  const [{ data, loading, error }, execute] = useAxios(
    {
      url: `https://api-football-v1.p.rapidapi.com/v3/players`,
      params: {
        league: 39,
        season: 2020,
        search: search,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    },
    {
      manual: true,
    }
  );

  const debouncedExecute = useDebouncedCallback(() => {
    execute();
  }, 1000);

  const onInputChange = (value: string) => {
    setSearch(value);
    if (value.length >= 4) {
      debouncedExecute.callback();
    }
  };

  const players = data?.response || [];

  return (
    <InputBox
      id="SearchBar"
      loading={loading}
      options={players}
      getOptionLabel={({ player, statistics }: any) =>
        `${player.firstname} ${player.lastname} - ${statistics[0].team.name}`
      }
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
      onInputChange={(e, newInputValue) => onInputChange(newInputValue)}
      inputValue={search}
      onChange={(event, value) => onSelect(value)}
    />
  );
};

export default Search;
