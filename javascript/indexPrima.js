var bilanganprima = [2];
var input = prompt("masukan index dari bilangan prima?");
var number = Number(input);

var indexPrima = function(number){
  var max = number * 10;
//
  for (var i = 2; i < max; i++) {

    for(var j =2; j < i; j++){

      if(i % 2 === 0){
      }else{
        bilanganprima[bilanganprima.length] = i;
      }

    }

  }
//
}

console.log(bilanganprima);

indexPrima(number);

console.log(bilanganprima);
document.write("hallo");

document.getElementById("opening").innerHTML = "<h1>Hello!</h1>";

// var number = [1];
// console.log(number);
//
// for (var i = 0; i < 10; i++) {
//   number[number.length] = i;
// }
// console.log(number);
// console.log(number[7]);
