// 1. Declare a variable named challenge and assign it to an initial value 
// **'Full stack JS track** **'**.
let challenge="Full stack JS track";
// 2. Print the string on the browser console using **console.log()**
console.log(challenge);
// 3. Print the **length** of the string on the browser console using
//  *console.log()*
console.log(challenge.length);
// 4. Change all the string characters to capital letters using 
// **toUpperCase()** method
console.log(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using 
// **toLowerCase()** method
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using 
// **substr()** or **substring()** method
let firstWord = challenge.substring(0,4);
console.log(firstWord);
let firstWord2 = challenge.substr(0,4);
console.log(firstWord2);
// 7. Slice out the phrase * JavaScript* from Full stack JavaScript track .
let sliceWord=challenge.slice(12,21);
console.log(sliceWord)
// 8. Check if the string contains a word **Script** using **includes()** method
const sentence = 'Full stack JavaScript track';
const word = 'JavaScript';
console.log(`The word "+ word+ ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// 9. Split the **string** into an **array** using **split()** method
let arrayWords = sentence.split();
console.log(arrayWords) ;
// 10. Split the string Full stack JS track  at the space using **split()** method
let arrayWordsWithSpace = sentence.split(" ");
console.log(arrayWordsWithSpace) ;
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the 
// string at the comma and change it to an array.
let sentence2='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arrayWordsWithComma = sentence2.split(",");
console.log(arrayWordsWithComma) ;
// 12. Change Full stackJS track  to Full stackJS group using **replace()** method.
let newSentence=sentence.replace("track","group");
console.log(sentence);
console.log(newSentence);
// 13. What is character at index 15 in 'Full stack JS track ' string? Use
//  **charAt()** method.
let caracter15=sentence.charAt(15);
console.log(caracter15);
// 14. What is the character code of J in 'Full stack JS track ' string using
//  **charCodeAt()**
console.log(sentence.indexOf("J"));
console.log(sentence.charCodeAt(sentence.indexOf("J")));
// 15. Use **indexOf** to determine the position of the first occurrence of **a** in Full stackJS track 
console.log("First occurence of a "+sentence.indexOf("a"));
// 16. Use **lastIndexOf** to determine the position of the last occurrence of **a** in Full stackJS track 
console.log("Last occurence of a  "+sentence.lastIndexOf("a"));
// 17. Use **indexOf** to find the position of the first occurrence of the word **because** in the 
// following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let sentence3='You cannot end a sentence with because because because is a conjunction'
console.log("First occurence of the word because is in "+ sentence3.indexOf("because"));
// 18. Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the 
// following sentence:**'You cannot end a sentence with because because because is a conjunction'**
console.log("Last occurence of the word because is in "+ sentence3.lastIndexOf("because"));
// 19. Use **search** to find the position of the first occurrence of the word **because** in the following
//  sentence:**'You cannot end a sentence with because because because is a conjunction'**
console.log("the position of the first occurrence of the word **because** is in the "+ sentence3.search("because")+" t position");
// 20. Use **trim()** to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let sentence4="           30 Days Of JavaScript        ";
console.log(sentence4.trim());
// 21. Use **startsWith()** method with the string Full stackJS track  and make the result true
console.log(sentence.startsWith("Full"))
// 22. Use **endsWith()** method with the string Full stackJS track  and make the result true
console.log(sentence.endsWith("track"))
// 23. Use **match()** method to find all the **a**’s in 30 Days Of JavaScript
const regex = /[a]/g;
console.log(sentence4.match(regex));

// 24. Use **concat()** and merge 'full stack ' and 'JavaScript' to a single string, 
// 'Full stack JS track'
let partOne="full stack ";
let partTwo="JavaScript"
let result =partOne.concat(partTwo);
console.log();
// 25. Use **repeat()** method to print Full stackJS track 2 times
let sentenceToRepeat = "Full-stackJS-track ";
console.log(sentenceToRepeat.repeat(5));

//  *************************Exercice 2*********************************************88 

// 1. Using console.log() print out the following statement:

//     `The quote 'There is no exercise better for the heart than reaching down and lifting people up.'  by John Holmes teaches us to help one another.`
console.log("There is no exercise better for the heart than reaching down and lifting people up");
// 2. Using console.log() print out the following quote by Mother Teresa:

//     `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof(10));
console.log(typeof("10"));
let resultatComparaison = (typeof(10) == typeof("10")) ? true : false;
console.log(resultatComparaison);
// To make them equal we cast one of them to Number or to string
let theString = "10";
let theNumber = 10;

let resConversion1 = theNumber.toString();// now both are string (theNumber and the string)
let resConversion2 = parseInt(theString);// or here both are number 
console.log(typeof(resConversion1));
console.log(typeof(resConversion2));

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(typeof('9.8'));
console.log(typeof(10));
let resultatComparaison2 = (typeof('9.8') == typeof(10)) ? true : false;
console.log(resultatComparaison2);
// to make the equal we use pareFloat()
let resultatComparaison3 = (typeof(parseFloat('9.8')) == typeof(10)) ? true : false;
console.log(resultatComparaison3);

// 5. Check if 'on' is found in both python and jargon
var strPython = "python";
var strJargon = "jargon";
var n = strPython.includes("on")&& strJargon.includes("on");
console.log(n);

// 6. *I hope this course is not full of jargon*. Check if *jargon* is in the sentence.
let sentence5="I hope this course is not full of jargon";
console.log(sentence5.includes("jargon"));
// 7. Generate a random number between 0 and 100 inclusively.
const randNum = Math.floor(Math.random() * 100);  // 
console.log(randNum)
// 8. Generate a random number between 50 and 100 inclusively.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
console.log(getRndInteger(50,100));
// 9. Generate a random number between 0 and 255 inclusively.
console.log(getRndInteger(0,255));
// 10. Access the 'JavaScript' string characters using a random number.
// In this Question we're obliged to use the Regex which is not done already so skip this Question 
// for the Last question too (I missed to copy the complet sentence)

