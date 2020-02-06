var buttonStudy = document.querySelector('.study');
var buttonMeditate = document.querySelector('.meditate');
var buttonExercise = document.querySelector('.exercise');
var studyImage = document.getElementById('white-study');
var meditateImage = document.getElementById('white-meditate');
var exerciseImage = document.getElementById('white-exercise');

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
