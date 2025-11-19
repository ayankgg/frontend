const Person=function(name,age){
    this.firstName=name;
    this.age=age;
}
Person.prototype.introduce=function(){
console.log("Hello my name"+this.firstname+"and age is"+this.age+"year old");
}
const person=new Person("Nitin",29);
person.introduce();
console.log(person);
