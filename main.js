// ---------------------------1
console.log("israel");
console.log("keren");
console.log(5 * 5);
var num1, num2, num3, num4;
num1 = 2;
num2 = 3;
num3 = 4;
num4 = 5;
var sum = num1 + num2 + num3 + num4;
var avg = sum / 4;
console.log(`sum: ${sum},avg:${avg}`);

var width = 7;
var height = 8;
console.log(width * height);

function num(number1, number2) {
  var numA = number1;
  number1 = number2;
  number2 = numA;
  return number1, number2;
}
console.log(num(2, 1));
// -----------מערך המסודר לפי הא-ב------
  var arrayNames = ["keren","gila","igal","osher","sara","sapir","gil","dan","eden","yafit","tikva","matan",];

function Names() {
  for (let i = 0; i < arrayNames.length; i++) {
      for (let j = i+1; j < arrayNames.length; j++) {
          if(arrayNames[i]<arrayNames[j]&& arrayNames[i]!=arrayNames[j]){
             console.log(arrayNames[i]); 
          }
          
      }
      
  }
  return arrayNames;
}
console.log(Names());
