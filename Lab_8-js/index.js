//1- Create an array method that calculates the average for an array of numbers.

function calcavg(array){ 

          for( let i = 0 ;i < array.length;i++){ 
                    if(typeof array[i] !== 'number'){ 
                              console.log('just insert numeric values ')
                              return 0;
                    }
          }

          let sum=0;
          for(let i = 0 ; i< array.length ; i++){ 
                    sum+= array[i];
          }
          let avg = sum / array.length;
          return avg;
}

//2- When trying to convert an object to string, the output is always '[object object]'.
function Stringobj(obj){ 
          if(obj.message){ 
                    return obj.message
          }
          return 'This is an object' 
}


//3-You're tasked with modeling vehicles and cars in a transportation app:
let vehicleCount = 0;

function Vehicle(type, speed) {
    if (vehicleCount >= 50) {
        console.log('Vehicle limit reached. Cannot create more vehicles.');
        return null;
    }
    vehicleCount++; 
    this.type = type;
    this.speed = speed;
    

    this.start = function () {
        console.log(type + ' started.');
    };

    this.stop = function () {
        console.log(type + ' stopped.');
    };
}

function Car(type, speed) {
          Vehicle.call(this, type, speed); 
      
          this.drive = function () {
              console.log(type + ' is driving at ' + speed + ' km/h.');
          };
      }
// b- Write a function that checks whether an object is an instance of Car using two different ways
function isCar(obj) {
          return typeof obj.drive === 'function';
      }

function isCarbyType(obj) {
          return  obj.type.toLowerCase().includes('car');
      }
      


/*let num = [1,2,3,4,'k'];
console.log(calcavg(num))
let arr = {};
console.log(String(arr) );*/


let obj1 = { message: 'This is a message' };
let obj2 = {};
let car = new Car('Car', 100);
console.log(isCar(car));
console.log(isCarbyType(car));

