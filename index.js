const readline = require('readline')
const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rline.question('Berapa Jarak Tempuh? : ', function(jarak) {
    console.log(`${jarak}`);

    if(jarak <= 2) {
      const harga = 8000;
      console.log("Total Ongkos Kirim : " + harga)
     
      const layanan = 0.045 * (harga)
      console.log("Biaya Layanan : " + layanan)
    }
    else {
      while(jarak >= 2) {
        const tarif = 5000
        const harga = 8000

        const harga2 = harga + (tarif*(jarak-2))
        console.log("Total Ongkos Kirim : " + harga2)

        const layanan = 0.045 * harga2
        console.log("Biaya Layanan : " + layanan)
        jarak++;
        break;
      }
    }
    rline.close();
  });

rline.on('close', function() {
  console.log('\nBye!');
  process.exit(0);
})
