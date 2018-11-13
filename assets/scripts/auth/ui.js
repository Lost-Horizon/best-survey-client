'use strict'

const store = require('../store.js')
const surveyEvents = require('../survey/events.js')

$(() => {
  $('.div-for-password-message').hide() // Alfredo says: this hides the success animation (by default)
  $('.div-for-create-survey-message').hide() // Alfredo Says: this hides the success animation (by default)
  $('.div-for-password-message-fail').hide()
  $('.survey-instructions').hide()

  // $('#create-survey-section').hide()
})

const signUpSuccess = () => {
  clearForms()
  $('#display-sign-up-message').html('Sign up successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#display-sign-in-message').html('')
  $('#display-log-in-message').html('')
}

const signUpFailure = () => {
  clearForms()
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#display-sign-in-message').html('')
  $('#display-log-in-message').html('')
}

const signInSuccess = (response) => {
  store.user = response.user
  clearForms()
  $('#sign-in-form').trigger('reset')
  $('.sign-up-log-in').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.navbar').removeClass('hidden')
  $('.home-menu').removeClass('hidden')
  $('.change-password-section').removeClass('hidden')
  $('#create-survey-section').removeClass('hidden')
  $('.see-all-surveys-section').removeClass('hidden')
  // $('.see-my-surveys-section').removeClass('hidden')
  $('.see-my-surveys-section').show(); // Alfredo added this in lieu of the previous line
  $('#display-sign-up-message').html('')
  $('.survey-instructions').show()
  $('#see-all-surveys-section').show(); // Alfredo added this line
  surveyEvents.onShowAllSurveys()
}

const signInFailure = () => {
  clearForms()
  $('#display-log-in-message').html('Sign in failed, please try again')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#display-sign-up-message').html('')
}

const passwordChangeSuccess = () => {
  $('.div-for-password-message').show()
  $('.div-for-password-message').fadeOut(4000)
  clearForms()
}

const passwordChangeFailure = () => {
  clearForms()
  $('#change-password-form').trigger('reset')
  $('.div-for-password-message-fail').show()
  $('.div-for-password-message-fail').show()
  $('.div-for-password-message-fail').fadeOut(4000)
}

const signOutSuccess = () => {
  clearForms()
  $('.sign-up-log-in').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.navbar').addClass('hidden')
  $('.home-menu').addClass('hidden')
  $('.change-password-section').addClass('hidden')
  $('#create-survey-section').addClass('hidden')
  // $('.see-all-surveys-section').addClass('hidden')
  $('.see-all-surveys-section').hide()
  $('.see-my-surveys-section').addClass('hidden')
  $('#display-log-in-message').html('')
  // $('#change-password-message').html('')
  $('#navbar-at-sign-up').show();
  $('.survey-instructions').hide()

}

const signOutFailure = () => {
  clearForms()
  $('#display-survey-message').html('Something went wrong, try again')
  $('#display-survey-message').css('color', 'red')
}

const clearForms = function () {
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#new-survey-form').trigger('reset')
  $('#display-sign-up-message').empty()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure,
  clearForms
}
