import React, { useState } from "react";

import { Autocomplete } from "@material-ui/lab";
import { InputBox } from "./index.styles";
import { TextField } from "@material-ui/core";
import useAxios from "axios-hooks";
import { useDebouncedCallback } from "use-debounce";

interface Props {}

const Search: React.FC<Props> = () => {
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
        "x-rapidapi-key": "6a638ee1bamsh0bb1e79c3766e41p14b198jsn21102f3dc357",
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

  const names =
    data?.response.map(
      ({ player }: any) => `${player.firstname} ${player.lastname}`
    ) || [];

  return (
    <Autocomplete
      id="SearchBar"
      options={names}
      getOptionLabel={(option: string) => option}
      style={{ width: 300, backgroundColor: "#ffffff" }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
      onInputChange={(e, newInputValue) => onInputChange(newInputValue)}
      inputValue={search}
    />
  );
};

export default Search;
