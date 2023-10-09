// string methods

// 1.chatAt

// var a="javascript"
// console.log(a[2])
// console.log(a.charAt(2))


// 2.concat

// var a="html"
// var b="css"
// var d="javascript"
// var x="react"
// var c=a.concat(b,d,x)
// console.log(c)


// 3.replace

// var a="kiran";
// var b=a.replace("kiran","hello")
// console.log(b)

// 4.includes

// var a="kiran ura"
// console.log(a.endsWith('kiran',5)) =>true

// var a="kiran"
// console.log(a.endsWith(n)) =>true


// var a="kiran"
// console.log(a.endsWith(i)) =>false


// 5.includes()


// var a="kiran"
// console.log(a.includes('z'))


// 6.indexOf 

// var a="javascript";
// console.log(a.indexOf('s'))


// var a="javascripts";
// var val='sa'
// var res=a.indexOf(val)
// console.log(val.length)



// function occurenceValue(string,value)
// {
//    var arr=[];
//    var currentIndex=string.indexOf(value)
//   while(currentIndex!=-1)
//   {
//     arr.push(currentIndex);
//     currentIndex=string.indexOf(value,currentIndex+value.length)
//   }
//   return arr
// }

// var str="javascript tutorial"
// var result1=occurenceValue(str,'a')
// console.log(result1)



// 7.repeat(number)

// var str="kiran!"
// console.log(str.repeat(0))
// console.log(str.repeat(3))

// 8.replace()

// var str="java is a very powerful language in the world is java "
// console.log(str.replace(/java/g,"javascript"))


// 9.substring(startIndex,endIndex)

// var str="java is a very powerful language in the world is java ";
// console.log(str.substring(0,3))



// 10.trim()

// var str="      hello         world       ";
// console.log(str.trim())


// 11.slice(startIndex,lastIndex)

// var str="javascript";

// console.log(str.slice(-5,-2))
// console.log(str)


// 12.split()

// var str="ABCD. wxyz."
// console.log(str.split("."))



// var originalString="kiran"
// var value=originalString.split("")
// console.log(value)
// var arr=value.reverse()
// var result=arr.join("")
// console.log(result)


// var str="welcome to javascript"

// for(var i=0;i<str.length;i++)
// {
//     console.log(str[i])
// }




// var a=parseInt("123")
// console.log(a)
// console.log(typeof a)

var a=37;
var b=10;
console.log(parseInt(a/b))