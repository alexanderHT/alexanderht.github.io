var input = prompt("masukan sebuah kalimat?").split(" ");

var variasi = function(input){

  var input = input.split("").sort();
  var max = input.length;
  var tampung = "";
  var count = 0;
  var tampung2 = [];
  var variasi = 0;

  // console.log(input);
  // console.log(max);

  for(var i = 0; i < max; i++){

    if(input[i] === input[ i + 1 ]){
      count ++;
    }else if(input[ i + 1 ] === undefined ){
      tampung += input[i] + (count + 1);
    }else if(input[i] != input[ i + 1 ]){
      tampung += input[i] + (count + 1);
      count = 0;
    }
  }

  tampung2 = tampung.split("");
  max = tampung2.length;

  // console.log(tampung);
  // console.log(tampung2);
  // console.log(max);

  for(var j = 0; j < max; j++){
    if(tampung2.indexOf("1") != -1){
      tampung2.splice( (tampung2.indexOf("1") - 1), 2 )
      console.log(tampung2);
    }else{
      break;
    }
  }

  console.log(tampung2);
  variasi = tampung2.length / 2;
  console.log(variasi);
  return variasi;

}


var repeatedLetter = function(input){
  var kalimat = input;
  var countVariasi = [];
  var array = [];
  var max = 0;

  for(var i = 0; i < input.length; i++){
    countVariasi[i] = variasi(input[i]);
  }

  console.log("");

  max = Math.max.apply(Math, countVariasi);

  console.log(countVariasi);
  console.log("max : " + max);
  console.log("index dari max : " + countVariasi.indexOf(max));
  console.log("kata yang palin banyak variasinya adalah : " + kalimat[countVariasi.indexOf(max)]);
}

repeatedLetter(input);

//repeatedLetter(input);

//console.log(kalimat);
//console.log(countVariasi);
