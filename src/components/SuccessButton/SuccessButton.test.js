import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import SuccessButton from './SuccessButton';

describe('SuccessButton', function() {
   it("contains class button of btn  ", function() {
    expect(shallow(<SuccessButton />).is(".btn")).to.equal(true);
  });
  it("contains class button of success ", function() {
    expect(shallow(<SuccessButton />).is(".btn-success")).to.equal(true);
  });
});