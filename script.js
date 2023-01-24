/* Lisätään teksti kun sivu ladataan */

window.onload = function () {
    etusivu();
};

function kuka() {
    document.getElementById("mainPara").innerHTML = "<h3>Kuka?</h3><p>Tekstiä!</p>";
}

function etusivu() {
    document.getElementById("mainPara").innerHTML = "<p>Osaan kaikkea ja enemmänkin, jos jaksan</p><p>Ju nou</p>";
}

function projektit() {
    document.getElementById("mainPara").innerHTML = "<h3>Projektit</h3><p>Tekstiä!</p>"
}

function ota_yhteytta() {
    document.getElementById("mainPara").innerHTML = "<h3>Ota Yhteyttä</h3><p>Tekstiä!</p>"
}