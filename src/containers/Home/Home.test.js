import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Home from './Home';
import {DangerButton, SuccessButton} from '../../components';


describe('Home container', () => {
   it("contains danger Button", () => {
     const wrapper = mount(<Home />);
     console.log(wrapper);
     expect(wrapper.containsMatchingElement(<DangerButton message={'this is a danger button'}/>)).to.equal(true);
  });
  it('to have the contained string', () => {
    let Home = shallow(<Home />);
    expect(Home.text()).to.have.string('The reciept apps');
  });
});