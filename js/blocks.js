Handlebars.registerHelper("lista", function (dane, opcje){
    
    var output = "<ul class='" + opcje.hash["class"] + "'>";
    
    for(var i = 0; i < dane.length; i++){
        output += "<li>" + opcje.fn(dane[i]) + "</li>";
    }
    
    output += "</ul>";
    
    return output;
});

// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
    osoby: [
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