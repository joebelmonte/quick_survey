import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS, FETCH_SURVEY } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values)

    console.log('res is ', res)

    history.push('/surveys')
    dispatch({ type: FETCH_USER, payload: res.data })
  } catch (err) {
    console.log('err is ', err)
  }
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys')

  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}

export const fetchSurvey = id => async dispatch => {
  const res = await axios.get(`/api/surveys/${id}`)

  dispatch({ type: FETCH_SURVEY, payload: res.data })
}

export const deleteSurvey = id => async dispatch => {
  await axios.delete(`api/surveys/delete/${id}`)
  const res = await axios.get('api/surveys')

  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}
