var input = prompt("masukan kalimat palindrome?");

var palindrome = function(input){
  var kataAwal = [input];
  var kalimat = [];
  console.log(kataAwal);
  console.log(input.length);
  for(var i = 0; i < (input.length ); i++ ){
    for(var j = (input.length ); j > 0; j-- ){
      kalimat[j] = input[i];
    }
  }

  console.log(kalimat);
}

palindrome(input);
