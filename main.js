var buttonStudy = document.querySelector('.study');
var buttonMeditate = document.querySelector('.meditate');
var buttonExercise = document.querySelector('.exercise');
var buttonStartActivity = document.querySelector('.start-button');
var newActivityPage = document.querySelector('.new-activity-page');
var currentActivityPage = document.querySelector('.current-activity-page');
var studyImage = document.getElementById('white-study');
var meditateImage = document.getElementById('white-meditate');
var exerciseImage = document.getElementById('white-exercise');
var errorMessage = document.querySelector('warning-message');
var accomplishInput = document.querySelector('.accomplish-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var accomplishErrorMessage = document.getElementById('accomplish-error-message');
var minutesErrorMessage = document.getElementById('minutes-error-message');
var secondsErrorMessage = document.getElementById('seconds-error-message');
var minutesOutput = document.getElementById('minutes-output');
var secondsOutput = document.getElementById('seconds-output');
var accomplishOutput = document.querySelector('.accomplish-output');
var accomplishButton = document.querySelector('.start-button');
var timerButton = document.querySelector('.timer-button');
var categorySelected;

buttonStudy.addEventListener('click', studyClick);
buttonMeditate.addEventListener('click', meditateClick);
buttonExercise.addEventListener('click', exerciseClick);
buttonStartActivity.addEventListener('click', startActivityClick);
secondsInput.addEventListener("keydown", acceptNumbersOnly);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
timerButton.addEventListener('click', timerStart);










function acceptNumbersOnly(event) {
  if (event.keyCode === 69) {
    event.preventDefault();
  }
}

function studyClick() {
  buttonStudy.classList.add('study-active');
  buttonStudy.classList.remove('activity-category');
  buttonMeditate.classList.remove('meditate-active');
  buttonMeditate.classList.add('activity-category');
  buttonExercise.classList.remove('exercise-active');
  buttonExercise.classList.add('activity-category');
  studyImage.src = "assets/study-active.svg";
  meditateImage.src = "assets/meditate.svg";
  exerciseImage.src = "assets/exercise.svg";
}

function meditateClick() {
  buttonMeditate.classList.add('meditate-active');
  buttonMeditate.classList.remove('activity-category');
  buttonExercise.classList.remove('exercise-active');
  buttonExercise.classList.add('activity-category');
  buttonStudy.classList.remove('study-active');
  buttonStudy.classList.add('activity-category');
  studyImage.src = "assets/study.svg";
  meditateImage.src = "assets/meditate-active.svg";
  exerciseImage.src = "assets/exercise.svg";
}

function exerciseClick() {
  buttonExercise.classList.add('exercise-active');
  buttonExercise.classList.remove('activity-category');
  buttonStudy.classList.remove('study-active');
  buttonStudy.classList.add('activity-category');
  buttonMeditate.classList.remove('meditate-active');
  buttonMeditate.classList.add('activity-category');
  meditateImage.src = "assets/meditate.svg";
  studyImage.src = "assets/study.svg";
  exerciseImage.src = "assets/exercise-active.svg";
}

function showErrorMessage(input, error) {
  if (input.value === "") {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
}

function startActivityClick() {
  showErrorMessage(accomplishInput, accomplishErrorMessage);
  showErrorMessage(minutesInput, minutesErrorMessage);
  showErrorMessage(secondsInput, secondsErrorMessage);
  toNewPage();
  displayCurrent();
}

var timer = document.querySelector('.timer-button');

buttonStudy.onclick = function() {
  categorySelected = 'study'
  console.log(categorySelected)
  timer.classList.add('study-timer')
}

buttonMeditate.onclick = function() {
  categorySelected = 'meditate'
  console.log(categorySelected)
  timer.classList.add('meditate-timer')
}

buttonExercise.onclick = function() {
  categorySelected = 'exercise'
  console.log(categorySelected)
  timer.classList.add('exercise-timer')
}

function displayCurrent() {
  accomplishOutput.innerText = accomplishInput.value;
  minutesOutput.innerText = minutesInput.value;
  secondsOutput.innerText = secondsInput.value;
}

function toNewPage() {
  if (accomplishInput.value && minutesInput.value && secondsInput.value) {
    newActivityPage.classList.add('hide');
    currentActivityPage.classList.remove('hide');
  }
}

var minutes = Number(document.querySelector('.minutes-input').value);
var sec = Number(document.querySelector('.seconds-input').value);
var logButton = document.querySelector('.log-button');

function timerStart(){
    debugger
    var seconds = (minutes*60) + sec;
    var timer = setInterval(function(){
      document.getElementById('seconds-output').innerHTML=seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            document.querySelector('timer-button').innerHTML=logButton;
            logButton.classList.remove('hide');
        }
    }, 1000);
}
