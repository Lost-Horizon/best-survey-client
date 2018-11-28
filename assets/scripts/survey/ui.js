'use strict'

const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')
const showMySurveysTemplate = require('../templates/my-surveys.handlebars')
const authUi = require('../auth/ui.js')

//////////////// FOR STICKY NAVIGATION PURPOSES ////////////////////

window.onscroll = function () {
  myFunction()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

////////////////////// FOR ANIMATION ON SUCESS PURPOSES ///////////////////////
$(() => {
  $('.div-for-create-survey-message').hide() // Alfredo Says: this hides the success animation (by default)
  $('.div-for-create-survey-message-fail').hide()
})

////////////////////////////////////////////////////////////////////

const showAllSurveysSuccess = (data) => {
  const allSurveys = data
  const userId = store.user._id

  const allMySurveys = allSurveys.surveys.filter(function (survey) {
    return survey.owner === userId

  })

  store.mySurveys = allMySurveys

  $('.reset').trigger('reset')
  const showSurveysHtml = showSurveysTemplate({
    surveys: data.surveys
  })

  $('.my-surveys-component').addClass('hidden')
  $('.survey-component').removeClass('hidden')
  $('.survey-component').html(showSurveysHtml)
  $('#display-survey-message').css('black')

  // Alfredo says: I comment out so the user can see the home page (with the option it offer) instead of scrolling involuntarily 
  // $('html, body').animate({
  //   scrollTop: ($('#see-all-surveys-section').offset().top)
  // }, 500)
}

const showAllSurveysSuccessButStay = (data) => {
  const allSurveys = data
  const userId = store.user._id

  const allMySurveys = allSurveys.surveys.filter(function (survey) {
    return survey.owner === userId
  })

  store.mySurveys = allMySurveys

  $('.reset').trigger('reset')
  const showSurveysHtml = showSurveysTemplate({
    surveys: data.surveys
  })

  // $('.my-surveys-component').addClass('hidden') //Alfredo
  $('.survey-component').removeClass('hidden')
  $('.survey-component').html(showSurveysHtml)
  $('#display-survey-message').css('black')
}


const showMySurveys = () => {
  const showMySurveysHtml = showMySurveysTemplate({
    surveys: store.mySurveys
  })
  $('.my-surveys-component').removeClass('hidden')
  // $('.survey-component').addClass('hidden') //
  $('.my-surveys-component').html(showMySurveysHtml)
  $('#display-survey-message').css('black')
  $('html, body').animate({
    scrollTop: ($('#see-my-surveys-section').offset().top)
  }, 500)
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, try again')
  $('#display-survey-message').css('red')
}

const newSurveySuccess = (data) => {
  $('.reset').trigger('reset')
  $('.div-for-create-survey-message').fadeIn(100)
  $('.div-for-create-survey-message').fadeOut(4000)
  $('#new-survey-form').trigger('reset')
}

const newSurveyFailure = () => {
  $('.div-for-create-survey-message-fail').fadeIn(100)
  $('.div-for-create-survey-message-fail').fadeOut(4000)
  $('.reset').trigger('reset')
  // $('#display-survey-message').html('Something went wrong, try again')
  // $('#display-survey-message').css('black')
}

const updateSurveySuccess = () => {

}

const updateSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const deleteSurveySuccess = () => {
  $('.reset').trigger('reset')
}

const deleteSurveyFailure = () => {
  $('.reset').trigger('reset')
}



module.exports = {

  showAllSurveysSuccess,
  showMySurveys,
  showAllSurveysFailure,
  newSurveySuccess,
  newSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyFailure,
  showAllSurveysSuccessButStay
}
