// varibale global
var nyawa = 5;
var ronde = 1;

// function global
// function komputer untuk menghasilkan angka acak dari 1 sampai 10
var komputer = function(){
    var pilih = Math.random().toFixed(1);
    switch (pilih) {
      case '0.0': return 10; break;
      case '0.1': return 1; break;
      case '0.2': return 2; break;
      case '0.3': return 3; break;
      case '0.4': return 4; break;
      case '0.5': return 5; break;
      case '0.6': return 6; break;
      case '0.7': return 7; break;
      case '0.8': return 8; break;
      case '0.9': return 9; break;
      default: return 10; break;
    }
}

// program tebak
do{
  var pilihanPengguna = Number(prompt("Masukan angka tebakan?"));
  var pilihanKomputer = komputer();

  console.log("====== RONDE " + ronde + " ======");
  console.log("pilihan Pengguna : " + pilihanPengguna);
  console.log("pilihan Komputer : " + pilihanKomputer);

  if(pilihanPengguna === pilihanKomputer){
    console.log("Selamat Atas Kemenanganmu!");
    nyawa = 0;
  }else{
    if (pilihanPengguna > pilihanKomputer) {
      console.log("angka mu lebih besar");
    }else{
      console.log("angka mu lebih kecil");
    }
    ronde++;
    nyawa--;
    if (nyawa === 0) {
      console.log("Coba Lagi!");
    }
  }
}while(nyawa);
