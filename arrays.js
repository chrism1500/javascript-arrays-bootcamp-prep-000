var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  return [element,...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(array)
  return array
}

function addElementToEndOfArray(array, elemen) {
  [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(elemen)
  return array
  }
  
  function accessElementInArray(array,index){
  return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
  }
  function removeElementFromBeginningOfArray (array, element){
    array.unshift
  }