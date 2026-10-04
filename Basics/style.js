// alert("");

// ARRAY:
var arr = [1, 2, 3, 4, 12];
// we can keep  anything in array 
// foreach map filter find indexof

/* arr.forEach(function (value) {
  console.log(value + 10);
}       );
*/

/* var newarr = arr.map(function (value) {
  return value + 10;
});

console.log(arr);
console.log(newarr);
*/

/*var kal = arr.filter(function (value) {
  return value >= 2;
})
console.log(kal);
*/

/*var aaj = arr.find(function(value){
    return value > 4;
})
console.log(aaj);  */

/* arr.indexof(4);  */

// OBJECTS:     
/* var obj = {
    name: "afshaan",
    age: 20,
    salam: 1
}
Object.freeze(obj); // freeze object    
   */
    
//function myfun(a,b,c,d){}

async function myfun(){ 
   var blob = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   var ans = await blob.json();

    console.log(ans.results[0].userId);
}
myfun();
