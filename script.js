/* Lisätään teksti kun sivu ladataan */
/* 
window.onload = function () {
    etusivu();
};
*/

/* Lisätään sisältö sivulle */


/* Tausta */
function tausta() {

    tlt = "<h3>Tausta</h3>";

    cont = "<p>Duuniin liittyvä elämänkerta tänne</p>";

    document.getElementById("mainPara").innerHTML = tlt + cont;
}

/* Ota yhteyttä */
function ota_yhteytta() {
    tlt = "<h3>Ota Yhteyttä</h3>";

    cont = "<p>Minuun saa yhteyden parhaiten Linkedin kautta:<br><br>\
    <a href=https://linkedin.com/in/jarno-seppanen class=linkedinLinkki target=_blank>Linkedin</a> (Linkki aukeaa uuteen välilehteen)</p>";

    cont2 = "<p>Tai sähköpostitse:<br><br><a href=mailto: class=linkedinLinkki>Lähetä sähköpostia</a>"

    document.getElementById("mainPara").innerHTML = tlt + cont + cont2;
}