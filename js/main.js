var datos = {
	"Mexico": "EPN",
	"Estados Unidos": "Trump",
	"Canada": "Justin",
	"Cuba": "Raul"
}

var select_pais = document.getElementById("pais")
var select_presidente = document.getElementById("presidente")

for(item in datos){
	var option_pais = document.createElement("option")
	option_pais.text = item ;
	select_pais.add(option_pais);

	var option_presidente = document.createElement("option")
	option_presidente.text = datos[item];
	select_presidente.add(option_presidente);

}


//pruebas en consola
	//console.log(item);
	//console.log(datos[item]);