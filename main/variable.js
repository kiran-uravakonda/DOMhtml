// var b="global scope"
// function outer(){
//     let b="outer function";
//     function inner(){
//         var b="inner function"
//         console.log(b)
//     }
//     console.log(b)
//     return inner()

// }
// console.log(b)

// outer()




// function outer(){
//     // let a="outer function";

//     function inner(){
//         let a="inner function"
//         console.log(a)
//     }
//     // console.log(a)
//      inner()

// }


// outer()



// var a=10;
// function add(){
//     var b=10;
//     console.log(b)
// }
// add()
// console.log(a)


// let a;
// console.log(a)
// a=10
// console.log(a)

// var b=20;
// function a()
// {
//     var b=10
//     c()
//     function c()
//     {
//         // var b=5
//         console.log(b)
//     }


// }

// a()



// var x=1;

// a()
// b()
// console.log(x)

// function a(){
//     var x=10;
//     console.log(x)
// }
// function b(){
//     var x=100;
//     console.log(x)
// }



// var a=10;
// alert("the value is",a)


// var a = 10;
// var b = 20;
// alert("the value is", a + b);


// let a=10;
// var b=20;
// console.log(b)
// console.log(a)


// function add()
// {
//     console.log("kiran");

// }
// console.log(add())




// var a=undefined;

// console.log(a)
// a=10;
// console.log(a)


// {
//     var a=10;
//     let b=20;
//     const c=30;
// }



// var a=10;
// console.log(a)

// function add(){
//     var surName="kiran"
//     console.log(surName)
// }
// add()


// let c=100

// {
//   var a=10;
//   let b=20;
//   const c=30; 
//   console.log(a)
//   console.log(b)
//   console.log(c) 
// }

// console.log(a)
// // console.log(b)
// console.log(c)





// var a=100
// function add(){
//     let a=10;
//     console.log(a)
// }
// add()
// console.log(a)




// 1. Write a JavaScript program that displays the largest integer among two integers.


// let value1=70;
// let value2=70;
// if(value1>value2)
// {
//     console.log("the largest number is:",value1)
// }
// else if(value1===value2){
//     console.log(`both ${value1} and ${value2} numbers are equal`)

// }
// else{
//     console.log("the largest number is:",value2)
// }





// 2.Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//             Sample numbers : 3, -7, 2
//             Output : The sign is -


let a=3;
let b=-7;
let c=2;

let result=a*b*c;

if(result>=0)
{
    alert("the result is +")
}
else
{
    alert("the result is -")
}




// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//             Sample numbers : 0, -1, 4
//             Output : 4, 0, -1


// let a=0;
// let b=-1;
// let c=4;
// alert(`before values ${a},${b},${c}`)
// let sort;
//  sort=a;
//  a=c;
//  c=b;
//  b=sort;

//  alert(`after values ${a},${b},${c}`)

 









// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
//             Sample numbers : -5, -2, -6, 0, -1



// let num1 = -5;
// let num2 = -2;
// let num3 = -6;
// let num4 = 0;
// let num5 = -1;


// if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
// {
//     alert(`the largest number is ${num1}`)
// }
// else if(num2>num3 && num2>num4 && num2>num5){
//     alert(`the largest number is ${num2}`)
// }
// else if(num3>num4 && num3>num5){
//     alert(`the largest number is ${num3}`)
// }
// else if( num4>num5){
//     alert(`the largest number is ${num4}`)
// }
// else {
//     alert(`the largest number is ${num5}`)
// }

//       (or)
// let result=(num1>num2 && num1>num3 && num1>num4 && num1>num5)?alert(`the largest number is ${num1}`):(num2>num3 && num2>num4 && num2>num5 )? alert(`the largest number is ${num2}`):(num3>num4 && num3>num5)?alert(`the largest number is ${num3}`):( num4>num5)?alert(`the largest number is ${num4}`):alert(`the largest number is ${num5}`)




// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
//             Sample Output :
//             "0 is even"
//             "1 is odd"
//             "2 is even


// let number=15;
// for(var start=0; number>=start;start++)
// {
//    if(start%2==0){
//     console.log(start,"is even")
//    }
//    else
//    {
//     console.log(start,"is odd")
//    }
// }




// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
//             Student Name	Marks
//             David	80
//             Vinoth	77
//             Divya	88
//             Ishitha	95
//             Thomas	68
//             The grades are computed as follows :
//             Range	Grade
//             <60     :F
//             <70	    :D
//             <80	    :C
//             <90	    :B
//             <100    :A


// let david=80;
// let vinoth=77;
// let divya=88;
// let ishitha=95;
// let thomas=68;

// let average=(david+vinoth+divya+ishitha+thomas)/5

// console.log(average)


// if(average<=100 && average>90 ){
//     console.log("the grade is A")
// }
// else if(average<=90 && average>80)
// {
//     console.log("the grade is B")
// }

// else if(average<=80 && average>70)
// {
//     console.log("the grade is C")
// }


// else if(average<=70 && average>60)
// {
//     console.log("the grade is D")
// }


// else{
//     console.log("the grade is F")
// }





// 7. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
// For example, 371 is an Armstrong number since 3*3 + 73 + 1*3 = 371.


// var number=371;
// var sum=0
// while(number>0){
//     var res=number%10;
//     var multiply=res*res*res
//     var sum=sum+multiply
   
//     number=Math.floor(number/10)
    

// }
// console.log(sum)




// 8. Write a JavaScript program to construct the following pattern, using a nested for loop.
//             *  
//             * *  
//             * * *  
//             * * * *  
//             * * * * * 


// for(var i=0;i<5;i++)
// {
//     for(var j=0;j<=i;j++)
//     {
      
//         console.log("*")
        
        
//     }
    
//     console.log("\n")
    
// }







// 9.Write a JavaScript program to sum 3 and 5 multiples under 1000.


// var number=1000;
// var sum=0
// for(var start=0; start<=number;start++)
// {
    
//     if(start%4==0 || start%3==0)
//     {
        
//            sum=sum+start;
//     }
    
   
// }
// console.log(sum)






