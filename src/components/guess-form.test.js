import React from 'react';
import {makeGuess} from '../actions';
import {mount} from 'enzyme';
import {GuessForm} from './guess-form';

describe('<GuessForm /> can submit', ()=>{
  it('should dispatch makeGuess on submit', ()=>{
    const guess = '25';
    const spy = jest.fn(); 
    const wrapper = mount(<GuessForm dispatch={spy}/>);
    const inputField = wrapper.find('#userGuess');
    inputField.instance().value = guess;
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(spy).toHaveBeenCalledWith(makeGuess(guess));
  });
});