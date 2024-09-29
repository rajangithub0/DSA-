let myname1: string = "Rajan";

let strArry = myname1.split('');
console.log(strArry); //['r','a','j','a','n']

strArry[2] = "z"; //chnage the element
myname1 = strArry.join(); //join the  all string into one string
console.log(myname1); //change the element and output is "razan"
// console.log(myname[myname.length - 1]); //accessing the last element in string

