import { expect } from 'chai'
import { letterScores } from '../lib/utilities/constants'

describe('constants.js', () => {
  it('should return 1 for letterScores.A', () => {
    expect(letterScores.A).to.equal(1)
  })
  it('should return 10 for letterScores.Z', () => {
    expect(letterScores.Z).to.equal(10)
  })
})
