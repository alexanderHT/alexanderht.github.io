var input = Number(prompt("masukan bilangan prima"));
var index = input;
var prima = [2];

var cekBilanganPrima = function(input){
  var x = Number(input);
  var bool;

  if ( x === 2) {
    bool = true;
  }else {
    for (i = 2 ; i < x ; i++){
      if (x % i === 0) {
        bool = false;
        break;
      }else{
        bool = true;
      }
    }
  }
  if (bool) {
    return x;
  }
  else {
    return 0;
  }
}

var indexPrima = function(index){
  var max = input * 10;
  for(var j = 3; j < max; j++){
    if(cekBilanganPrima(j)){
      prima[prima.length] = cekBilanganPrima(j);
    }
  }
}

indexPrima(index);
console.log(prima);
console.log("index ke [ " + index + " ]" + " bilangan primanya adalah : " +  prima[index]);
