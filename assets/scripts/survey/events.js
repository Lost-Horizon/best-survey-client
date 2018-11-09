'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.newSurvey(surveyData)
    .then(ui.newSurveySuccess)
    .then(onShowAllSurveys)
    .catch(ui.newSurveyFailure)
}

const onShowAllSurveys = (event) => {
  // event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSurveysSuccess)
    .catch(ui.showAllSurveysFailure)
}

const onShowAllSurveysButStay = (event) => {
  // event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSurveysSuccessButStay)
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
  event.preventDefault()
  const surveyId = event.target.dataset.id
  // const surveyId = event.target['dataset.id']

  const surveyData = {
    survey: {
      responses: [{
        answer: event.target.value
      }]
    }
  }
  api.updateSurvey(surveyData, surveyId)
    .then(ui.updateSurveySuccess)
    .then(onShowAllSurveysButStay)
    .catch(ui.updateSurveyFailure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const surveyId = event.target.dataset.id
  api.deleteSurvey(surveyId)
    .then(ui.deleteSurveySuccess)
    .then(onShowAllSurveys)
    .catch(ui.deleteSurveyFailure)
}

const onConfirmDeleteSurvey = (event) => {
  event.preventDefault()
  const deleteButton = event.target
  $(deleteButton).html('By clicking again, you will delete this survey.')
  $(deleteButton).on('click', onDeleteSurvey)
}

const onShowMySurveys = (event) => {
  event.preventDefault()
  ui.showMySurveys()
}

module.exports = {
  onNewSurvey,
  onShowAllSurveys,
  onShowOneSurvey,
  onUpdateSurvey,
  onConfirmDeleteSurvey,
  onShowMySurveys
}
