//Control Flow
//----------------
// //maximum of two number
//----------------------------
// let num1 =10;
// let num2 =11;

// let number = max(num1,num2);

// console.log(number);

// function max(num1,num2){
//     if(num1>num2) return num1;
//     else return num2;

// }
//otherwise we can use conditional operatar
// function max(num1,num2){
//     return (num1>num2) ? num1:num2;
// }

//maximum of three number
//----------------------------
// let num1 =2;
// let num2 =2;
// let num3 =8; 
// let number = max(num1,num2,num3);
// console.log(number);

// function max(num1,num2,num3){
//     if(num1>num2) return num1;
//     else if (num2>num3) return num2;
//     else return num3;
// }

//Landscape or Portrait
//---------------------
// let width=30;
// let height=20;
// let a=Landscape(width,height);
// console.log("if thet true it is Landscape, or it is false Portrait: ",a)

// function Landscape(width,height){
//     return (width>height);
// }

//FizzBuzz
//--------------
//divisibel by 3 is fizz
//divisibel by 5 is buzz
//divisibel by both 3 and 5 => fizzbuzz
//not divisibel by 3 and 5 we will get same input
//not a namber  it show Not a number

// const output=fizzbuzz(5);
// console.log(output);

// function fizzbuzz(input){
//     if (typeof input !== 'number')
//         return NaN;
//     else if ((input % 3 ===0) && (input % 5 ===0 ))
//         return "fizzbuzz";
//     else if (input % 3 ===0 )
//         return "fizz";
//     else if(input % 5 ===0 )
//         return "buzz";
//     return input;
// }

//Demerit Point
//----------------
//speed limit 70 km
//every 5 km -> 1 point
//math.floor(1.3)
//if more than 12 point licence cancel

// checkspeed(70);

// function checkspeed(speed){
//     const speedlimit= 70;
//     const kmperpoint = 5;
//     const licecancelpoint = 12;
//     if (speed < speedlimit + kmperpoint) {
//         console.log("ok");
//         return;
//     } 
//     const point = Math.floor((speed - speedlimit ) / kmperpoint );
//     if(point >=licecancelpoint)
//         console.log("Lincence cancel");
//     else
//         console.log("points: ",point)
// }

//ODD or EVEN
//-------------
// shownumber(10);

// function shownumber(limit){
//     for(let i = 0; i<=limit; i++){
//         if (i%2 === 0 ) console.log(i,"EVEN")
//         else console.log(i , "ODD")
        
//     }
// }
//otherwise using conditional operater

// function shownumber(limit){
//     for(let i = 0; i<=limit; i++){
//         const msg= (i%2 === 0) ? "EVEN":"ODD"
//             console.log(i,msg);
//     }
// }

//CountTruthy
//------------
//falsy:-
//undefined
//null
//0
//""
//false

// const array=[0,null,undefined,"",2,3];
// console.log(CountTruthy(array));

// function CountTruthy(array){
//     let Count = 0;
//     for(let value of array)
//         if(value)//javascript engine easly find boolean or non boolean it is truthy or falsy
//         //if the result is truthy count can be increment
//          Count++;
//     return Count;

// }

//Srting Property
//-----------------
// const movie = {
//     title : "a",
//     year : 1998,
//     rating : 4.5,
//     director : "b"

// };

// showproperites(movie);

// function showproperites(obj){
//     for(let key in obj) {
//         if (typeof obj[key] === "string")
//         console.log(key,obj[key]);

//     }
// }

//Sum Of Multiples 3 and 5
//-------------------------
//multiples of 3:3,6,9
//multiples of 5:5,10

// console.log(sum(10));

// function sum(limit){
//     let sum = 0;
//     for(let i=0; i<=limit; i++)
//       if(i % 3 === 0 || i % 5 ===0)
//         sum += i;

//     return sum;
// }

//Grade
//-------
//Average = 70
//1-59:f
//60-69:d
//70-79:c
//80-89:b
//90-100:a

// const marks = [80,80,50];

// console.log(calculatergrade(marks));

// function calculatergrade(marks){
//   const avg =calcutageavg(marks);
//   if (avg <60 ) return "F";
//   if (avg <70 ) return "D";
//   if (avg <80 ) return "C";
//   if (avg <90 ) return "B";
//   if (avg <100 ) return "A";
// }

// function calcutageavg(array){
//   let sum=0;
//   for(let mark of array)
//     sum += mark;
//   let avg=sum / marks .length;
//   return avg;
// }

//Stars
//--------
// showstar(10);

// function showstar(rows){
//   for (let row =1; row <= rows; row++){
//     let patter="";
//     for(let i=0; i<row; i++)//nested loop
//       patter += "*";
//     console.log( patter);
//   }
// }

//Prime Number
//------------


//prime(number can divide itself and 1 only)
//composite 

//12 = 1,2,3,4,6,12 (we will never get any remainder it will be 0)
//can be devided evenly be its factors

//11 = 1,11 -prime
///13 = 1,13

// showprime(10); //output:2,3,5,7,
// function showprime(limit){
//     for(let num =2; num <= limit; num++)
//         if(isprime(num)) console.log(num) ; 
// }

// function isprime(num){
//     for(let fact = 2; fact < num; fact++)
//         if(num % fact ===0) //(3%2) 1 is output condition false
//             return false;
//     return true;
// }

//Address Object
//---------------

//street
//city
//Zipcode
//showaddres(address)

// let address = {
//     street : "manish",
//     city : "chennai",
//     Zipcode : 600053
// };

// function showaddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// showaddress(address)

//factory and constructer function
//----------------------------------
// let address = {
//     street : "manish",
//     city : "chennai",
//     Zipcode : 600053
// };
//factory function
//--------------------
// function showAddress(street,city,Zipcode){
//     return{
//         street : street,
//         city : city,
//         Zipcode :Zipcode
//     }
// };

// const show= showAddress(street="manish",city="chennai",Zipcode=600053)
// console.log(show)

// //constructer function
// //---------------------
// function ShowAddress(street,city,Zipcode){
//     this.street=street,
//     this.city = city,
//     this.Zipcode = Zipcode
// };

// const show1=new ShowAddress(street="manish",city="chennai",Zipcode=600052)
// console.log(show1)

//Object Equality
//------------------

// function ShowAddress(street,city,Zipcode){
//     this.street=street,
//     this.city = city,
//     this.Zipcode = Zipcode
// };
// const show1=new ShowAddress(street="manish",city="chennai",Zipcode=600052);
// const show2=new ShowAddress(street="manish",city="chennai",Zipcode=600052);
// const show3 =show1;
// function areEqual(show1,show2){
//     return show1.street === show2.street && 
//     show1.city === show2.city && 
//     show1.Zipcode === show2.Zipcode
// };
// function areSame(show1,show2){
//     return show1 === show2;
// };
// console.log(areEqual(show1,show2));
// console.log(areSame(show1,show2));
// console.log(areSame(show1,show3));

//Blog Post Object
//-------------------
// let post={
//     title:'a',
//     body:'b',
//     author:'c',
//     view:10,
//     commend:[{author:'a',body:'b'},
//              {author:'a',body:'b'}
// ],
//     islive: true
// }
// console.log(post)

//constracter function

// function Post(title,body, author){
//     this.title=title;
//     this.body=body;
//     this.author=author;
//     this.view=0;
//     this.commend=[];
//     this.islive=false;
// }
// const show=new Post('A','B','C');
// console.log(show)

//Price Range

// let pricerange=[
//     {label:"$", tooltip:"Inexpensive",minperson:0,maxperson:10},
//     {label:"$$", tooltip:"moderate",minperson:11,maxperson:20},
//     {label:"$$$", tooltip:"expensive",minperson:21,maxperson:30}
    
// ];
// let restarant =[
//     {aveageperperson:5}
// ];

//Array from Range
// const number=arryFromRange(1,4);
// console.log(number); //output will be [1, 2, 3, 4]

// function arryFromRange(min, max){
//     const output=[];
//     for(let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// };


//Include
// const number=[1, 2, 3, 4]; //we have number of element 1 to 4 in thr array
// console.log(include(number,4));// number 4 is searching element 

// function include(array,searchelemnt){
//     for(let element of array)
//         if(element===searchelemnt)
//             return true;
//         return false;
// };


//Except
// const number1=[1, 2, 3, 4];//input array
// console.log(except(number1,[1,3,4]));//calling function with input array
// function except(array,excluded){//function inside passing two array
//     const output=[];//output array can be stored
//     for(let element of array)//for loop can be called each an every element
//         if(!excluded.includes(element))//check the condition if not in side is array it can be true
//             output.push(element);//and tru can be push into output array
//     return output;//and then return output
// };

//Moving an Element
// const number1=[1, 2, 3, 4];
// console.log(move(number1, 0, 1))//array, position of element, moving-step


// function move(array, index, move){
//     const position=index + move;//adding element index and movement 
//     if(position >= array.length || position < 0){//check whether is is greaterthen or lessthen or operater to check the position
//         console.error('Invalide movement'); //greater value print the msg
//         return;//and return the condition
//     }
//     const output=[...array];//spread an array to cloning the original array into output variabel .
//     const element=output.splice(index, 1)[0];//removing in the element [0]return an array
//     output.splice(index + move, 0, element);//and replacing in the position
//     return output;//return an output
// };

//Value Finder

// const number=[1, 2, 3, 4];
// const input= 3;
// ValueFinder(number, input);

// function ValueFinder(array, searchelement){
//     const truver=true;
//     const finde=array.includes(searchelement)
//     if(finde === truver){
//     return console.log(searchelement);
//     }
//     else{
//     return console.error("Number Not Present");
//     };  
// };

//Count Occurrances
// const number=[1, 2, 3, 4, 1];
// const input=1;
// console.log(countOccurrances(number, input));

// function countOccurrances(number, input){
    //traditional way
//     let count=0;
//     for(element of number)
//         if(element === input)
//             count++;
//         return count;
    //using reduce method to get result
    // return number.reduce((accumulator, current)=>{ //take previous value and currrent value 
    //     const occurrance = (current === input) ? 1:0;//check either true or false using Ternary Operators(?)
    //     console.log(accumulator, current, input);//print the value
    //     return accumulator + occurrance; //adding the occurent value and previous value
    // },0)//0 is the initial value of accumulator
// };

//Get max
// const number=[1, 2, 3, 5, 4, 6];

// console.log(maximum(number));

// function maximum(number){
//     if(number.length === 0)
//     return undefined;
// //traditional way
//     // let max= number[0];
//     // for(let i=1; i< number.length; i++)
//     //     if(number[i]>max)
//     //     max= number[i]
//     //     return max;
//     //using reduce method to get result
//     return number.reduce((accumulator,currentvalue) => {
//         const max= (accumulator <= currentvalue);
//         return accumulator + max;
//     },0);
        //easy way implement
//      //return number.reduce((a,b) =>(a>b)? a:b);
// };

//Movies
// const movies=[
//     {title:'a',year:2010,rating:4.5},
//     {title:'b',year:2010,rating:4.7},
//     {title:'c',year:2010,rating:3},
//     {title:'d',year:2012,rating:4.5},
// ];

// const titles=movies
//     .filter(m => m.year === 2010 && m.rating >= 4)
//     .sort((a, b)=> a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)//map can be display the title in the array
// console.log(titles);

