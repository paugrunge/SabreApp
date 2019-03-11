import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../players/actions/index.js';

import PositionCombo from './position-combo.jsx';

export class SelectorBar extends React.Component {

  state = {
    nameFilter: "",
    positionFilter: "none",
    ageFilter: "",
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "nameFilter") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        this.setState({ nameFilter: value });
      }
    } else if (name === "ageFilter") {
      this.setState({ ageFilter: value });
    }
  }

  handleKeyPress = (event) => {
     if(event.charCode === 13){
   this.getFilteredPlayers();
    } 
  }

  handlePlayerPositionChange = (event) => {
    this.setState({ positionFilter: event.target.value }, () => { 
    // Do something here
    this.getFilteredPlayers();
    });
  }

  getFilteredPlayers = () => {
    this.props.filterPlayers({
      name: this.state.nameFilter,
      position: this.state.positionFilter,
      age: parseInt(this.state.ageFilter),
    });
  }

  render() {
    const { nameFilter, positionFilter, ageFilter } = this.state;

    return (
      <div id="filter" className="input-group mb-3">
        <input className="form-control" id="nameFilter" name="nameFilter" placeholder="Player Name" type="text" value={nameFilter} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <PositionCombo positionFilter={positionFilter} handlePlayerPositionChange={this.handlePlayerPositionChange} />
        <input className="form-control" id="ageFilter" name="ageFilter" placeholder="Age" type="number" min="18" max="40" value={ageFilter} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <button id="searchButton" className ="btn btn-dark" onClick={this.getFilteredPlayers}>Search</button>
      </div>
    )
  }
}

const mapState = (state) => ({ filterPlayers: state.filterPlayers });

export default connect(mapState, actionCreators)(SelectorBar);
