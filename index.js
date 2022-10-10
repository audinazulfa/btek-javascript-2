const readline = require('readline')
const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var recursiveAsyncReadLine = function () {
  rline.question('Berapa Jarak Tempuh? : ', function(jarak) {
    console.log(`${jarak}`);
    
    rline.question('Apakah ingin diulang? ', function(recursiveAsyncReadLine) {
      console.log(`${recursiveAsyncReadLine}`);
    if(jarak <= 2) {
      const harga = 8000;
      console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(harga))
     
      const layanan = 0.045 * (harga)
      console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(layanan))
    }
    else {
      while(jarak >= 2) {
        const tarif = 5000
        const harga = 8000

        const harga2 = harga + (tarif*(jarak-2))
    
        const layanan = 0.045 * harga2
        
        jarak++;
      }
      console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(harga2))
      console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(layanan))
    }
    recursiveAsyncReadLine();
    rline.question('Apakah ingin diulang? ', function(recursiveAsyncReadLine) {
      if (answer.toLowerCase() == 'n') {
        rline.close()
      } else {
        question()
      }
  });
    });
  });
};

rline.on('close', function() {
  console.log('\nBye!');
  process.exit(0);
})
