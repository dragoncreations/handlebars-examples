// Własna instrukcja
Handlebars.registerHelper("wielkie", function(dane) {
    return dane.toUpperCase();
});

// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    tresc: "przykładowa treść"
};

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na strone
document.getElementById("output").innerHTML = html;