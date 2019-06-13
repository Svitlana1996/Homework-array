var arr = [1, 2, 3, 4, 5];

function square (a) {
return a * a;
}
function map (fn, arr) {
  var result = [];
  for(var i = 0; i < arr.length; ++i){
     result.push(fn(arr[i]))
  }      
  return result;
  }
console.log(map(square, [1, 2, 3, 4, 5]));