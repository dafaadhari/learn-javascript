/* var a = 1;
var b = "1";

console.log(typeof(a));
console.log(typeof(b));

if (a === b){
    console.log("yes")
} else{
    console.log("no")
} */

prompt("nama lu");
prompt("nama khodam lu");

var khodamScore = Math.random() * 100;
khodamScore = Math.floor(khodamScore) + 1;

if (khodamScore > 70) {
    alert("khodam lu : " + khodamScore + " % ganas bang (emot api)")
}

if (khodamScore > 30 && khodamScore <= 70) {
    alert("khodam lu : " + khodamScore + " % not bad lah (emot batu)")
}

if (khodamScore <= 30) {
    alert("khodam lu : " + khodamScore + " % doang cupu lah njeng")
}