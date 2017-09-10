import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">
              <span className="nav-bar-logged-in">Login With Google</span>
            </a>
          </li>
        )
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            <span className="credits">
              Credits: {this.props.auth.credits}
            </span>
          </li>,
          <li key="4">
            <Link to="/surveys">
              <span className="nav-bar-logged-in">Your Surveys</span>
            </Link>
          </li>,
          <li key="5">
            <Link to="/surveys/new">
              <span className="nav-bar-logged-in">Create A Survey</span>
            </Link>
          </li>,
          <li key="2">
            <a href="/api/logout">
              <span className="nav-bar-logged-in">Logout</span>
            </a>
          </li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left-brand-logo">
            <span className="site-name">Quick Survey</span>
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
