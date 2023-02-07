import React, { useEffect, useState } from "react";

import { ITeam } from "../../server/models/team";

let team: ITeam[];

declare global {
  interface Window {
    __INITIAL_TEAM__: ITeam[];
  }
}

export const Team = () => {
  if (typeof window != "undefined") {
    team = window.__INITIAL_TEAM__;
  }

  const [allTeam, setAllTeam] = useState<ITeam[]>([{} as ITeam]);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == "about") {
        setAllTeam(team);
      }
    }
  });

  return (
    <div className="wrap_teamBlock">
      <div className="teamBlock">
        <p
          className="txt_about1Title first_title"
          id="team_spec_title"
          style={{ gridColumn: "1 / 4" }}
        >
          Команда
        </p>
        {allTeam.map((participant) => (
          <div>
            <p className="name_of">{participant.name}</p>
            <p className="lastname_of">{participant.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
