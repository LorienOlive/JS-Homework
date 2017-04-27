function addNumbers(numberA, numberB) {
  return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo);




function yell(str) {
  return str.toUpperCase();
}

var result = yell("Hey you! ")

console.log(result);



function yell10(str) {
  function yell(str) {
    return str.toUpperCase();
  }
  return str.repeat(10);
}

var result = yell10("Hey you! ")

console.log(result);



function longest(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } if (str2.length > str1.length) {
    return str2;
  }
}

var result = longest(";alskdfja;ds", ";alskdjf")

console.log(result);




function isVowel(char) {
  if (char == "a") {
    return  true;
  } else if (char == "e") {
    return true;
  } else if (char == "i") {
    return true;
  } else if (char == "o") {
    return true;
  } else if (char == "u") {
    return true;
  } else return false;
}

console.log(isVowel("k"));
