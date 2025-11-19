const arr=[1,2,34,"a",af]


const arr=new Array(8);
console.log(arr);

to add 2 array 
const start=[1,2,3,4];
const end=[4,5,6,7];
const newarr=start.concat(end);
console.log(newarr);

to find index
const start=[1,2,3,4,5,6,7,24,56];
const index=start.indexOf();
console.log(index);
for multiple same value use last.indexOF also

const start=[1,2,3,4,5,6,7,24,56];
const push=start.push();
const pop=start.pop();
const shift=start.shift();
const unshift=start.unshift();
console.log(unshift);

for short
const start=[1,2,90,3,4,5,6,7,24,56];
const short=start.sort((a,b)=>{
    return a-b;// for assending and dess b-a
})
console.log(short);

for twice
const double=[1,2,90,3,4,5,6,7,24,56];
const double=start.map((n)=>n*2);
console.log(double);

//even no
// const double=start.filter((n)=>n%2==0);
// console.log(double);