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

/* Projektit */
function projektit() {

    tlt = "<h3>Projektit</h3><br>";

    /* Video Pokeri */
    vp = "<div id=projectBox class=gradie><h3>Video Pokeri</h3>\
    <p>Video Pokerin esikuvana toimii RAY:n 80 -luvun lopulla kehitetty ensimmäinen video pokerikone. Video Pokeri on toteutettu Pythonilla ja siinä on käytetty KivyMd frameworkia.</p>\
    <a href=# class=projectLink>lue lisää..</a></div>";

    /* MatikkaPeli */
    mp = "<div id=projectBox class=gradie><h3>MatikkaPeli</h3>\
    <p>MatikkaPeli perustuu koulun kurssi tehtävään, jonka pohjalta kehitin puhelin sovelluksen lapseni pyynnöstä. MatikkaPeli on toteutettu myös Pythinilla ja käyttää KivyMd frameworkia.</p>\
    <a href=# class=projectLink>lue lisää..</a></div>";

    document.getElementById("mainPara").innerHTML = tlt + vp + mp;



}

/* Ota yhteyttä */
function ota_yhteytta() {
    tlt = "<h3>Ota Yhteyttä</h3>";

    cont = "<p>Minuun saa yhteyden parhaiten Linkedin kautta:<br><br>\
    <a href=https://linkedin.com/in/jarno-seppanen class=linkedinLinkki target=_blank>Linkedin</a> (Linkki aukeaa uuteen välilehteen)</p>";

    cont2 = "<p>Tai sähköpostitse:<br><br><a href=mailto: class=linkedinLinkki>Lähetä sähköpostia</a>"

    document.getElementById("mainPara").innerHTML = tlt + cont + cont2;
}