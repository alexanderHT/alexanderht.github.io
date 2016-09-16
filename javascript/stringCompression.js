var input = prompt("masukan sebuah kalimat?");

var stringCompression = function(input){
  var kalimatAwal = input;
  var array = [];
  var kalimatakhir = "";

  for (var i = 0; i < input.length; i++) {
    array[i] = input[i];
  }
  console.log(array);
  kalimatakhir = array.sort();
  console.log(kalimatakhir);
}

stringCompression(input);
