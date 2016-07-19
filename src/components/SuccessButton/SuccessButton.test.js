import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import SuccessButton from './SuccessButton';

describe('SuccessButton Component', function() {
   it("contains class button of btn  ", function() {
    expect(shallow(<SuccessButton />).is(".btn")).to.equal(true);
  });
  it("contains class button of success ", function() {
    expect(shallow(<SuccessButton />).is(".btn-success")).to.equal(true);
  });
   it('to have the contained string', () => {
    let successButton = shallow(<SuccessButton message={'This is a success Button'}/>);
    expect(successButton.text()).to.have.string('This is a success Button');
  });
});