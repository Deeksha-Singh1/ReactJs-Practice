import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'
import Product from './Product'

export class App extends Component {
  render() {
    return (
      <div>
        <LifeCycleA/>
        <Product favCol = {'pink'}/>
      </div>
    )
  }
}

export default App