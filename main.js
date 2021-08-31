// ---------------------------1
// console.log("israel");
// console.log("keren");
// console.log(5 * 5);
// var num1, num2, num3, num4;
// num1 = 2;
// num2 = 3;
// num3 = 4;
// num4 = 5;
// var sum = num1 + num2 + num3 + num4;
// var avg = sum / 4;
// console.log(`sum: ${sum},avg:${avg}`);

// var width = 7;
// var height = 8;
// console.log(width * height);

// function num(number1, number2) {
//   var numA = number1;
//   number1 = number2;
//   number2 = numA;
//   return number1, number2;
// }
// console.log(num(2, 1));
// -----------מערך המסודר לפי הא-ב------
//   var arrayNames = ["keren","gila","igal","osher","sara","sapir","gil","dan","eden","yafit","tikva","matan",];

// function Names() {
//   for (let i = 0; i < arrayNames.length; i++) {
//       for (let j = i+1; j < arrayNames.length; j++) {
//           if(arrayNames[i]<arrayNames[j]&& arrayNames[i]!=arrayNames[j]){
//              console.log(arrayNames[i]);
//           }
//       }
//   }
//   return arrayNames;
// }
// console.log(Names());
// -------------- מערך מודפס 3 פעמים-----
// var arrayThree=["keren","hailu","yafit","eden"]
// console.log(arrayThree,arrayThree,arrayThree);
// var i =0
// while(i<3){
//   i++
// console.log(arrayThree);
// }
// -------------------------------------------
// תרגילים טפסים:
// --------------1--------------------
// Name FamName Email Picture passWord Phone passWordAgain
// function checkPass(){
//   if (passWordAgain.value == passWord.value) {
//     console.log("the same pass");
//     return true;
//   }
//   console.log("no the same pass");
//   labelPass.innerHTML+="*****"
//   pForm.innerHTML += "the password is'nt the same";
//   return false;
// };

// form.onsubmit = () => {
//   checkPass();
// };

// var counter= "a"
// function ageUp18(){
//   if(age==18){
//     counter++
//     age++
//     console.log(counter);
//   }
//   }
//   form.onsubmit=()=>{
//     ageUp18()
//   }

// function ageClass(){
//   if(Age.value==6){
//     console.log("a");
//   }
//   if(Age.value==7){
//     console.log("b");
//   }
// }

// form.oninput=()=>{
//   ageClass()
// }
// ------------------animation----------------
// function move(){
//   div.style.left=100+"px"
// }

// btnDiv.onclick=()=>{
//   setInterval(()=>{
//     move()
//   },50)
// }
// ------- מערך תמונות-----------------

var arrayImg = [
  "https://cdn.pixabay.com/photo/2021/08/24/15/38/sand-6570980__340.jpg",
  "https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331__340.jpg",
  "https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635__340.jpg",
];
// ---------------- slider-------------------
// var i =0;
// function Pic(){
//   img.src=arrayImg[i]
//   i++
// }

// var stop1=setInterval(()=>{
//   Pic()
//   if(i==arrayImg.length){
//   i=0;
// }
// },2000)
// ------ btn next and previous-------
// img.src=arrayImg[i]
// previous.onclick=()=>{
//   img.src=arrayImg[i++]
//   if(i==arrayImg.length){
//     i=0;
//   }

// }

// next.onclick=function(){
//   img.src=arrayImg[i--]
//   if(i<0){
// i=arrayImg.length-1
//   }
// }

// -------------------5------------------------
var i = 1;
img.src = arrayImg[0];
function Pic() {
  img.src = arrayImg[i];
  i++;
}
movebtn.onclick = () => {
  var dontMove = setInterval(() => {
    Pic();
    if (i == arrayImg.length) {
      i = 0;
    }
  }, 2000);
};

stop.onclick = () => {
  clearInterval(
    setInterval(() => {
      Pic();
      if (i == arrayImg.length) {
        i = 0;
      }
    }, 2000)
  );
};
