import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'

class Landing extends Component {
  renderLoggedOutContent() {
    return (
      <div>
        <div className="intro-text">
          <h1>Welcome to Quick Survey</h1>
          <h3>by Joe Belmonte</h3>
        </div>
        <div className="row icon-instructions">
          <div className="col s4">
            <i className="material-icons">person</i>
            <h3>Log In With Google</h3>
            <h5>
              Click the button in the top right to log in with your Google
              account.
            </h5>
          </div>
          <div className="col s4">
            <i className="material-icons">attach_money</i>
            <h3>Purchase Credits*</h3>
            <h5>
              Use Stripe to purchase credits. Each survey costs 1 credit.{' '}
            </h5>
          </div>
          <div className="col s4">
            <i className="material-icons">create</i>
            <h3>Write a Survey</h3>
            <h5>Compose a short, 1 question yes or no survey.</h5>
          </div>
        </div>
        <div className="row icon-instructions">
          <div className="col s4">
            <i className="material-icons">rate_review</i>
            <h3>Review</h3>
            <h5>Review your survey before sending.</h5>
          </div>
          <div className="col s4">
            <i className="material-icons">contact_mail</i>
            <h3>Send via Email</h3>
            <h5>Enter email addresses for your respondents.</h5>
          </div>
          <div className="col s4">
            <i className="material-icons">insert_chart</i>
            <h3>Collect Feedback</h3>
            <h5>Analyze the responses as they come in.</h5>
          </div>
        </div>
        <div className="row landing-instructions-detail">
          <div className="col s8 offset-s2">
            <div className="landing-instructions-text">
              <h3>
                Quick Survey is a demo application that allows users to create 1
                question yes or no surveys.
              </h3>
            </div>
            <div className="landing-instructions-text">
              <h3>
                These surveys are then emailed out, and the results are recorded
                for review.
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderLoggedInContent() {
    return (
      <div>
        <div className="logged-in-landing">
          <h1>Quick Survey</h1>
          <p>Instructions:</p>
        </div>
        <div className="row instructions">
          <div className="col s6 offset-s3">
            <ol>
              <li>
                Add credits via Stripe by clicking the button in the navigation
                bar.
                <ol className="circle">
                  <li>
                    For the purposes of this application, you can use credit
                    card number <i>4242-4242-4242-4242</i>, any expiration date
                    that occurs in the future, and dummy data for the rest of
                    the form.
                  </li>
                </ol>
              </li>
              <div className="instructions-bullets">
                <li>
                  Click the button in the navigation bar to create a survey. You
                  must enter information in all fields.
                  <ol className="circle">
                    <li>
                      Email addresses should be entered in comma-delimited
                      format.
                    </li>
                  </ol>
                </li>
              </div>
              <li>
                Review the results of your surveys by clicking{' '}
                <i>Your Surveys</i>.
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <div>
            <div style={{ textAlign: 'center ' }}>
              {this.renderLoggedOutContent()}
            </div>
            <div>
              <Footer />
            </div>
          </div>
        )
      default:
        return (
          <div>
            {this.renderLoggedInContent()}
            <div>
              <Footer />
            </div>
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing)
