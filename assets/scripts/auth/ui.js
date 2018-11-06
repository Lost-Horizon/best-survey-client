'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#display-sign-up-message').html('Sign up successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = () => {
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = (response) => {
  store.user = response.user
  // $('#display-log-in-message').html('Sign in successful')
  // $('#display-log-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('.sign-up-log-in').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.navbar').removeClass('hidden')
  $('.home-menu').removeClass('hidden')
  $('.change-password-section').removeClass('hidden')
  $('.create-survey-div').removeClass('hidden')
  // $('#change-password-message').html('')
}

const signInFailure = () => {
  $('#display-log-in-message').html('Sign in failed, please try again')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const passwordChangeSuccess = () => {
  $('#change-password-message').html('Change Password successful')
  $('#change-password-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  // $('#change-password-form').addClass('hidden')
}

const passwordChangeFailure = () => {
  $('#change-password-message').html('Change Password failed, please try again')
  $('#change-password-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = () => {
  // $('#display-log-in-message').html('Sign Out successful')
  // $('#display-log-in-message').css('color', 'green')
  $('.sign-up-log-in').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.navbar').addClass('hidden')
  $('.home-menu').addClass('hidden')
  $('.change-password-section').addClass('hidden')
  $('.create-survey-div').addClass('hidden')
  $('#display-log-in-message').html('')
  // $('#change-password-message').html('')
}

const signOutFailure = () => {
  $('#display-log-in-message').html('Something went wrong, please try again')
  $('#display-log-in-message').css('color', 'red')
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure
}
