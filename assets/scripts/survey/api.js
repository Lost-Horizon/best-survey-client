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
  // const surveyId = surveyData.log.id
  // return $.ajax({
  //   url: config.apiUrl + `/logs/${surveyId}`,
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Token token=${store.user.token}`
    // }
  // })
}

const updateSurvey = (surveyData, surveyId) => {
  console.log(surveyData)
  console.log(surveyId)
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

const destroySurvey = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/logs/${surveyId}`,
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
  destroySurvey
}
