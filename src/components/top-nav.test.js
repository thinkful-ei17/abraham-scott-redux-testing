import React from 'react';
import {mount} from 'enzyme';
import {restartGame} from '../actions';
import {TopNav} from './top-nav';

describe('new game link', () =>{
  it.only('new game dispatches action on click', () =>{
    const spy = jest.fn();
    const wrapper = mount(<TopNav dispatch={spy} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(spy).toHaveBeenCalledWith(restartGame());

  });
});