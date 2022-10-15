const { rejects } = require('assert')
const { resolve } = require('path')
const readline = require('readline')
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const error = () => {
    rline.close()
}

const proses = () => {
    return new Promise((resolve, reject) => {
        rline.question('Berapa Jarak Tempuh Anda ? : ', function(jarak) {
            console.log(`${jarak}`);

            if(jarak <= 2) {
                const harga = 8000
                console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(harga))

                const layanan = 0.045 * harga
                console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(layanan))
            } else {
                const tarif = 5000
                    const harga = 8000
                    
                    const harga2 = harga + (tarif * (jarak - 2))
                    const layanan = 0.045 * harga2
                    console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(harga2))
                    console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(layanan))
            }    
            console.log("\n")
            resolve(true)
        })  
    })
}

const mulai = async() =>{
    let running = true
    while(running) {
        try {
            const data = await proses();
            running = data
        }
        catch(error) {
            console.log("Thankyou!")
            running = false;
        }
    }
}

mulai();
