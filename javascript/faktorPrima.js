var input = Number(prompt("masukan angka"));
var output = [];

var faktor_prima = function(input){
  var pangkat = 1;
  // looping untuk memasukan faktor bilangan prima kedalam varibale output
  for(var i = 2; i <= input; i++){
    while(input % i === 0 ){
      input = input / i;
      output[output.length] = i;
    }
  }

  // print hasil bilangan faktor prima ( variable output )
  console.log(output);

  // looping untuk menghitung pangkat
  for(var j = 0; j < output.length; j++){
    if(output[j] === output[j+1]){
      pangkat ++;
    }else{
      console.log(output[j] + " pangkat : " + pangkat);
      pangkat = 1;
    }
  }

}

// panggil fungsi faktor_prima
faktor_prima(input);
