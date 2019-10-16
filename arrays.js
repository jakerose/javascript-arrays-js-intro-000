// var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, …array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var unshift = array.unshift(element)
  return unshift
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray(array, element) {
  var push = array.push(element)
  return push
}

function accessElementInArray() {

}
