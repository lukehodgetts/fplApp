import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

export const InputBox = styled(Autocomplete)`
  background-color: #ffffff;
  width: 98%;
  border-radius: 5px;
  margin: 0px 0px 60px 0px;
  
  label {
    color: #17285c !important;
  }

  /* border-style: hidden;
  background-color: #ffffff;
  color: #17285c;
  width: 97%;
  height: 50px;
  margin: 20px;
  font-size: 42px;
  border-radius: 5px;
  outline: none;

  :focus {
    box-shadow: 0px 0px 2px 2px #cfcfcf;
  } */
`;
