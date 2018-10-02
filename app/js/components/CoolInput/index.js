// Core
import React, { Component } from 'react';

import css from './style.scss';

const alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');
const punctuation = '.,";:!?@%&-_(){}[]/~#*><\''.split('');
const numbers = '0123456789'.split('');
const allowedChars = [ ...alphabet, ...punctuation, ...numbers]
const Cursor = function() {
  return (<span className={ css.cursor }></span>)
}
class CoolInput extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }
  keyPressed = evt => {
    const key = evt.key;
    // console.log(key)
    if(allowedChars.indexOf(key.toLowerCase()) > -1) { 
      this.setState(currentState => {
        return {
          userInput: currentState.userInput + key
        }
      })
    } else if(key === 'Backspace' || key === 'Delete') {
      this.setState(currentState => {
        return {
          userInput: currentState.userInput.substr(0, currentState.userInput.length -1)
        }
      })
    } else if(key === 'Enter' || key === 'Return') {
      this.props.submitTo(this.state.userInput)
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyPressed, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressed, false);
  }
  render() {
    const { userInput } = this.state;
    let renderedInput = null;
    renderedInput = userInput.split('').map((ltr, i) => {
      return <span key={ `${ ltr }_${ i }` } className={ css.letter }>{ ltr }</span>
    })
    return (
      <div className={ css.CoolInput }>
        { renderedInput }<Cursor />
      </div>
    )
  }
}

export default CoolInput;