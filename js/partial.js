// Rejestrujemy kawałka szablonu
Handlebars.registerPartial('listaPracownikow', document.getElementById("tpl2").innerHTML);

// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    informacje: "Informacje o firmie",
    adres: "ul. Kwiatowa 43, 37-599 Świnki",
    telefon: "899 000 000",
    pracownicy: [
        {
            imie: "Marek",
            nazwisko: "Kowalski"
        },
        {
            imie: "Tomasz",
            nazwisko: "Nowak"
        },
        {
            imie: "Joanna",
            nazwisko: "Nowicka"
        }
    ]
};

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na strone
document.getElementById("output").innerHTML = html;