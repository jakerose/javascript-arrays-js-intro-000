var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array) {
  var unshift = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var push = array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function accessElementInArray(array, index) {
  return array[index]
}
