//////////=================== Output =====================//////////

// alert("Hello programmers"); tepadan tushadigan
// document.write(" <h1>   Hello programmers </h1>");  brouserga chiqaradi
// document.write("  Hello programmers ");
// console.log("Hello programmers"); 


///// Variables /////////

// var a = "behi";

// var b = "olma";

// console.log(a + "ga  " + b+ " " + "qo'shsak"  +"mazzali sok paydo  boladi");





// var ketmon = "lapatka";




// var b = 12;

// var c = 24;

// var res = c+b;
// console.log(res);
// console.log(c+b);

// var l = "salom";

// var m = "hayir";

// var k = l + " " + m;

// console.log(k);

// console.log(l+ " " + m);
// console.log(l+k+m);


////////////=========== increment decrement==============///////////

// var x = 4;

// x++   // x = x + 1 // 4 = 4 + 1  
// ++x   // x + 1 = x // 4 + 1 = 4
// x--   // x= x - 1 // 4 = 4 - 1 
// --x   // x-1 = x // 4 - 1 = 4

// console.log(x-- + 7 - x - x--); // 6 3 4 5
// console.log(--x); // 4 2 1 


// console.log(x++ - 4 + 5 - x++ - 10 + x - ++x - 5 + x);
// -12 -11 -10 -9  9  10  


// var x = 4;

// console.log(x++ - 4 + 5 - x++ - 10);

// console.log(++x - 17 + x + x++ );
// -4  20 -2  2  
// console.log(1 + x++ + x);


/* =================== Data type */
/* 
 nechta data type bor?
*/


// string
// var a = "index";    
// var m = "15";

// console.log(typeof(a));
// console.log(typeof(m));







// number
// var b = 12
// var k = salom    
// console.log(typeof(k));


// boolean
// var a = 12+4; // 1 //rost
// var b = false; // 0 // yolgon
// var c = false;
// console.log(typeof(a));
// var w = a > b + c; // rost > yolgon
// var c = true

// console.log(w);
// null
// var l = nan 




//// NaN
//  var x = "1";
// console.log(typeof(x + 2)); 
// console.log(typeof(x));

/// Underfined
// var b 
// console.log(b);

/* =========================== operator > <  >= <= == === != !==*/



// console.log(a <= b);

// var a = false // 00
// var b = true //1
// console.log(a < b);
// var a = 4;   // string // nok
// var b = "4";   
// console.log(a = b);
// number // nok
// var b = "salomfdhdrthfdjftyjtghm";  // string
// var a = "6"; 
// var b = 6;

// console.log(a === b);


// console.log(a < b); // 12 < 6
// consol   e.log(a > b); // 12 > 6


// console.log(a < b); // 12 < 6

/* ==================== operator && || ! */

// var bool = false;
// var bool2 = bool;
// var bool3 = bool;
// var a = 40;

// console.log(a);



// -============================= or || ======================

// var bool1 = true;
// var bool2 = false;

// console.log(bool1 || bool2 || bool1 || bool1 );     


/* =============== and && */

// var bool1 = true;
// var bool2 = false;

// console.log(bool1 && bool2 && bool1 && bool1 );
// var c =  !!!!true || false && true && 3 === '3'

//console.log(c);


//////////////// input 

// var sayHello = prompt("Hello programmer");
// document.write(sayHello);


// var sayHello = prompt("Hello programmer");
// console.log(typeof(sayHello));
// alert("Hello programmers");

///////// if  else 

// var age = +prompt("Jackning yoshi nechida?");

// if(age === 54){
//     console.log("siz togri topdingiz");
// }else{
//     console.log("bu yosh hato");
// }


// var sayHello = prompt("Kiriting:");
// var sayHello = +prompt("Kiriting:");

// var g = String

// if (sayHello = g){
//     document.write("string");
// }else{
//     document.write("number");
// }


// var forDays = +prompt("Sanani kirgizing: ")



// if (forDays <= 10) {
//     document.write("Hali 10 kundan oshiq muddat bor")
// } else if (forDays >= 10 && forDays < 25) {
//     document.write("Oz muddat qoldi")
// } else if (forDays == 25) {
//     document.write("Urra bayram, siz yetib keldingiz!!!")
// } else if (forDays <= 31 && forDays > 25) {
//     document.write("Bayram Tugadi!")
// } else {
//     document.write("Xatolik yuz berdi")
// }


// //////////////////////////////// konkulyator 

// var num1 = +prompt('Birinchi sonni qo`ying'); // '12'
// var math = prompt('Amal kirgazing'); // *
// var num2 = +prompt('Ikkinchi sonni kiriting'); // 3

// var res = eval(num1 + math + num2) // 15 + 21
// // var a = '15'
// document.write(res);

//////////////////// swich case

// var forDays = prompt("Hafta kunini kirgazing: ")

// switch(forDays){
//     case "dush":
//     case "sesh":
//     case "chor":
//     case "pay":
//     case "juma":
//     document.write("Siz ish kunidasiz samaraliroq ishlang");
//     break
//     case "shan":
//     case "yak":
//     document.write("Dam olish kunlaringizni maroqliy o'tkazing");
//     break
//     default:
//     document.write("Siz boshqa sayyorada yashayabsiz");
// }


// var forDays = prompt("kirgazing")
// switch(forDays){
//  case "Number":
//  case "string":
//  case "boolean":
//  console.log("bu xato");   
// }

// // Data type lar  ni  mukammal tarzda chiqarish uyga vazifa
// var takePlace = +prompt("O'rindig'ingiz raqamiini kirgazing")

// switch(takePlace){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//     docum

//     document.write("Sizning joyingiz o'ng tomondagi 1 chi qatorda");
//     break
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//     document.write("Sizning joyingiz chap tomondagi 2 chi qatorda");
//     break

//     // default:
//     // document.wr ite("bu raqamda joy topilmadi");

//   }
// var a = demo 

// let b = "salom"
// const marka = "uyqu" 
// console.log(a);         
// var a = 12;
// var b = 24;
// var a = 12.8;
// console.log(Math.round(a));


// ============================== Math
// console.log(Math);
// console.log(Math.max(-1, 2, 6.9, 8, 0));
// console.log(Math.min(-1, 2, 6.9, 8, 0));

// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(81));

// console.log(Math.floor(0.9));
// console.log(Math.round(0.9));
// console.log(Math.ceil(101.0002));

/* ============================ Random */
// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(Math.random() * 101) + 1);
// console.log(Math.floor(Math.random() * 101) - 1);


// var students = [
//     "Husan",
//     "Kamron",
//     "Otabek",
//     "Anvar",
//     "Husniddin",
//     "Ziyoda",
//     "Gulsevar"
// ]



// console.log(students.length);

// document.write(students(Math.floor[Math.random() * (students.length))]);


// alert("Salom bolalar");

// var a = 12;
// var a = 12.8;
// var b = 12.8;
// let b = 24;
// let b = 24;
// console.log(b);
// const marka = "BMW"
// let marka = "BMW"
// const marka = "BMW"



// var num1 = +prompt("birinchi sonni kiriting");
// var math = prompt("amalni kirgazing");
// var num2 = +prompt("ikkinchi sonni kiriting");

// if(math === "+"){
//     console.log(num1 + num2);
// }else if(math === "-"){
//     console.log(num1 - num2);
// }else if(math === "*"){
//     console.log(num1 * num2);
// }else if(math === "/"){
//     console.log(num1 / num2);
// }else{
//     console.log("xatolik yuz berdi");
// }






/* ========================= string methods */



// var city = "Toshkent";
// console.log(city.substring(0, 8));


/////////////////////////////////////////// masiv/ array

// var a = "salom";
// var b = "34"
// var v = +prompt("birinchi sonni kiriting")

// var daraxt = [
//     "bargi bor",
//     "navdasi bor",
//     "tuvakning ichida"];
// console.log(daraxt);

/* ==================== concat */
// var str = 'Hello Jack. '
// var str2 = 'How are you?'

// console.log(str.concat('How old are you? ', str2));

/* ==================== slice */
// var str = 'Hello Jack. '
// var asd = str.slice(0, 7)
// console.log(asd);
// ========================= replace
// var fruits = 'Apple, Banana, Orange'
// var newFruits = fruits.replace('Orange', 'Kiwi')

// console.log(fruits);
// console.log(newFruits);

/* ========================= split */
// var str = 'Hello world'

// console.log(str.split());

/* ========================= for */

// var school = 100;
// var i = 0;

// while(school >= i){
  //     console.log(i);
  //     i++;   
  // }
  
  // ============================ function
  // var a = 'Privet'
  
  // function noname(){
    //     var a = 'Hello'
    //     console.log(a);
    //   return a
    // }
    
    // console.log(a); // privet
    // noname()
    
    // function rem(l){
    //   console.log(l.toUpperCase());
    // }
    // rem("salom")
    
    // function card(o){
    //   console.log(o.toUpperCase());
    // }
    // card("dsllllllll")
    function card(){
      var r = prompt("Karta raqam kiriting")
      console.log(r.replace(r.slice(5,14),"**** ****"));
    }
    card()
    // var b = +prompt("karta raqam")
    // function fun(i){
    //   console.log(i.replace(i.slice(5,9),"****"));
    // }
    // var a = "Gulbadanbegim";
    
    // console.log(a.length); uznlik
    // console.log(a.toUpperCase()); harflarni katta qilib beradi
    // console.log(a.toLowerCase()); harflarni kichik qilib beradi
    // console.log(a.charAt()); harflarni sanoqga qarab harfini chiqaradi
    // console.log(a.indexOf("Gulbadanbegim", "salom"));
    // console.log(a.slice(9, 13)); sozni kesib beradi
    // console.log(a.replace("salom" , "Gulbadanbegim")); joyini almashtiradi
    // console.log(a.split());   // array qiladi
    // console.log(a.includes("salom")) ; //ichidagini tekshiradi