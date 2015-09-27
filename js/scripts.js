// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    imie: "Marek",
    nazwisko: "Kowalski",
    wiek: 34,
    szkoly: {
        podstawowa: "Szkoła Podstawowa nr 1 w Nibylandii",
        srednia: "Technikum Budowlane w Ogrodnikach",
        wyzsza: "Akademia Budownictwa w Sośnikowie"
    }
};

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na strone
document.getElementById("output").innerHTML = html;