import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import DangerButton from './DangerButton';

describe('DangerButton', function() {
   it("contains class button of btn ", function() {
    expect(shallow(<DangerButton />).is(".btn")).to.equal(true);
  });
  it("contains class button of danger ", function() {
    expect(shallow(<DangerButton />).is(".btn-danger")).to.equal(true);
  });
});