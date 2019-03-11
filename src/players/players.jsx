import React from 'react';

import Player from './player';

import './players.css';

const Players = ({ players }) => (
  <div>
    <table id="tb-players" className="table table-dark table-hover table-bordered">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Nationality</th>
          <th>Date of Birth</th>
          <th>Age</th>
          <th>Jersey Number</th>
        </tr>
        {
          players.map((player, i) =>
            <Player key={i} player={player} />
          )
        }
      </tbody>
    </table>
  </div>
);

export default Players;
