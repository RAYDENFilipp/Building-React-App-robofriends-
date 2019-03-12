import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends Component {
  // constructor not needed anymore
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //     searchField: ''
  //   };
  // }

  componentDidMount() {
    this.props.onRequestRobots();
  }
  // no need with redux
  // onSearchChange = event => {
  //   this.setState({ searchField: event.target.value });
  // };

  render() {
    // not needed anymore
    // const { robots, searchField } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props; // robots and searchField come down as props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <div className="flex h-100 justify-center items-center">
        <h1>Loading</h1>
      </div>
    ) : (
      <div className="tc fixed w-100">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
//higher order function. Connect() returns another fn that accepts App as a parameter
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
