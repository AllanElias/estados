var estados = {
'México': [
'Aguascalientes', 'Baja California', 'Baja California Sur',
'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima',
'Distrito Federal', 'Durango', 'Estado de México',
'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán',
'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla',
'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz',
'Yucatán', 'Zacatecas'],

'Estados Unidos': [
'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
'Carolina del Norte', 'Carolina del Sur', 'Colorado',
'Connecticut', 'Dakota del Norte', 'Dakota del Sur',
'Delaware', 'Florida', 'Georgia', 'Hawái', 'Idaho', 'Illinois',
'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Luisiana', 'Maine',
'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
'Misisipi', 'Misuri', 'Montana', 'Nebraska', 'Nevada',
'Nueva Jersey', 'Nueva York', 'Nuevo Hamoshire',
'Nuevo México', 'Ohio', 'Oklahoma', 'Oregón', 'Pensilvania',
'Rhode Island', 'Tennessee', 'Texas', 'Utah', 'Vermont',
'Virginia', 'Virginia Occidental', 'Washington', 'Wisconsin',
'Wyoming'],

'Alemania': [
'Baden-Wurtemberg', 'Baja Sajonia', 'Baviera', 'Berlín',
'Brandeburgo', 'Bremen', 'Hamburgo', 'Hesse',
'Mecklemburgo-Pomerania Occidental',
'Renania del Norte-Westfalia', 'Renania-Palatinado', 'Sajonia',
'Sajonia-Anhalt', 'Sarre', 'Schleswig-Holstein', 'Turingia'],
}

var select_pais = document.getElementById("pais")

var select_estado = document.getElementById("estados")

for(item in estados){

	var option_pais = document.createElement("option")
	option_pais.text = item ;
	select_pais.add(option_pais);


	var option_estado = document.createElement("option")
	option_estado.text = estados[item] ;
	select_estado.add(option_estado);

}




function get_estado(){
	if (option_pais == México) {

		for ([item] in estados){

		}
		
	}


/*
	for(item in estados){
		if (pais == México) 

		else{

		}
	}

}*/
