/* Lisätään teksti kun sivu ladataan */

window.onload = function () {
    etusivu();
};

/* Lisätään sisältö sivulle */

function etusivu() {
    document.getElementById("mainPara").innerHTML = "<p>Osaan kaikkea ja enemmänkin, jos jaksan</p><p>Ju nou</p>";
}

function kuka() {

    tlt = "<h3>Kuka?</h3>";

    cont = "<p>Duuniin liittyvä elämänkerta tänne</p>";

    document.getElementById("mainPara").innerHTML = tlt + cont;
}

function projektit() {

    tlt = "<h3>Projektit</h3><br>";

    vp = "<div id=projectBox class=gradie><h3>Video Pokeri</h3>\
    <p>Video Pokerin esikuvana toimii RAY:n 80 -luvun lopulla kehitetty ensimmäinen video pokerikone. Video Pokeri on toteutettu Pythonilla ja siinä on käytetty KivyMd frameworkia.</p>\
    <a href=# class=projectLink>lue lisää..</a></div>";

    mp = "<div id=projectBox class=gradie><h3>MatikkaPeli</h3>\
    <p>MatikkaPeli perustuu koulun kurssi tehtävään, jonka pohjalta kehitin puhelin appsin lapseni pyynnöstä. MatikkaPeli on toteutettu myös Pythinilla ja käyttää KivyMd frameworkia.</p>\
    <a href=# class=projectLink>lue lisää..</a></div>";

    document.getElementById("mainPara").innerHTML = tlt + vp + mp;



}

function ota_yhteytta() {
    tlt = "<h3>Ota Yhteyttä</h3>";

    cont = "<p>Minuun saa yhteyden parhaiten Linkedin kautta:<br>\
    <a href=https://linkedin.com/in/jarno-seppanen class=linkedinLinkki target=_blank>Linkedin</a> (Linkki aukeaa uuteen välilehteen)</p>";

    document.getElementById("mainPara").innerHTML = tlt + cont;
}