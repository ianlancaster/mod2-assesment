import { expect } from 'chai'
import { scoreWord } from '../lib/utilities/scripts'

describe('scripts.js', () => {
  it('scoreWord("hello") should return 8', () => {
    expect(scoreWord('hello')).to.equal(8)
  })
  it('scoreWord("") should return 0', () => {
    expect(scoreWord('')).to.equal(0)
  })
  it('scoreWord(null) should return 0', () => {
    expect(scoreWord(null)).to.equal(0)
  })
  it('scoreWord(" hello ") should return 8', () => {
    expect(scoreWord(' hello ')).to.equal(8)
  })
  it('scoreWord("hello", 2) should return 16', () => {
    expect(scoreWord('hello', 2)).to.equal(16)
  })
})
