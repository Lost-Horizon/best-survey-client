'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewSurvey = (event) => {
  console.log('hello!')
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  console.log(surveyData)
  api.newSurvey(surveyData)
    .then(ui.newSurveySuccess)
    .catch(ui.newSurveyFailure)
}

const onShowAllSurveys = (event) => {
  event.preventDefault()
  console.log('you made it!')
  api.showAllSurveys()
    .then(console.log(event.surveys))
    .then(ui.showAllSurveysSuccess)
    .catch(ui.showAllSurveysFailure)
}

const onShowOneSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.showOneSurvey(surveyData)
    .then(ui.showOneSurveySuccess)
    .catch(ui.showOneSurveyFailure)
}

const onUpdateSurvey = (event) => {
  console.log(event)
  event.preventDefault()
  console.log(event.target)
  if (event.target.id === 'true-button') {
    console.log('selected true')
  } else if (event.target.id === 'false-button') {
    console.log('selected false')
  }

  const surveyId = event.target.dataset.id
  // const surveyId = event.target['dataset.id']

  console.log('in events.js', surveyId)
  const surveyData = {
    survey: {
      responses: [{answer: event.target.value}]
    }
  }
  console.log(surveyData)
  api.updateSurvey(surveyData, surveyId)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
}

const onDestroySurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.destroySurvey(surveyData)
    .then(ui.destroySurveySuccess)
    .catch(ui.destroySurveyFailure)
}

module.exports = {
  onNewSurvey,
  onShowAllSurveys,
  onShowOneSurvey,
  onUpdateSurvey,
  onDestroySurvey
}
