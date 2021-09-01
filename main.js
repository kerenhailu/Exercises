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
// --------------Dom---------------------------------------------------------------------
// -------------------1------------------------
// ObjectName ObjectAge ObjectBtn
var Person={}
// function ObjectPerson(){
//   Person.ObjectName=ObjectName.value
//   Person.ObjectAge=ObjectAge.value
//   console.log(Person);
// }
// ObjectBtn.onclick=()=>{
//   ObjectPerson()
// }
// -------------------2------------------------
//  ObjectBtn.onclick=()=>{
//   Person.ObjectName=ObjectName.value
//   Person.ObjecFamName=ObjecFamName.value
//   Person.ObjectAge=ObjectAge.value
//   console.log(Person);
//  }
// -------------------3------------------------
  // ObjectBtn.onclick=()=>{
  //  Person.ObjectName=ObjectName.value
  //  Person.ObjecFamName=ObjecFamName.value
  //  Person.ObjectAge=ObjectAge.value
  //  Person.ObjectEmail=`${ObjectName.value}@gmail.com`
  //  console.log(Person);
  // }
  // -------------------4------------------------
//  ObjectBtn.onclick=()=>{
//     Person.ObjectName=ObjectName.value
//     Person.ObjecFamName=ObjecFamName.value
//     Person.ObjectAge=ObjectAge.value
//     Person.ObjectEmail=`${ObjectName.value}@gmail.com`
//     Person.ObjectDate=Date()
//     console.log(Person);
//   }
// -------------------5------------------------
// function fun(){
// var carr ={}
// carr.colorCar=colorCar.value,
// carr.Company=CompanyCar.value,
// carr.samak= samakCar.value,
// carr.YearCar=Date(),
// document.write(`${carr.colorCar}${carr.Company}${carr.samak}${carr.YearCar}`);
//    console.log(carr);
// }
// btnCar.onclick = () => {
//     fun();
//    };

// -------------------6------------------------
// function hiThere(){
//   document.write(`<p>hello there</p>`)
// }hiThere()
// -------------------7------------------------
// function hiDavid(){
//   document.write("hello there David")
// }hiDavid()

// -------------------8------------------------
// nameUserBtn.onclick=()=>{
//   alert(`hi ${nameUser.value}`)
// }
// // -------------------9------------------------
// DetailsUserBtn.onclick=()=>{
// document.write(`${NameUser.value} ${FamilyNameUser.value} ${AgeUser.value}`)
// }
// -------------------10------------------------
// DetailsUserBtn.onclick=()=>{
// DetailsUserDiv.innerHTML+=`${NameUser.value} ${FamilyNameUser.value} ${AgeUser.value}`
// }
// -------------------11------------------------
// DetailsUserBtn.onclick=()=>{
//   NameDiv.innerHTML+=`${NameUser.value}`
//   FamilyNameDiv.innerHTML+=` ${FamilyNameUser.value}`
//   AgeDiv.innerHTML+=` ${AgeUser.value}`
//   }
// -------------------12------------------------
// function NameAndAge(){
//   document.write(`<div>${NameUser.value}${AgeUser.value}</div>`)
// }NameAndAge()
// DetailsUserBtn.onclick=()=>{
//   NameAndAge()
// }
// -------------------13------------------------
// function allAboutThePerson(){
//   document.write(`<div><p>${NameUser.value }${FamilyNameUser.value }${AgeUser.value}</div></p>`)
// }
// DetailsUserBtn.onclick=()=>{
//   allAboutThePerson()
//   }
// -------------------14------------------------
// function allPerson(){
//      document.write(`<p id="Details">${NameUser.value }${FamilyNameUser.value }${AgeUser.value}</p>`)
//    }
//    DetailsUserBtn.onclick=()=>{
//     allPerson()
//     }
// -------------------15------------------------
// function PersonWithDivPId(){
//         document.write(`<div><p id="DetailsPerson">${NameUser.value }${FamilyNameUser.value }${AgeUser.value}</p><div>`)
//       }
//       DetailsUserBtn.onclick=()=>{
//         PersonWithDivPId()
//        }
// -------------------16------------------------
// function a() {
//   document.write(`<p id="b">${nameAsk16.value}</p>`);
// }a()
// function faindP() {
//   b.innerText += `${nameAsk16.value},hailu`;
// }
// btnAsk16.onclick = () => {
//   faindP()
// };
// -------------------17------------------------
// function person() {
//   document.write(`<p id="Pperson"> ${nameAsk16.value}</p>`);
// }
// person();
// function plassDateAndFamName() {
//   Pperson.innerText += `${nameAsk16.value},hailuu,` + Date();
// }
// btnAsk16.onclick = () => {
//   plassDateAndFamName();
// };
// -------------------18------------------------
// function carList() {
//   var car = {};
// car.colorCar=colorCar.value,
// car.Company=CompanyCar.value,
// car.samak= samakCar.value,
//   document.write(`${car.colorCar}${car.Company}${car.samak}`);
//   console.log(car);
// }
// btnCar.onclick = () => {
//   carList();
// };
// -------------------19------------------------
// function fun(){
// var carr ={}
// carr.colorCar=colorCar.value,
// carr.Company=CompanyCar.value,
// carr.samak= samakCar.value,
// carr.YearCar=YearCar.value,
// document.write(`${carr.colorCar}${carr.Company}${carr.samak}${carr.YearCar}`);
//    console.log(carr);
// }
// btnCar.onclick = () => {
//     fun();
//    };
// -------------------20------------------------
// function funA(){
// var carrA ={}
// carrA.colorCar=colorCar.value,
// carrA.Company=CompanyCar.value,
// carrA.samak= samakCar.value,
// carrA.YearCar=YearCar.value,
// document.write(`<div>${carrA.colorCar}${carrA.Company}${carrA.samak}${carrA.YearCar}</div>`);
//    console.log(carrA);
// }
// btnCar.onclick = () => {
//     funA();
//    };
// -------------------21------------------------
// function funA(){
// var carrA ={}
// carrA.colorCar=colorCar.value,
// carrA.Company=CompanyCar.value,
// carrA.samak= samakCar.value,
// carrA.YearCar=YearCar.value,
// document.write(`<div>${carrA.colorCar}<div></div>${carrA.Company}<div></div>${carrA.samak}<div></div>${carrA.YearCar}</div>`);
//    console.log(carrA);
// }
// btnCar.onclick = () => {
//     funA();
//    };
// -------------------22------------------------
// function s(){
// var car ={}
//  car.colorCar=colorCar.value,
//  car.Company=CompanyCar.value,
//  car.samak= samakCar.value,
//  car.YearCar=YearCar.value,
// document.write(`<div id=color>color:${car.colorCar }</div><div id="company">Company:${car.Company }</div><div id="samak">samak:${car.samak }</div><div id="year">Year of the Car:${car.YearCar}<div>`)
// console.log(car);
// }s()
// btnCar.onclick=()=>{
//   s()
// }
// -------------------1------------------------
// Name1 Email1 Password1 NameUser1 btn1
function theSameName() {
  if (Name1.value == "keren") {
    alert("the same name!!");
    console.log("the same name!!");
  }
  console.log("aa");
}
btn1.onclick = () => {
  theSameName();
};
// -------------------2------------------------
// function zogi(){
//   var ArrayNum=[5,7,9,6,8,1,5,3,2]
// for (let i = 0; i < ArrayNum.length; i++) {
//   if(ArrayNum[i]%2==0){
//     ArrayNum[i]="hello"

// }
// }console.log(ArrayNum);
// }zogi()
// -------------------3.1,3.2,3.3------------------------
var books = [
  { Name: "Aldain", Address: "Asdod", Pages: 20 },
  { Name: "Narnia", Address: "Lod", Pages: 50 },
  { Name: "Nomi", Address: "Ramle", Pages: 70 },
  { Name: "keren", Address: "yehod", Pages: 10 },
  { Name: "Dvora", Address: "Ashkelon", Pages: 30 },
];
console.log(books);
for (let i = 0; i < books.length; i++) {
  console.log();
  document.write(`${books[i].Name} ${books[i].Address} ${books[i].Pages} `);
}
// -------------------3.4------------------------
// NameBook AddressBook pageBook
// var newBook={}
// function bookFromUser(){
//   newBook.Name=NameBook.value
//   newBook.Address=AddressBook.value
//   newBook.Pages=pageBook.value
//   books.push(newBook)
//   console.log(books);
// }
// btnBook.onclick=()=>{
//   bookFromUser()
// }
// -------------------3.5------------------------
btnBook.onclick = () => {
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < 5; j++) {
      document.write(
        `${i} :<br>${books[i].Name} ${books[i].Address} ${books[i].Pages} `
      );
    }
  }
};


// ------------event-------------------------------------------------------------------

// -------------------1------------------------
// function Medifis() {
//   titleInput.innerHTML += `${inputMain.value}`;
// }

// inputMain.oninput = () => {
//   Medifis();
// };
// --------------אותה תשובה--------------------
// inputMainBtn.addEventListener("input",function(){
//   Medifis()
// })

// inputMainBtn.onclick=()=>{
//   Medifis()
// }

// function UppercaseChange() {
//   titleInput.innerHTML += `${inputMain.value.toUpperCase()}`;
// }
// // inputMain.oninput=()=>{
//   UppercaseChange()
// }
// --------------אותה תשובה--------------------
// inputMainBtn.addEventListener("click", function(){
//   UppercaseChange()
// })
// inputMainBtn.onclick = () => {
//   UppercaseChange();
// };
// -------------- 7------------------------?????
// for (let i = 0; i < 3; i++) {
//   if (inputMainBtn.onclick() == 3) {
//     inputMain.value.style.desplay = "none";
//   }
// }

// ----------Timers----------------------------------------------------------------
// -------------------1---------------------------
// setInterval(()=>{
//   console.log("keren hailu");
// },4000)
// -------------------2---------------------------
// setInterval(()=>{
//   alert("hailu")
// },3000)
// -------------------3---------------------------
// setInterval(()=>{
//   document.write("keren hailu")
// },2000)
// -------------------4-מונה כל שניה---------
// var i =0;
// setInterval(()=>{
//   console.log(i);
//   i++
// },1000)
// -------------------5---------------------------
// setInterval(()=>{
// document.write(`<p>"keren !!"</p>`)
// },2000)
// -------------------6---------------------------
// setInterval(()=>{
// document.write(`<p id="para">paragrph</p>`)
// },2000)
// -------------------7---------------------------
// setInterval(()=>{
// document.write(`<div>"div .."</div>`)
// },2000)
// -------------------8---------------------------
// setInterval(()=>{
// document.write(`<div><p id="PInDiv">"p in div"</p></div>`)
// },2000)
// -------------------9---------------------------
// var i=0;
// var stop=setInterval(()=>{
// document.write(i)
// i++
// if(i>7){
//   clearInterval(stop)
// }
// },1000)

// ------------------animation-------------------------------------------------------
// function move(){
//   div.style.left=100+"px"
// }

// btnDiv.onclick=()=>{
//   setInterval(()=>{
//     move()
//   },50)
// }
// ------- מערך תמונות-----------------

// var arrayImg = [
//   "https://cdn.pixabay.com/photo/2021/08/24/15/38/sand-6570980__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635__340.jpg",
//   "https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631__480.jpg",
//   "https://cdn.pixabay.com/photo/2017/06/10/12/42/man-and-horses-2389830__340.png",
// ];
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
// var i = 1;
// img.src = arrayImg[0];
// function Pic() {
//   img.src = arrayImg[i];
//   i++;
// }

// var yyy
// movebtn.onclick = () => {
// yyy=setInterval(() => {
//   Pic()
//   if (i == arrayImg.length) {
//       i = 0;
//     }
// }, 2000);
// };
// stopbtn.onclick = () => {
//   clearInterval(
//     yyy
//   );
// };
// -------------------6------------------------
// circelbtn.onclick=()=>{
//   img.style.borderRadius="50%"
// }
// -------------------7------------------------
// function mix(){
//   i=Math.floor(Math.random()*(arrayImg.length))
// img.src=arrayImg[i]
// }
// mixbtn.onclick=()=>{
//   setInterval(() => {
//      mix()
//   }, 1000);
// }
// -------------------8------------------------
// changeInput.onclick = () => {
//   for (let i = 0; i < arrayImg.length; i++) {
//     if (i == changeInput.value) {
//       img.src = arrayImg[i];
//       PicChose.innerHTML = img.src;
//     }
//   }
// };
// -------------------9------------------------?/
// var moveTheTitle = 0;

// var reversa=setInterval(() => {
//   titleMove.style.position = "relative";
//   titleMove.style.left = `${moveTheTitle++}px`;

//   if (moveTheTitle > 40) {
//     clearInterval(reversa)
//     // moveTheTitle--
//     titleMove.style.position = "relative";
//     titleMove.style.left = `${moveTheTitle--}px`;
//   }
// }, 50);
// -------------------10------------------------?
// function hoverTitle(){
//   titleMove.style.hover.color="red"
// }hoverTitle()
// titleMove.style.hover.color="red"
// img.hover=img.style.borderRadius="50%"

// -------------------11------------------------?

// תרגילים טפסים:
// --------------1------------------------------------------------------------------
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

// var abc="abcdefghigkl"
// var classAge=6
// if(age==classAge){
//   console.log(abc[0]);
//   abc[0++]
//   classAge++

// }

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
