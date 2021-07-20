import React from "react";

import { Flex } from "../Player/index.styles";
import { GridContainer, GridItem, GridColumn, Pitch } from "./index.style";

import Team from "../Team";

interface Props {
  teamData: any;
}

const TeamView: React.FC<Props> = ({ teamData }) => {
  return (
    <GridContainer>
      <Team teamData={teamData} />
      <GridColumn>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </GridColumn>
      <GridColumn>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </GridColumn>
      <GridColumn>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </GridColumn>
      <GridColumn>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </GridColumn>
    </GridContainer>
  );
};

export default TeamView;
