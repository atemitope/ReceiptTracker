import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Home from '../Home/Home';
import App from './App';
//import {DangerButton, SuccessButton} from '../../components';

describe('App container', () => {
  it('should have a success button component', ()=> {
     const homeComponent = shallow(<App> <Home /> </App>);
     const successButton = homeComponent.find(Home);
     expect(successButton).to.have.length.of(1);
  });
  it('to have the expected string', () => {
    let homeComponent = shallow(<App> <Home /> </App>);
    expect(homeComponent.text()).to.have.string('Hello and welcome to the reciept tracker app ');
  });
});