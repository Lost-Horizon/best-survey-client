'use strict'

const store = require('../store.js')

const showOneSurveySuccess = (response) => {
  $('.reset').trigger('reset')
}

const showOneSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const showAllSurveysSuccess = (response) => {
  accumSurveyAnswers(response)
  $('.reset').trigger('reset')
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
}

const newSurveySuccess = (data) => {
  store.survey = data.survey
  $('.reset').trigger('reset')
}

const newSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const updateSurveySuccess = (data) => {
  store.survey = data.survey
  $('.reset').trigger('reset')
}

const updateSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const destroySurveySuccess = () => {
  $('.reset').trigger('reset')
}

const destroySurveyFailure = () => {
  $('.reset').trigger('reset')
}

const accumSurveyAnswers = (response) => {
  let totalYes = 0
  let totalNo = 0
  for (let i = 0; i < response.surveys.length; i++) {
    if (response.surveys[i].responses.answer === 'yes') {
      totalYes++
    } else if (response.surveys[i].responses.answer === 'no') {
      totalNo++
    }
    return [totalYes, totalNo]
  }
}

// const successAlert = () => {
//   $('#content').removeClass('hidden')
//   setTimeout(() => {
//     $('#content').addClass('hidden')
//   }, 3000)
// }
//
// const successFail = () => {
//   $('#content-2').removeClass('hidden')
//   setTimeout(() => {
//     $('#content-2').addClass('hidden')
//   }, 3000)
// }

module.exports = {
  showOneSurveySuccess,
  showOneSurveyFailure,
  showAllSurveysSuccess,
  showAllSurveysFailure,
  newSurveySuccess,
  newSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  destroySurveySuccess,
  destroySurveyFailure
}
