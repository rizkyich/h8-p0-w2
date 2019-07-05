var tanggal = 31;
var bulan = 6;
var tahun = 2201;

var batasTanggal = tanggal >= 1 && tanggal <= 31;
var batasTahun = tahun >= 1900 && tahun <= 2200;

var kodeTanggal = '';
var kodeBulan = '';
var kodeTahun = '';


switch (batasTanggal) {
  case true:
    kodeTanggal = tanggal;
    
    break;
  default:
    console.log('Tanggal tidak tersedia');
}


switch (batasTahun) {
  case true:
    kodeTahun = tahun;
    break;
  default:
    console.log('Tahun tidak tersedia');
}


switch (bulan) {
  case 1:
    kodeBulan = ' Januari '    
    break;
  case 2:
    kodeBulan = ' Februari '
    break;
  case 3:
    kodeBulan = ' Maret '
    break;
  case 4:
    kodeBulan = ' April '  
    break;
  case 5:
    kodeBulan = ' Mei ';
    break;
  case 6:
    kodeBulan = ' Juni ';  
    break;
  case 7:
    kodeBulan = ' Juli '; 
    break;
  case 8:
    kodeBulan = ' Agustus ';    
    break;
  case 9:
    kodeBulan = ' September ';
    break;
  case 10:
    kodeBulan = ' Oktober ';    
    break;
  case 11:
    kodeBulan = ' November ';
    break;
  case 12:
    kodeBulan = ' Desember ';
    break;
  default:
    console.log('Bulan tidak tersedia');
}


console.log(kodeTanggal + kodeBulan + kodeTahun);