// import React, { Component } from 'react';
// import logo from './assets/logo.svg';
// import './assets/App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as dispatchPlayers from './players/actions/index.js';

import Finder from './finder/finder';
import Players from './players/players';

import {
  appDataSelector,
  filteredPlayersSelector,
} from './filterSelectors';

export class App extends Component {

  componentDidMount() {
    this.props.loadPlayers();
  }

  render = () => {
    const { players } = this.props;

    return (
      <div>
        <Finder />
        <Players players={players} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: appDataSelector(state),
    players: filteredPlayersSelector(state),
  };
}

export default connect(
  mapStateToProps,
  dispatchPlayers
)(App);

