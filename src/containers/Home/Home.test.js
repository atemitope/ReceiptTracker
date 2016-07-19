import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Home from './Home';
import {DangerButton, SuccessButton} from '../../components';

describe('Home container', () => {
  it('should have a danger button component', ()=> {
     const homeComponent = shallow(<Home />);
     const dangerButton = homeComponent.find(DangerButton);
     expect(dangerButton).to.have.length.of(1);
  });
  it('should have a success button component', ()=> {
     const homeComponent = shallow(<Home />);
     const successButton = homeComponent.find(SuccessButton);
     expect(successButton).to.have.length.of(1);
  });
  it('to have the expected string', () => {
    let homeComponent = shallow(<Home />);
    expect(homeComponent.text()).to.have.string('The reciept apps');
  });
  it('should have a component with a message', () => {
    const homeComponent = shallow(<Home />);
    const button = homeComponent.find({message: 'this is a danger button'});
    expect(button).to.have.length.of(1);
  });
});