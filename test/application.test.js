import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import React from 'react'
import Application from '../lib/components/Application.jsx'

describe('application`.js', () => {
  it.only('should mount without props', () => {
    const application = shallow(<Application />)
    expect(application.children().length).to.equal(4)
  })
})
