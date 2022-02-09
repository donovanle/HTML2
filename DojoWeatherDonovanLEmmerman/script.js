function loading(){
    alert("Loading Weather Report...");
}
function cookieRemover(){
    var toDelete = document.getElementById("cookietime");
    toDelete.remove();
}
function toCalciuss(){
    var todayBlue = document.getElementById("blueT");
    var todayRed = document.getElementById("redT");
    var tommoBlue = document.getElementById("blueTo");
    var tommoRed = document.getElementById("redTo");
    var fridayBlue = document.getElementById("blueF");
    var fridayRed = document.getElementById("redF");
    var saturBlue = document.getElementById("blueS");
    var saturRed = document.getElementById("redS");


    todayBlue.innerText="24°";
    todayRed.innerText="18°";
    tommoBlue.innerText="27°";
    tommoRed.innerText="19°";
    fridayBlue.innerText="21°";
    fridayRed.innerText="16°";
    saturBlue.innerText="26°";
    saturRed.innerText="21°";

}