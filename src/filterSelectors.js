import { createSelector } from 'reselect';

const appDataSelector = state => state;

const playersSelector = state => state.players;

const filtersSelector = state => state.filters;

const filteredPlayersSelector = createSelector(
  playersSelector,
  filtersSelector,
  (players, filters) => {
    let filteredPlayers = players;

    if (filters.name.length > 0) {
      filteredPlayers = filteredPlayers.filter(({ name }) =>
        name.toLowerCase().indexOf(filters.name.toLowerCase()) >= 0
      );
    }

    if (filters.position !== "none" && filters.position !== "") {
      filteredPlayers = filteredPlayers.filter(({ position }) =>
        position === filters.position
      );
    }

    if (filters.age >= 18 && filters.age <= 40) {
      let dayjs = require('dayjs');
      let today = dayjs();

      filteredPlayers = filteredPlayers.filter(({ dateOfBirth }) => {
        let birthDate = dayjs(dateOfBirth);
        let diff = today.diff(birthDate, 'years', true);

        return Math.floor(diff) === filters.age;
      });
    }

    return filteredPlayers;
  }
);

export {
  appDataSelector,
  playersSelector,
  filtersSelector,
  filteredPlayersSelector,
};
