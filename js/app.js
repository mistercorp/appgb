$(document).foundation();

var nombre="";

var shopping_metros=0;
var shopping_nombre='Shopping';
var shopping_tipo=1;
var shopping_gris=100;
var shopping_electricidad=20;
var shopping_aa=12;
var shopping_cctv=10;
var shopping_senales=15;
var shopping_ascensores=10;
var shopping_pci=4;
var shopping_obras=2;

var departamentos_metros=0;
var departamentos_nombre='Departamntos';
var departamentos_tipo=1;
var departamentos_gris=500;
var departamentos_electricidad=15;
var departamentos_aa=22;
var departamentos_cctv=15;
var departamentos_senales=20;
var departamentos_ascensores=50;
var departamentos_pci=34;
var departamentos_obras=23;

var estacionamientointerior_metros=0;
var estacionamientointerior_nombre='Estacionamiento Interior';
var estacionamientointerior_tipo=1;
var estacionamientointerior_gris=150;
var estacionamientointerior_electricidad=20;
var estacionamientointerior_aa=15;
var estacionamientointerior_cctv=20;
var estacionamientointerior_senales=25;
var estacionamientointerior_ascensores=40;
var estacionamientointerior_pci=7;
var estacionamientointerior_obras=89;

var estacionamientoexterior_metros=0;
var estacionamientoexterior_nombre='Estacionamiento Exterior';
var estacionamientoexterior_tipo=1;
var estacionamientoexterior_gris=200;
var estacionamientoexterior_electricidad=50;
var estacionamientoexterior_aa=0;
var estacionamientoexterior_cctv=20;
var estacionamientoexterior_senales=25;
var estacionamientoexterior_ascensores=0;
var estacionamientoexterior_pci=45;
var estacionamientoexterior_obras=23;

var oficinas_metros=0;
var oficinas_nombre='Oficinas';
var oficinas_tipo=1;
var oficinas_gris=400;
var oficinas_electricidad=20;
var oficinas_aa=25;
var oficinas_cctv=13;
var oficinas_senales=20;
var oficinas_ascensores=500;
var oficinas_pci=034;
var oficinas_obras=65;

var supermercado_metros=0;
var supermercado_nombre='Supermercado';
var supermercado_tipo=1;
var supermercado_gris=500;
var supermercado_electricidad=250;
var supermercado_aa=120;
var supermercado_cctv=56;
var supermercado_senales=30;
var supermercado_ascensores=300;
var supermercado_pci=250;
var supermercado_obras=30;

var totaldemetros=0;

var total=0;

function siguiente() {
	shopping_metros= Number($('#metros1').val());
	departamentos_metros= Number($('#metros2').val());
	estacionamientointerior_metros= Number($('#metros3').val());
	estacionamientoexterior_metros= Number($('#metros4').val());
	oficinas_metros= Number($('#metros5').val());
	supermercado_metros= Number($('#metros6').val());

	totaldemetros = (shopping_metros+departamentos_metros+estacionamientointerior_metros+estacionamientoexterior_metros+oficinas_metros+supermercado_metros);
	
	if (totaldemetros==0) {
		alert('Por favor ingrese la cantidad de metros cuadrados.');
	} else {
		$('#theform').slideUp();
		$('#theform2').slideDown();
	}
	
}


function calcular () {

	

	if (totaldemetros==0) {
		alert('Por favor ingrese la cantidad de metros cuadrados.');
	} else {
	
	var grisresult= ( (shopping_gris * shopping_metros)+(departamentos_gris * departamentos_metros)+(estacionamientointerior_gris * estacionamientointerior_metros)+(estacionamientoexterior_gris * estacionamientoexterior_metros)+(oficinas_gris * oficinas_metros)+(supermercado_gris * supermercado_metros) );

	if ($('#electricidad').is(":checked")) {
		var electricidadresult= ( (shopping_electricidad * shopping_metros)+(departamentos_electricidad * departamentos_metros)+(estacionamientointerior_electricidad * estacionamientointerior_metros)+(estacionamientoexterior_electricidad * estacionamientoexterior_metros)+(oficinas_electricidad * oficinas_metros)+(supermercado_electricidad * supermercado_metros) );
	} else {
		var electricidadresult=0
}
	if ($('#aa').is(":checked")) {
		var aaresult= ( (shopping_aa * shopping_metros)+(departamentos_aa * departamentos_metros)+(estacionamientointerior_aa * estacionamientointerior_metros)+(estacionamientoexterior_aa * estacionamientoexterior_metros)+(oficinas_aa * oficinas_metros)+(supermercado_aa * supermercado_metros) );
	} else {
		var aaresult=0;
	}

	if ($('#cctv').is(":checked")) {
		var cctvresult= ( (shopping_cctv * shopping_metros)+(departamentos_cctv * departamentos_metros)+(estacionamientointerior_cctv * estacionamientointerior_metros)+(estacionamientoexterior_cctv * estacionamientoexterior_metros)+(oficinas_cctv * oficinas_metros)+(supermercado_cctv * supermercado_metros) );
	} else {
		var cctvresult=0;
	}

	if ($('#senalesdebiles').is(":checked")) {
		var senalesresult= ( (shopping_senales * shopping_metros)+(departamentos_senales * departamentos_metros)+(estacionamientointerior_senales * estacionamientointerior_metros)+(estacionamientoexterior_senales * estacionamientoexterior_metros)+(oficinas_senales * oficinas_metros)+(supermercado_senales * supermercado_metros) );
	} else {
		var senalesresult=0;
	}

	if ($('#ascensores').is(":checked")) {
		var ascensoresresult= ( (shopping_ascensores * shopping_metros)+(departamentos_ascensores * departamentos_metros)+(estacionamientointerior_ascensores * estacionamientointerior_metros)+(estacionamientoexterior_ascensores * estacionamientoexterior_metros)+(oficinas_ascensores * oficinas_metros)+(supermercado_ascensores * supermercado_metros) );
	} else {
		var ascensoresresult=0;
	}

	if ($('#pci').is(":checked")) {
		var pciresult= ( (shopping_pci * shopping_metros)+(departamentos_pci * departamentos_metros)+(estacionamientointerior_pci * estacionamientointerior_metros)+(estacionamientoexterior_pci * estacionamientoexterior_metros)+(oficinas_pci * oficinas_metros)+(supermercado_pci * supermercado_metros) );
	} else {
		var pciresult=0;
	}	
	
	if ($('#obrasexteriores').is(":checked")) {
		var obrasresult= ( (shopping_obras * shopping_metros)+(departamentos_obras * departamentos_metros)+(estacionamientointerior_obras * estacionamientointerior_metros)+(estacionamientoexterior_obras * estacionamientoexterior_metros)+(oficinas_obras * oficinas_metros)+(supermercado_obras * supermercado_metros) );
	} else {
		var obrasresult=0;
	}
	

	var total = grisresult+electricidadresult+aaresult+cctvresult+senalesresult+ascensoresresult+pciresult+obrasresult;

	if (shopping_metros!=0) {
		nombre = nombre + "Shopping "
	}
	if (oficinas_metros!=0) {
		nombre = nombre + "Oficinas "
	}
	if (departamentos_metros!=0) {
		nombre = nombre + "Departamentos "
	}
	if (estacionamientointerior_metros!=0) {
		nombre = nombre + "Estacionamiento Interior "
	}
	if (estacionamientoexterior_metros!=0) {
		nombre = nombre + "Estacionamiento Exterior "
	}
	if (supermercado_metros!=0) {
		nombre = nombre + "Supermercado "
	}

	$('#tipoprint').html(nombre);
	$('#metrosprint').html(totaldemetros);
	$('#cantprecioprint').html(Number(grisresult).toLocaleString());
	$('#electricidadprint').html(Number(electricidadresult).toLocaleString());
	$('#aaprint').html(Number(aaresult).toLocaleString());
	$('#cctvprint').html(Number(cctvresult).toLocaleString());
	$('#senalesprint').html(Number(senalesresult).toLocaleString());
	$('#ascensoresprint').html(Number(ascensoresresult).toLocaleString());
	$('#pciprint').html(Number(pciresult).toLocaleString());
	$('#obrasprint').html(Number(obrasresult).toLocaleString());
	$('#totalprint').html(Number(total).toLocaleString());

	$('#theform').slideUp();
	$('#theform2').slideUp();
	$('#theresult').slideDown();

	}

}

function agblogin () {
	if ($('#paswor').val()=="172osa") {
		$('#login').slideUp();
		$('#theform').slideDown();
	} else {
		alert ("Contraseña incorrecta.");
	}
}


function volver2 () {
	$('#theform2').slideUp();
	$('#theform').slideDown();
	$('#theresult').slideUp();
}

function volver () {
	nombre="";
	$('#theform').slideDown();
	$('#theresult').slideUp();
}