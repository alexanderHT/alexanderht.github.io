// variable global
var input = prompt("masukan sebuah kalimat?");

var palindromeCont = function(input){
  // variable local
  var awal = input.split(" ");
  var akhir = input.split(" ").sort();

  console.log(awal.join(" "));
  console.log(akhir.join(" "));

  if(awal.length = akhir.length){
    console.log("benar");
  }else{
    console.log("salah");
  }
}

palindromeCont(input);
