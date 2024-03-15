import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center mx-20">
        <img src={loading} alt="loading"  width="200px"/>
      </div>
    )
  }
}

export default Spinner
