// Core
import React, { Component } from 'react';

import css from './style.scss';

class Flicker extends Component {

  static defaultProps = {
    primaryWord: 'murder',
    secondaryWord: 'suicide',
  }

  constructor({ primaryWord, secondaryWord }) {
    super();
    let primary = primaryWord;
    let secondary = secondaryWord;
    const difference = primaryWord.length - secondaryWord.length;
    if(difference < 0) {
      primary = `${ ' '.repeat(Math.ceil(Math.abs(difference /2))) }${ primaryWord }${ ' '.repeat(Math.ceil(Math.abs(difference /2))) }`;
      console.log('second word longer')
    } else if(difference > 0) {
      secondary = `${ ' '.repeat(Math.ceil(difference / 2)) }${ secondaryWord }${ ' '.repeat(Math.ceil(difference / 2)) }`;
      console.log('first word longer')
    }
    console.log(difference, primary, primary.length)
    console.log(difference, secondary, secondary.length)

    this.state = {
      primary,
      secondary,
      displayWord: primary
    }
  }
  insertPrimary = () => {
    console.log('insertPrimary')
    this.setState(currentState => {
      return {
        displayWord: currentState.primary
      }
    })
  }
  insertSecondary = () => {
    console.log('insertSecondary')
    this.setState(currentState => {
      return {
        displayWord: currentState.secondary
      }
    })
  }
  runFlickers() {
    console.log('runFlickers')
    const startTime = Math.random() * 500 + 750;
    setTimeout(this.insertSecondary, startTime)
    setTimeout(this.insertPrimary, startTime + 50)
    setTimeout(this.insertSecondary, startTime + 100)
    setTimeout(this.insertPrimary, startTime + 150)
    setTimeout(this.insertSecondary, startTime + 500)
    setTimeout(this.insertPrimary, startTime + 1150)
    setTimeout(this.insertSecondary, startTime + 1200)
    setTimeout(this.insertPrimary, startTime + 1250)
    setTimeout(this.insertSecondary, startTime + 1300)
    setTimeout(this.insertPrimary, startTime + 1350)
  }
  componentWillUnmount() {
    clearInterval(this.looper)
  }
  componentDidMount() {
    this.runFlickers()
  }
  render() {
    const { primary, secondary, displayWord } = this.state;
    return (
      <span className={ css.Flicker }>{ displayWord }</span>
    )
  }
}

export default Flicker;