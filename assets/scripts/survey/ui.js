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

const accumSurveyAnswers = (surveyData) => {
  let totalYes = 0
  let totalNo = 0
  for (let i = 0; i < surveyData.surveys.responses.length; i++) {
    if (surveyData.surveys.responses[i].answer === 'yes') {
      totalYes++
    } else if (surveyData.surveys.responses[i].answer === 'no') {
      totalNo++
    }
    return {
      totalYes: totalYes,
      totalNo: totalNo
    }
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
