function Pland(str){ 
          if (typeof str != "string" || str == null){ 
                    return false;
          }

          str = str.toLowerCase();
           var newstr = str.split("").reverse().join("");

          return str === newstr;
}

function getPrice(price, discount) {
         
          if (price < 0 || discount < 0 || discount > 100) {
              return false;
          }
      
          
          return price - (price * discount / 100);
      }


function longword( word){ 
          let arr=word.split(' ');
          let longword='';

          for(let i = 0 ; i < arr.length;i++){ 
                    if( arr[i].length>longword.length){ 
                              longword=arr[i];
                    }

          }
          return longword;
}

function getinfo() {
         
          let userName = prompt("enter your name");
      
         
          if (!userName) {
              console.error("name is require");
              return; 
          }
      
          
          let gradesInput = prompt("insert your degre like this 90,65,98");
      
         
          if (!gradesInput) {
              console.error("degres is require");
              return; 
          }
      
          
          let grades = gradesInput.split(',').map(grade => Number(grade.trim()));
      
         
          console.log(`Welcome : ${userName}`);
      
          
          console.log("Your Grades:");
          console.table(grades);
      
          
          let total = 0; 
          for (let i = 0; i < grades.length; i++) {
              total += grades[i]; 
          }
          let average = total / grades.length; 
      
          
          console.log(`AVG your grades: ${average.toFixed(2)}`);
      }
      
      
     // getinfo();
      
 
      
      console.log(longword('Hello you in the javascript'))

        //Array
      let move = ['seven','lax','beforyou'];
      // copy array
      let move2=move;
      //change in array
      move[2]='knight';
      // add bagin
      move.unshift('hope');


// three way to show array
console.log(move.join(' '));
console.log(move.slice(0,move.length));
console.log(move.splice(0));

console.log(Pland("mom"));
console.log(getPrice(100, 20));
console.log(10..toString())