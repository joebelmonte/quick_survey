import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSurveys, deleteSurvey } from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              Survey Title: {survey.title}
            </span>
            <p>
              Email Body: {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>
              Yes: {survey.yes}
            </a>
            <a>
              No: {survey.no}
            </a>
          </div>
          <Link
            className="waves-effect waves-light btn"
            to={`/surveys/detail/${survey._id}`}
          >
            Details
          </Link>
          <a
            className="waves-effect waves-light btn red darken-3 right "
            onClick={() => this.props.deleteSurvey(survey._id)}
          >
            Delete
          </a>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Your Surveys:</h1>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, {
  fetchSurveys,
  deleteSurvey
})(SurveyList)
