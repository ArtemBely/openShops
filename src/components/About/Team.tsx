import React from "react";
import { team } from './teamParticipants';

export const Team = () => {

    return (
      <div className='wrap_teamBlock'>
          <div className='teamBlock'>
            <p className='txt_about1Title first_title' id='team_spec_title' style={{ gridColumn: '1 / 4' }}>Команда</p>
              {team.map((participant) => (
                <div>
                    <p className='foto1'></p>
                    <p className='name_of'>{participant.name}</p>
                    <p className='lastname_of'>{participant.title}</p>
                </div>
              ))}
          </div>
      </div>
    )
}
