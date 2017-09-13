import React, { Component } from 'react'
import { connect } from 'react-redux'
import PieChart from 'react-simple-pie-chart'
import { fetchSurvey } from '../../actions'

class SurveyDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchSurvey(id)
  }

  renderRecipients(recipients) {
    if (!recipients) {
      return
    }
    return recipients.map(recipient => {
      if (recipient.responded === true) {
        recipient.response = 'Response received'
      }
      if (recipient.responded === false) {
        recipient.response = 'No response yet'
      }
      return (
        <tr key={recipient.email}>
          <td>
            {recipient.email}
          </td>
          <td>
            {recipient.response}
          </td>
        </tr>
      )
    })
  }

  renderDate(date) {
    if (!date) {
      return 'No response yet'
    }
    return new Date(date).toLocaleDateString()
  }

  renderContent() {
    if (!this.props.survey) {
      return
    }
    const {
      title,
      body,
      subject,
      dateSent,
      lastResponded,
      recipients
    } = this.props.survey
    return (
      <div>
        <div className="section">
          <p>Survey Title</p>
          <h5>
            {title}
          </h5>
        </div>
        <div className="divider" />
        <div className="section">
          <p>Email Subject</p>
          <h5>
            {subject}
          </h5>
        </div>
        <div className="divider" />
        <div className="section">
          <p>Body of the Email</p>
          <h5>
            {body}
          </h5>
        </div>
        <div className="divider" />
        <div className="section">
          <p>Date Sent</p>
          <h5>
            {this.renderDate(dateSent)}
          </h5>
        </div>
        <div className="divider" />
        <div className="section">
          <p>Date of Most Recent Response</p>
          <h5>
            {this.renderDate(lastResponded)}
          </h5>
        </div>
        <div className="divider" />
        <div className="section">
          <h1>Recipient List</h1>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Response Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRecipients(recipients)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderPieChartSection() {
    const { yes, no } = this.props.survey
    const totalVotes = yes + no
    const percentYes = Math.round(yes / totalVotes * 100)
    const percentNo = Math.round(no / totalVotes * 100)
    if (yes === undefined) {
      return
    }
    if (totalVotes === 0) {
      return
    }
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h5>Results:</h5>
          </div>
        </div>
        <div className="row pie-chart-section valign-wrapper">
          <div className="col s3">
            {percentNo}% Voted No
            <div>{no} total votes</div>
          </div>
          <div className="col s6">
            {this.renderPieChart(yes, no)}
          </div>
          <div className="col s3">
            {percentYes}% Voted Yes
            <div>{yes} total votes</div>
          </div>
        </div>
      </div>
    )
  }

  renderPieChart(yes, no) {
    const slices = [
      {
        color: '#e74c3c',
        value: no
      },
      {
        color: '#2ecc71',
        value: yes
      }
    ]
    return <PieChart slices={slices} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <div className="divider" />
        {this.renderPieChartSection()}
      </div>
    )
  }
}

function mapStateToProps({ survey }) {
  return { survey }
}

export default connect(mapStateToProps, { fetchSurvey })(SurveyDetail)
