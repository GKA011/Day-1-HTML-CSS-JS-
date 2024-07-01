console.log( "HI WELCOME" );
var a=8;
{
    var a=23;
}
console.log(a);
let g=23;
{
    let g=24;
    console.log(g);
}
console.log(typeof(a));
var c="hi all";
var b ;
var u=true;
console.log(typeof(c));
console.log(typeof(b));
console.log(typeof(u));
//Javascript objects
let person={
    name:'Gouri',
    age:21,
    location:'TVM'


}
console.log(person.name);
let arr=['Heera','Jai',10]
console.log(arr[2]);
console.log(arr.length)
let arr_obj=[{age:23,location:'TVM'},{age:55,location:'Kochi'}]
console.log(arr_obj[1].location);
function add(a,b){
    var sum=a+b;
   
    return sum
}
c=add(10,20);
console.log(c);

var  x=1;
var y= a++;
console.log(x);
console.log(y);
var a1=99;
var a2=45;
if (a1>a2){
    console.log('a1 is grater');
}
else{
    console.log('a2 is grater');
}    
var arr2=[10,20,30,40,50]
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
for(const i in arr2){
    console.log(i);
}
for(const i of arr2){
    console.log(i);
}