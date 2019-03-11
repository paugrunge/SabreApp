import axios from 'axios';

import { UPDATE_PLAYERS, FILTER_PLAYERS, FOOTBALL_PLAYERS_APP } from './../../constants';

export function getPlayers() {
  return axios.get(FOOTBALL_PLAYERS_APP);
}

export function loadPlayers() {
  return (dispatch) => {
    return getPlayers()
      .then(({ data }) => {
        dispatch(updatePlayers(data))
      }).catch(err => {
        dispatch(updatePlayers([]))
      });
  }
}

export function updatePlayers(players) {
  return {
    type: UPDATE_PLAYERS,
    players: players,
  }
}

export function filterPlayers(filters) {
  return {
    type: FILTER_PLAYERS,
    filters: filters,
  }
}
