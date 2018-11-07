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

const onShowOwnerSurveys = (event) => {
  // event.preventDefault()
  // api.showOwnerSurveys()
  //   .then(ui.showOwnerSurveysSuccess)
  //   .catch(ui.showOwnerSurveysFailure)
}

const onUpdateSurvey = (event) => {
  console.log(event)
  event.preventDefault()
  console.log(event.target)
  if (event.target.id === 'true-button') {
    console.log('selected true')
  } else {
    console.log('selected false')
  }

  const surveyId = event.target.dataset.id
  // const surveyId = event.target['dataset.id']

  console.log('in events.js', surveyId)
  const surveyData = {
    survey: {
      responses: [{answer: 'true'}]
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
  onShowOwnerSurveys,
  onUpdateSurvey,
  onDestroySurvey
}
