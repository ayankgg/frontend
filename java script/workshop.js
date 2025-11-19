let nam="a";
let nam="d";
console.log(nam);


const odd=num =>(num%2===0)?true:false;
console.log(odd(2))

const greet=name =>("Hello" +name+ "I");
const add=(num1,num2)=>(num1+num2);
const iseven=num =>(num%2===0);
console.log(iseven(2));
console.log(add(2,2));
console.log(greet("mayank"));

const name="mayank";
const age=21;
console.log(`Hello my name is ${name} and i am ${age}`);

const user="mayank";
const point=21;
console.log(`Hey ${user} you have ${point} points`);

const person={
    firstName: "Mayank",
    lastName: "Garg",
    age:19,
    introduce:function(){
        console.log(`Hi my name is ${this.firstName} ${this.lastName} and age is ${2025-this.age}`);
    },
};
const hisAges="age";
console.log(person.[hisAges]);/// error
console.log(person.firstName);
console.log(person.lastName);
person.introduce();
person.birthYear=2025-person.age;
console.log(``)

const person = {
    name:"Mayank",
    age : 20,

}
person.intro=function(){
    console.log(`Hi my name is ${this.name} and i was born in ${2025-this.age}.`);
}

person.intro();

const num=[1,2,3,4,5,6,7,8,9];
const num=[1];
const [firstnum,secnum]=num;
console.log(firstnum,secnum);


let count=10;
const timer=setInterval(()=>{
    console.log("Hello" + count);
    count--;
    if (count <1) clearInterval(timer);
},1000);