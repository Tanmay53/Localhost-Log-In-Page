function addTimeElement(currentElement, dependentElement = null, addition, maxValue = 59) {
  currentElement += addition;

  while(currentElement >= (maxValue + 1)) {
    currentElement -= (maxValue + 1);
    if(dependentElement != null) {
     dependentElement++
    }
  }

  while(currentElement < 0) {
    currentElement += (maxValue + 1);
    if(dependentElement != null) {
      dependentElement--;
    }
  }

  return [currentElement, dependentElement];
}

function timeAddSubtract(timeObject = {}, addedHours, addedMinutes, addedSeconds) {
  var changedTime = {};
  Object.assign(changedTime, timeObject);

  var secondsAddition = addTimeElement(changedTime.seconds, changedTime.minutes, addedSeconds);
  changedTime.seconds = secondsAddition[0];
  changedTime.minutes = secondsAddition[1];

  var minutesAddition = addTimeElement(changedTime.minutes, changedTime.hours, addedMinutes);
  changedTime.minutes = minutesAddition[0];
  changedTime.hours = minutesAddition[1];

  var hoursAddition = addTimeElement(changedTime.hours, null, addedHours, 23);
  changedTime.hours = hoursAddition[0];

  return changedTime;
}