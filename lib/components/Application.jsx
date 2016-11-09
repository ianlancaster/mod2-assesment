import React, { Component } from 'react'
import scripts from '../utilities/scripts'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      word: '',
      score: 0,
    }
  }

  setWord(e) {
    const newScore = scripts.scoreWord(e.target.value)
    this.setState({
      word: e.target.value,
      score: newScore,
    })
  }

  render() {
    return (
      <main>
        <input
          type="text"
          placeholder="word"
          value={this.state.word}
          onChange={(e) => this.setWord(e)}
        />
        <p>Score {this.state.score}</p>
        <button type="button">Submit</button>
        <button type="button" disabled={!this.state.word}>Clear</button>
      </main>
    )
  }
}
