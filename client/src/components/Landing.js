import React, { Component } from 'react'
import { connect } from 'react-redux'

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <div>Message for a user not logged in.</div>
      default:
        return <div>Message for a user who is logged in.</div>
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center ' }}>
        <h1>Welcome to Quick Survey</h1>
        <h3>A demonstration app by Joe Belmonte</h3>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing)
