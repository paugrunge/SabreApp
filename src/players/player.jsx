import React from 'react';
import dayjs from 'dayjs';

const Player = ({ player }) => (
  <tr>
    <td>{player.name}</td>
    <td>{player.position}</td>
    <td>{player.nationality}</td>
    <td>{player.dateOfBirth}</td>
    <td>{Math.floor(dayjs().diff(dayjs(player.dateOfBirth), 'years', true))}</td>
    <td>{player.jerseyNumber}</td>
  </tr>
);

export default Player;
