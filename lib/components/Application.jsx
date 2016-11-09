import React, { Component } from 'react'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      cardArray: [],
    }
  }
  render() {
    return (
      <h1>Application</h1>
    )
  }
}
