'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newSurvey = (surveyData) => {
  return $.ajax({
    url: config.apiUrl + `/surveys`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: surveyData
  })
}

const showAllSurveys = () => {

  return $.ajax({
    url: config.apiUrl + `/surveys`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showOneSurvey = (surveyData) => {

}

const updateSurvey = (surveyData, surveyId) => {
  // const surveyId = surveyData.survey._id

  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: surveyData
  })
}

const deleteSurvey = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  newSurvey,
  showAllSurveys,
  showOneSurvey,
  updateSurvey,
  deleteSurvey
}
