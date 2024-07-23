function isLeapYear(year) {
    // Tahun kabisat adalah tahun yang habis dibagi 4
    // Kecuali tahun yang habis dibagi 100, tapi tidak habis dibagi 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
    // Contoh penggunaan
    const year = 2023;
    if (isLeapYear(year)) {
        console.log(year + " adalah tahun kabisat.");
    } else {
        console.log(year + " bukan tahun kabisat.");
}