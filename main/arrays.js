// Array methods
// 1.concat()

// var a=[1,2,3,4]
// var b=[10,20,30,40]
// var c=['a','b','c']
// console.log(a.concat(b,c))

// 2.every(callback(currentValue),thisArg)

// var numbers=[1,2,3,4,5,6,7,8,9]
// function checkOddNumbers(number)
// {
//     if(number%2!=0)
//     {
//         return number;
//     }
  
// }
// var result=numbers.every(checkOddNumbers)
// console.log(result)





// 3.some(callback(currentValue),thisArg)



// var numbers=[1,23,3,49,5,67,7,8,9];
// function checkEven(number)
// {
//     if(number%2==0)
//     {
//         return number
       
//     }
// }
// var result=numbers.some(checkEven)
// console.log(result)


// 4.fill(value,start,end)

// var arr=["javascript","java","python","react"]
// var res=arr.fill("nodeJs")
// console.log(res)
// console.log(arr)

// var arr=["javascript","java","python","react","php","nodejs","angular"]
// arr.fill('c',2,4)
// console.log(arr)


// 5.filter(callback(element))


// var numbers=[10,40,5,20,60,3,6]
// function greaterNumber(number){
//     if(number>10){
//         return number
//     }
// }

// var result=numbers.filter(greaterNumber)
// console.log(result)




// 6.find()

// var numbers=[0,2,5,20,60,3,6];
// function greaterNumber(number){
//     if(number>10){
//         return  number
//     }
// }

// var result=numbers.find(greaterNumber);
// console.log(result)


// 7.foreach()

// var numbers=[1,2,3,4,5]
// function multiply(number)
// {
//    console.log(number*3)
// }
// numbers.forEach(multiply)


// 8.includes(value,fromIndex)

// var arr=[1,2,3,4,5,3]
// console.log(arr.includes(3,3))

// 9.indexOf(value,fromIndex)

// var arr=['a','b','c','d','e','f','d']
// console.log(arr.indexOf('d',4))


// 10.join()

// var arr=["welcome to javascript"]
// var res=arr.join(" ")
// console.log(res)
// console.log(typeof res)

// 11.length

// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr.length)

// var arr=[23,45,67,8957,4748,3,3,5,9,87,1]
// var largeNumber=0;
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>=largeNumber)
//     {
//         largeNumber=arr[i]
       
        
//     }
    
// }
// console.log(largeNumber)

// 12.push(values)

// var arr=[1,2,3,4]
// var res=arr.push(10,20,30,40)
// console.log(res)
// console.log(arr)

// 13.pop

// var arr=[1,2,3,4,50]
// var res=arr.pop()
// console.log(res)
// console.log(arr)

// 14.unshift


// var arr=[1,2,3,4,5]
// var res=arr.unshift(100)
// console.log(res)
// console.log(arr)

// 15.shift

// var arr=[1,2,3,4,5]
// var res=arr.shift()
// console.log(res)
// console.log(arr)


// 16.tostring()

// var arr=["java","python","js","react"]
// console.log(arr.toString(","))


//17.slice(start,end)

// var arr=[10,20,30,40,50,60,70]

// console.log(arr.slice(1,5))

// 18.splice(start,deleteCount,newItems)

// var arr=[10,20,30,40,50,60,70]
// var res=arr.splice(1,2,500,600)
// console.log(res)
// console.log(arr)

// 19.reverse()

// var arr=[1,2,3,4,5]
// console.log(arr.reverse())
// console.log(arr)


// var arr=['java','python','c','js','C++']
// console.log(arr.reverse())
// console.log(arr)


// 20.sort()

// var arr=[3,5,7,8,9,1,2,6,4,100]
// console.log(arr.sort())


// var arr=['c','a','d','b','az','ah']
// console.log(arr.sort())


// 21.keys()

// var arr=[10,20,30,40,50]
// var res=arr.keys()
// for(let i of res)
// {
//     console.log(i)
// }


// 22.values()

// var arr=[10,20,30,40,50]
// var res=arr.values()
// for(let i of res)
// {
//     console.log(i)
// }



// var arr=[10,20,30,40,50]
// var res=arr.entries()
// for(let i of res)
// {
//     console.log(i)
// }

// var arr=[1,2,3,4,5]
// for(var i of arr)
// {
//     console.log(i)
// }


// var arr=[10,20,30,40,50];
// var max=null;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max)
//     {
//         max=arr[i]
//     }
// }
// console.log(max)





var a=["kiran",20,"bangalore","laptop",100,"chennai"]
console.log(a.join(""))


