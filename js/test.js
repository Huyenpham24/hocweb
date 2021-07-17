//spread operator(...)
//const numbers = [1,2,3]
// console.log(Math.max(...numbers));
//copy number
//c1 ko nen dung
// const copyNumbers = numbers
//c2
// const copyNumbers = [...numbers]
// console.log(copyNumbers);
// const user = {
//     name: "Kevin",
//     age: 20
// }
// const copyUser = {...user, address: "ho chi minh"}
// console.log(copyUser);
//rest operator
// function add(...rest){
// //console.log(rest);
// return rest.reduce((acc,val) => acc + val)
// }
// console.log(1,2);
//in so luong so le
// function fakeFunc(...rest){
//     return rest.reduce((acc,val)=> val%2!==0 ? acc+1 : acc,0)
// }
//reduce, rest operator
// console.log(fakeFunc(1,3,5,10));// 3
// console.log(fakeFunc(2,4,5));
// console.log(fakeFunc(2,4,6,10,100));
//destructuring
// const numbers = [1,2,3]
// const [a,b,c] = numbers //destructuring
// console.log(a);
// console.log(b);
// console.log(c);
// const user = {
//     name: "kenvin",
//     age: 18
// }
// const {blockedName, blockedAge} = user
// console.log(blockedName);
// console.log(blockedAge);

const numbers = [1,2,3,1,4,4,4]
function tanso(...rest){
    return numbers.reduce
}