import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 380px auto auto auto auto auto;
  grid-template-rows: 650px;
  /* background-color: green; */
  grid-gap: 10px;
  padding: 10px 0px;
  margin: 20px 0px;
  width: 98%;
`;

export const GridItem = styled.div`
  background-color: blue;
`;

export const GridColumn = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
`;

export const Pitch = styled.div`
  background-color: green;
`;