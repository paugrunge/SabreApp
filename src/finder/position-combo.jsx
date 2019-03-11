import React from 'react';

import { PLAYER_POSITIONS } from '../constants';

const PositionCombo = ({ positionFilter, handlePlayerPositionChange }) => (
  <select class="form-control"value={positionFilter} onChange={handlePlayerPositionChange}>
    <option key={0} value="none">Select Position</option>
    {
      PLAYER_POSITIONS.map((position, i) =>
        <option key={i + 1} value={position}>{position}</option>
      )
    }
  </select>
)

export default PositionCombo;
