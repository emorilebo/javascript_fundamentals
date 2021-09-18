age=23

document.getElementById('someText').innerHTML=age

//Functions 

function fun(n){
    console.log("Hello " + n)
}
// var nam = prompt("Emter your name:")
// fun(nam);

// var num = 0;
// while (num<100){
//     num++;
//     console.log(num)
// }

for(let i=0; i<100; i++){
    console.log(i)
}

let fruits = ['banana', 'apples']

let  emptyArray = new Array();
for(let i=1; i<=10; i++) {
    emptyArray.push(i);
}
console.log(emptyArray);