// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    autor: "admin",
    tresc: {
        tytul: "Przykładowy tytuł",
        data: "20/07/2012",
        komentarzy: 12,
        wpis: "<strong>Treść wpisu na blogu</strong>"
    }
};

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na strone
document.getElementById("post").innerHTML = html;