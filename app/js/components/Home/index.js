// Core
import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.scss';
import CoolInput from '../CoolInput'
import Flicker from '../Flicker'

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      yes: 'yes',
      no: 'no',
      message: null,
      confrontationCount: 0
    }
  }

  checkYesOrNo = input => {
    const { confrontationCount } = this.state;
    console.log(input)
    if(confrontationCount < 1) {
      if(input === 'yes') {
        this.setState(currentState => {
          return {
            yes: 'Yes',
            no: 'No',
            message: `You entered 'yes' but I asked you to type 'Yes' or 'No'. That is wrong. Please follow my instructions.`,
            confrontationCount: currentState.confrontationCount + 1
          }
        })
      } else if(input === 'Yes') {
        this.setState(currentState => {
          return {
            yes: 'Yes',
            no: 'No',
            message: `You entered 'Yes' but I asked you to type 'yes' or 'no'. That is wrong. Please follow my instructions.`,
            confrontationCount: currentState.confrontationCount + 1
          }
        })
      } else {
        this.setState(currentState => {
          return {
            message: `You know that is wrong.`,
            confrontationCount: currentState.confrontationCount + 1
          }
        })
      }
    } else if(input === this.state.yes) {
      this.setState({
        message: `Thank you, let's proceed with your quiz`
      })
    } else {
      this.setState({
        message: `Stop doing that. Did you forget to take off CAPS LOCK again?`
      })      
    }
  }
  render() {
    const { yes, no, message } = this.state;
    let feedback = null;
    if(message) {
      feedback = <p className={ css.p }>{ message }</p>
    }
    return (
      <div className={ css.Home }>
        <article>
          <p className={ css.p }>
            I am personality bot :) I will tell you your <Flicker primaryWord="personality" secondaryWord="diagnosis" /> based on your honest answers to my questions.
          </p>
          <p className={ css.p }>
            I only work if you are completely honest in your answers. Your result can only be as helpful as you are truthful. Keep that in mind when answering <Flicker primaryWord="my" secondaryWord="her" /> questions.
          </p>
          <p className={ css.p }>
            Are you ready? Type '{ yes }' or '{ no }' and press enter
          </p>
          { feedback }
          <CoolInput submitTo={ this.checkYesOrNo } />
        </article>
      </div>
    )
  }
}

export default Home;