"use strict";



//istifadecinin daxil etdiyi cumlede bosluqlari tapan funkisya yaz//

// let sentence =prompt("Soz daxil edin");
// function spaceCounter(sentence){

//     let spaceCount = 0;
//    for(let i = 0; i < sentence.length; i++) //i = 1
//    {
//        if(sentence[i] == " "){
//            spaceCount++; // spaceCount = spacecount + 1;
//        }
      
//    }
//    return spaceCount;
// }
 
// let spaceCount = spaceCounter(sentence);
// console.log(spaceCount);




// Bir metod yaz iki paremetr  qebul edecek birinci sozlerden ibaret array ikinci bir dene herf.Metod hemin array icersindeki
//yalniz gonderilen herfle baslayan sozleri yeni bir array olaraq qaytarmalidir

// let wordsArr = ["alma","armud","heyva","portagal"];
// let firstLetter = "h";


// function findWordsWithFirstLetter(wordsArr,firstLetter){

//     let filtedArr = [];

//     for(let i = 1; i < wordsArr.length;i++){
//         if(wordsArr[i][0] == firstLetter){
//             filtedArr.push(wordsArr[i]);

//         }
//     }
//     return filtedArr;
// }
// let arr = findWordsWithFirstLetter(wordsArr,firstLetter);
// console.log(arr);






//Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan rəqəmlərin ortalamasını qaytaran bir funksiya yaz.


// function AverageofNumbers() {
//     let averageArray = [];
//     let average = 0;
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         arguments[i] = +arguments[i];
//         if(!isNaN(arguments[i])){
//             averageArray.push(arguments[i]);
//             sum += arguments[i] ;
//             average = sum / averageArray.length;
//         }
//     }
//     return average
// }
// console.log(AverageofNumbers(1, 2, "alma", 11, 5, 12, "heyva"))




// Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan yalnız cüt rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.


// function getEvenNumbers() {
//     let evenArray = [];
//     for (let i = 0; i < arguments.length; i++) {
//         arguments[i] = +arguments[i];
//         if(arguments[i] % 2 == 0 && arguments[i] !== 0){
//             evenArray.push(arguments[i]);
//         }
//     }
//     return evenArray
// }
// console.log(getEvenNumbers(1, 2, "alma", "heyva"))




//Rəqəmlərdən ibarət array qəbul edib, yalnız o rəqəmlərin ortalamasından böyük olan rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.


// function getBiggestNumberfromAverage() {
//     let numbers = [];
//     let average = 0;
//     let sum = 0;
//     let biggestNumberfromAverage = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         arguments[i] = +arguments[i];
//         if(!isNaN(arguments[i])){
//             numbers.push(arguments[i]);
//             sum += arguments[i] ;
//             average = sum / numbers.length;
//         }
//     }
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] > average)
//         {
//         biggestNumberfromAverage = numbers[i];
//         console.log(biggestNumberfromAverage);
//         }
//     }
// }
// console.log(getBiggestNumberfromAverage(1, 2, "heyva", 3, "alma", 20 , 23 , 45 , 85 ,"kamran"));




// //Sözlərdən ibarət bir arrayi qəbul edib, həmin sözləri vergül ilə birləşdirib tək söz kimi qaytaran funksiya yaz. Ən sonda vergül düşməməlidir.


// function convertArrayToString() {
//     let str = "";
//     for (let i = 0; i < arguments.length; i++) {
//         str = str + arguments[i];
//         if(i != arguments.length - 1){
//             str = str + ","
//         }
//     }
//     return str
// }
// console.log(convertArrayToString("alma", "heyva", "portagal", "kivi"))



//Sözlərdən ibarət bir arrayi qəbul edib, həmin sözlərin tərsinə düzüldüyü yeni bir arrayi qaytaran bir funksiya yaz.


// function getReversedWords() {
//     let reversed = [];
//     for (let i = arguments.length - 1; i >= 0; i--) {
//         reversed.push(arguments[i]);
//     }
//     return reversed
// }
// console.log(getReversedWords("alma", "heyva", "nar"))



// Sözlərdən ibarət iki arrayi qəbul edib, hər iki array-də olan ortaq sözlərin cəmləşdiyi yeni bir arrayi qaytaran bir funksiya yaz.

// let words1 = ["nar", "kivi", 15, "heyva"];
// let words2 = ["portagal", "nar","heyva","alma", 1, 2]
// function getCommonWords(arr1, arr2) {
//     let commonwords = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let a = 0; a < arr2.length; a++) {
//             if(arr1[i] == arr2[a])
//             {
//                 commonwords.push(arr1[i])
//             }
//         }
        
//     }
//     return commonwords;
// }
// console.log(getCommonWords(words1, words2))







//Bir metod yaz, bir söz qebul edir ve hemin sozde hansi herfden ve neçə dənə olduğunu konsola yazdirir.

// let word = "alma"
// function wordHaveHowManySelectedLetter(word) {
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (arr.indexOf(word[i]) == -1) {
//             arr.push(word[i])
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         count = 0;
//         for (let a = 0; a < word.length; a++) {
//             if(arr[i] == word[a])
//             {
//                 count++;
//             }
//         }
//         console.log(arr[i] + " herfinin sayi: " + count)
//     }
// }
// console.log(wordHaveHowManySelectedLetter(word))

