var buttonStudy = document.querySelector('.study');
var buttonMeditate = document.querySelector('.meditate');
var buttonExercise = document.querySelector('.exercise');

buttonStudy.addEventListener('click', studyClick);
buttonMeditate.addEventListener('click', meditateClick);
buttonExercise.addEventListener('click', exerciseClick);

function studyClick() {
  buttonStudy.classList.add('study-active');
  buttonStudy.classList.remove('activity-category');
  buttonMeditate.classList.remove('meditate-active');
  buttonMeditate.classList.add('activity-category');
  buttonExercise.classList.remove('exercise-active');
  buttonExercise.classList.add('activity-category');
}

function meditateClick() {
  buttonMeditate.classList.add('meditate-active');
  buttonMeditate.classList.remove('activity-category');
  buttonExercise.classList.remove('exercise-active');
  buttonExercise.classList.add('activity-category');
  buttonStudy.classList.remove('study-active');
  buttonStudy.classList.add('activity-category');
}

function exerciseClick() {
  buttonExercise.classList.add('exercise-active');
  buttonExercise.classList.remove('activity-category');
  buttonStudy.classList.remove('study-active');
  buttonStudy.classList.add('activity-category');
  buttonMeditate.classList.remove('meditate-active');
  buttonMeditate.classList.add('activity-category');
}
