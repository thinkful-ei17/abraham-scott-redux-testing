import {restartGame, makeGuess, generateAuralUpdate} from './actions';
import './setupTests';
import {mount} from 'enzyme';

import reducer from './reducer';

describe('reducer', () => {
  
  /*
  Test a restart game action
  - test what the state object after the restart game has run.
  - We ca
  */
  it('it should reset the state to the initial state ', ()=>{
    const correctAnswer = 15;
    const state = {
      guesses: [1,5,10,20],
      feedback: 'HOT',
      auralStatus: 'Hi',
      correctAnswer: correctAnswer
    };

    const action = restartGame(correctAnswer);
    const resetState = reducer(state, action);
    expect(resetState).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: correctAnswer 
    });



  });

  it('should add a guess to the guesses array', ()=>{
    const guess = 10;
    const state = {
      guesses:[1, 3, 4, 5]
    }; 
    const action  = makeGuess(guess);
    const newState = reducer(state, action);
    expect(newState.guesses).toHaveLength(state.guesses.length+1);
    expect(newState.guesses[newState.guesses.length-1]).toBe(guess);
  });




});//closes describe
