// Core
import React from 'react';
import { Transition } from 'react-transition-group';

import Home from './js/components/Home'

import './scss/main.scss';
import css from './scss/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  setParentState = (state) => {
    this.setState(state)
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App;