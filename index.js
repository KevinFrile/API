let paises;

document.getElementById("paises").addEventListener("change", function(event){
    console.log(event.target.value)

    informacionPais(event.target.value);
})

 fetch("https://restcountries.eu/rest/v2/all")
 .then(res => res.json())
 .then(data => initialize(data))
 .catch(err => console.log("error" + err));

 function initialize(paisesData){

    paises = paisesData;

    let options = "";
    for (let i = 0; i < paises.length; i++) {
       options += "<option value="+ paises[i].name +">"+ paises[i].name +"</option>";
    }

    document.getElementById("paises"). innerHTML = options;
    informacionPais("Afghanistan");

 }

 function informacionPais(ValuePais){

    const paisesData = paises.find(paises => paises.name === ValuePais);
    console.log(paisesData)

    document.getElementById("bandera").src = paisesData.flag;
    document.getElementById("bandera").alt = paisesData.flag;

    document.getElementById("name").innerHTML = paisesData.name;
    document.getElementById("iso2").innerHTML = paisesData.alpha2Code;
    document.getElementById("iso3").innerHTML = paisesData.alpha3Code;
    
 }

 