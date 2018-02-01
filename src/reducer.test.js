import {restartGame, makeGuess, generateAuralUpdate} from './actions';
import './setupTests';
import {mount} from 'enzyme';

import reducer from './reducer';

/* global describe it expect*/ 

describe('reducer', () => {
  
  /*
  Test a restart game action
  - test what the state object after the restart game has run.
  - We ca
  */
  it('it should reset the state to the initial state ', ()=>{
    const state = {
      guesses: [1,5,10,20],
      feedback: 'HOT',
      auralStatus: 'Hi',
      correctAnswer: '27' 
    };

    const action = restartGame();
    const resetState = reducer(state, action);
    expect(resetState.guesses).toEqual([]);
    expect(resetState.feedback).toEqual('Make your guess!');
    expect(resetState.auralStatus).toEqual('');
    expect(resetState.correctAnswer).toBeDefined();
  });

  it('auralStatus updates with state', ()=>{
    const state = {
      feedback: 'Bananas',
      guesses: [1, 2, 3, 4]
    };

    const action = generateAuralUpdate();
    const newState = reducer(state, action);
    console.log('newState:', newState);
    expect(newState.auralStatus).toContain('Here\'s the status of the game right now: Bananas You\'ve made 4 guesses');
  });
});



describe('reducer sets correct feedback', () => {

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

  it('should return feedback with \'You\'re Ice Cold...\' ', () =>{
    const guess = 5;
    const state ={
      guesses:[],
      correctAnswer: 60
    };
    
    const action = makeGuess(guess);
    const newState = reducer(state, action);
    expect(newState.feedback).toEqual('You\'re Ice Cold...');

  });


  it('should return feedback with \'You\'re Cold...\' ', () => {
    const guess = 5;
    const state = {
      guesses: [],
      correctAnswer: 37
    };
    
    const action = makeGuess(guess);
    const newState = reducer(state, action);

    expect(newState.feedback).toEqual('You\'re Cold...');

  });

  it('should return feedback with You\'re Warm.', () => {
    const guess = 5;
    const state = {
      guesses: [],
      correctAnswer: 25
    };

    const action = makeGuess(guess);
    const newState = reducer(state, action);

    expect(newState.feedback).toEqual('You\'re Warm.');
  });

  it('should return feedback with \'You\'re Hot!\'', () => {
    const guess = 5;
    const state = {
      guesses: [],
      correctAnswer: 10
    };

    const action = makeGuess(guess);
    const newState = reducer(state, action);

    expect(newState.feedback).toEqual('You\'re Hot!');
  });

  it('should return feedback with \'You got it!\'', () => {
    const guess = 5;
    const state = {
      guesses: [],
      correctAnswer: 5
    };

    const action = makeGuess(guess);
    const newState = reducer(state, action);

    expect(newState.feedback).toEqual('You got it!');
  });


});//closes describe

describe('reducer passes the state if no action match', () => {
  it('it should return original state object', () =>{

    const state = {
      guess: 100,
      feedback: 'You\'re Awesome'
    };

    const action = {
      type: '@@@HEYHEYHEY'
    };

    const newState = reducer(state, action);
    expect(newState).toBe(state);
  });

  
});


// If state is undefined then come back with something
describe('reducer returns a valid state if state passed is undefined', ()=>{
  it('should return a state', () =>{
    const state = undefined;
    const action = {
      type: '@@@HOHOHO'
    };
    const newState = reducer(state, action);
    // expect(newState).toEqual({
    //   guesses: [],
    //   feedback: 'Make your guess!',
    //   auralStatus: '',
    //   correctAnswer: 25 
    // })
    expect(newState.guesses).toEqual([]);
    expect(newState.feedback).toEqual('Make your guess!');
    expect(newState.auralStatus).toEqual('');
    expect(newState.correctAnswer).toBeDefined();
  });
});