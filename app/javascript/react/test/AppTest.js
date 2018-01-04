import PublicSite from '../src/PublicSite';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for PublicSite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PublicSite />)
  })

  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("Hello World")
  })
})
