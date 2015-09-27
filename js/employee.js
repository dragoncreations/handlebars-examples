// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    pracownicy: [
        {
            imie: "Marek",
            nazwisko: "Kowalski",
            telefon: {
                numer: "600 600 600",
                zastrzezony: false
            },
            wiek: 34,
            urlop: 0
        },
        {
            imie: "Tomasz",
            nazwisko: "Nowak",
            telefon: {
                numer: "600 500 400",
                zastrzezony: true
            },
            wiek: 30,
            urlop: 12
        },
        {
            imie: "Joanna",
            nazwisko: "Nowicka",
            telefon: {
                numer: "400 500 600",
                zastrzezony: false
            },
            wiek: 27,
            urlop: 24
        }
    ]
};

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na strone
document.getElementById("output").innerHTML = html;