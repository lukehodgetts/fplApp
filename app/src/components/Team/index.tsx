import React from "react";

import TeamPlayer from "../TeamPlayer";


interface Props {
  teamData: any;
}

const Team: React.FC<Props> = ({ teamData }) => {
  return (
    <div>
      {teamData.map((player: any) => {
        return <TeamPlayer player={player} />;
      })}
    </div>
  );
};

export default Team;
