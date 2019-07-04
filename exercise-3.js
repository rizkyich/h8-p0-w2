// Proxytia Game

var nama = 'Ruby';
var peran = 'Tabib';

if (nama) {
  if (peran) {
    if (peran === 'Ksatria') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    } else if (peran === 'Tabib') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka')
    } else if (peran === 'Penyihir') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }  
  } else {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  }  
} else {
  console.log('Nama harus diisi!');
}

