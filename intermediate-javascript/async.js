// Callback
// Fungsi yg dipanggil kembali, biasanya diletakan di parameter

/* function calculate(number, cb) {
    let result = number * number
    console.log('calculating')
    cb(result)
}

function logResult(result){
    console.log(result)
}

calculate(5, logResult) */

console.log("mulai mengambil data")

let result = ""

function fetchData(url, callback) {
    setTimeout(() => {
        const data = "ini contoh data"
        result = data
        callback(data)
    }, 1000)
}

function prosesData(data){
    console.log("mengembalikan data :", data)
    console.log("result :", result)
}

fetchData("api.exampleUrl.id", prosesData)

console.log("selesai mengambil data")