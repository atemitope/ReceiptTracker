import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import DangerButton from './DangerButton';

describe('DangerButton Component', function() {
   it("contains class button of btn ", function() {
    expect(shallow(<DangerButton />).is(".btn")).to.equal(true);
  });
  it("contains class button of danger ", function() {
    expect(shallow(<DangerButton />).is(".btn-danger")).to.equal(true);
  });
  it('to have the contained string', () => {
    let dangerButton = shallow(<DangerButton message={'This is a danger Button'}/>);
    expect(dangerButton.text()).to.have.string('This is a danger Button');
  });
});