//[1] Write a function to calculate the sum of digits in a number
function sumOfDigits(number) {

          number = Math.abs(number);
          var numberAsString = number.toString();
          var digits = numberAsString.split('');
        
          var sum = digits.reduce(function (sum, digit) {
            return sum + parseInt(digit, 10); 
          },0);
        
          return sum;
        }

//[2] Write a function to calculate the number of vowels in a string
function countVowels(str) {
 
          var vowels = 'aeiou';
          var characters = str.split('');
          var vowelCharacters = characters.filter(function (char) {
          
          
            return vowels.indexOf(char) !== -1;
          });
        
          return vowelCharacters.length;
        }

//[3] Write a function to calculate the number of occurances of a character in a stringfunction countOccurrences(str, char) {

function countChar(str, char) {

          var characters = str.split('');
          var matchingChar = characters.filter(function (ch) {
            return ch === char;
          });
        
          return matchingChar.length;
        }

        countVowels('jkjgg');
      console.log(sumOfDigits(56842));