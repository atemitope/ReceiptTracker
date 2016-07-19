import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Home from './Home';


describe('Home container', () => {
  it('to have the contained string', () => {
    const homeComponent = shallow(<Home />);
    const button = homeComponent.find({message: 'this is a danger button'});
    expect(button).to.have.length.of(1);
  });
});