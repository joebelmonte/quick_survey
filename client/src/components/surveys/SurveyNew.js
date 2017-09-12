//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      )
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
        credits={this.props.credits}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!state.auth) {
    return { credits: 0 }
  }
  return { credits: state.auth.credits }
}

export default reduxForm({
  form: 'surveyForm'
})(connect(mapStateToProps)(SurveyNew))
