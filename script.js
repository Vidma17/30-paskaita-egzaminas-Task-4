/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

// su fetch funkcija pasiimu duomenis is api (asinchronine funkcija)
fetch(ENDPOINT)
.then(response => response.json())
.then(cars => {
  carsList(cars);
});

function carsList(cars) {
  let text = "";
  const fruits = cars;
  fruits.forEach(myFunction);
  
  document.getElementById("output").innerHTML = text;
  
  function myFunction(item) {
    text += item.brand + "<br>" + item.models + "<br>" + "<br>";
  }
}

document.getElementById("output").style.backgroundColor = "lightblue";
document.getElementById("output").style.padding = "20px";
document.getElementById("output").style.marginBottom = "100px";
document.getElementById("output").style.position = "relative";
document.getElementById("output").style.top = "40px";
document.getElementById("output").style.borderRadius = "20px";
document.getElementById("output").style.fontWeight = "700";
document.getElementById("output").style.width = "80%";