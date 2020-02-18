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
var buttonsContainer = document.querySelector('.buttons-container');
var logButton = document.querySelector('.log-button');
var completedActivityPage = document.querySelector('.completed-activity-page');
var timer = document.querySelector('.timer-button');
var logButton = document.querySelector('.log-button');
var minutes = 0;
var seconds = 0;
var timerContainer = document.querySelector('.running-time');

buttonsContainer.addEventListener('click', function(event) {
  activityClick(event);
});
buttonStartActivity.addEventListener('click', startActivityClick);
secondsInput.addEventListener("keydown", acceptNumbersOnly);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
timerButton.addEventListener('click', timerStart);
logButton.addEventListener('click', toCompletedActivityPage);

function activityClick(event) {
  buttonMeditate.classList.remove('meditate-active');
  buttonMeditate.classList.add('activity-category');
  buttonStudy.classList.remove('study-active');
  buttonStudy.classList.add('activity-category');
  buttonExercise.classList.remove('exercise-active');
  buttonExercise.classList.add('activity-category');
  studyImage.src = "assets/study.svg";
  exerciseImage.src = "assets/exercise.svg";
  meditateImage.src = "assets/meditate.svg";
  if (event.target.classList.contains('study')) {
    studyClick();
  }
  if (event.target.classList.contains('meditate')) {
    meditateClick();
  }
  if (event.target.classList.contains('exercise')) {
    exerciseClick();
  }
}

function acceptNumbersOnly(event) {
  if (event.keyCode === 69) {
    event.preventDefault();
  }
}

function studyClick() {
  buttonStudy.classList.add('study-active');
  buttonStudy.classList.remove('activity-category');
  studyImage.src = "assets/study-active.svg";

}

function meditateClick() {
  buttonMeditate.classList.add('meditate-active');
  buttonMeditate.classList.remove('activity-category');
  meditateImage.src = "assets/meditate-active.svg";
}

function exerciseClick() {
  buttonExercise.classList.add('exercise-active');
  buttonExercise.classList.remove('activity-category');
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
  if (minutes < 10) {
    minutesOutput.innerText = '0' + minutes;
  }
  secondsOutput.innerText = secondsInput.value;
  if (seconds < 10) {
    secondsOutput.innerText = '0' + seconds;
  }
}

function toNewPage() {
  if (accomplishInput.value && minutesInput.value && secondsInput.value) {
    minutes = Number(minutesInput.value);
    seconds = Number(secondsInput.value);
    newActivityPage.classList.add('hide');
    currentActivityPage.classList.remove('hide');
  }
}

function timerStart() {
  function timer() {
    setTimeout(function() {

      if (seconds > 0) {
        seconds--;
        secondsOutput.innerText = seconds;
        minutesOutput.innerText = minutes;
        if (seconds < 10) {
          secondsOutput.innerText = '0' + seconds;
        }
        if (minutes < 10) {
          minutesOutput.innerText = '0' + minutes;
        }
        return timer();
      } else if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 59;
        secondsOutput.innerText = seconds;
        minutesOutput.innerText = minutes;
        if (minutes < 10) {
          minutesOutput.innerText = '0' + minutes;
        }
        return timer();
      } else if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
        timerButton.value = 'COMPLETE!'
        // window.alert('times up!')
        logButton.classList.remove('hide');
        timerContainer.innerText = "WAY TO GO!";
      }
    }, 1000);
  }
  timer();
}

function toCompletedActivityPage() {
  currentActivityPage.classList.add('hide');
  completedActivityPage.classList.remove('hide');
}
