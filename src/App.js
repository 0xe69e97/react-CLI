import React, { Component } from 'react'
// import { hot } from 'react-hot-loader'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: 1,
    }
  }

  render() {
    return (
      <div className='App'>
        <h1> Hello, World! </h1>
        {this.state.test}
      </div>
    )
  }
}

export default App
