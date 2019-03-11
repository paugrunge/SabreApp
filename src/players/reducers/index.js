import 'bootstrap/dist/css/bootstrap.css';
import { UPDATE_PLAYERS, FILTER_PLAYERS } from './../../constants';

const defaultState = {
  players: [],
  filters: {
    name: "",
    position: "none",
    age: 0
  },
}

const mainReducer = (state = defaultState, action = "unexpected") => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return {
        ...state,
        players: action.players,
      };
    case FILTER_PLAYERS:
      return {
        ...state,
        filters: action.filters,
      }
    default:
      return { ...state }
  }
}

export default mainReducer;
