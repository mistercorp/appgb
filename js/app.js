$(document).foundation();



var metros=0;
var nombre='';
var tipo=1;
var gris=0;
var electricidad=0;
var aa=0;
var cctv=0;
var senales=0;
var ascensores=0;
var pci=0;
var obras=0;
var total=0;


function calcular () {

	metros= $('#metros').val();

	tipo = $('#tipo').val();

	if (metros==0) {
		alert('Por favor ingrese la cantidad de metros cuadrados.');
	} else {



	if (tipo==1) {
		var nombre="Shopping";
		var gris=100;
		var electricidad=20;
		var aa=12;
		var cctv=10;
		var senales=15;
		var ascensores=10;
		var pci=4;
		var obras=3;
	} else if (tipo==2) {
		var nombre="Departamentos";
		var gris=500;
		var electricidad=15;
		var aa=22;
		var cctv=15;
		var senales=20;
		var ascensores=50;
		var pci=34;
		var obras=23;
	} else if (tipo==3) {
		var nombre="Estacionamiento Interior";
		var gris=150;
		var electricidad=20;
		var aa=15;
		var cctv=20;
		var senales=25;
		var ascensores=40;
		var pci=7;
		var obras=89;
	} else if (tipo==4) {
		var nombre="Estacionamiento Exterior";
		var gris=200;
		var electricidad=50;
		var aa=35;
		var cctv=20;
		var senales=25;
		var ascensores=30;
		var pci=45;
		var obras=23;
	} else if (tipo==5) {
		var nombre = "Oficinas";
		var gris=400;
		var electricidad=20;
		var aa=25;
		var cctv=13;
		var senales=20;
		var ascensores=500;
		var pci=34;
		var obras=65;
	}

	

	
	var grisresult= gris * metros;

	if ($('#electricidad').is(":checked")) {
		var electricidadresult= electricidad * metros;
	} else {
		var electricidadresult=0;
	}

	if ($('#aa').is(":checked")) {
		var aaresult= aa * metros;
	} else {
		var aaresult=0;
	}

	if ($('#cctv').is(":checked")) {
		var cctvresult= cctv * metros;
	} else {
		var cctvresult=0;
	}

	if ($('#senalesdebiles').is(":checked")) {
		var senalesresult= senales * metros;
	} else {
		var senalesresult=0;
	}

	if ($('#ascensores').is(":checked")) {
		var ascensoresresult= ascensores * metros;
	} else {
		var ascensoresresult=0;
	}

	if ($('#pci').is(":checked")) {
		var pciresult= pci * metros;
	} else {
		var pciresult=0;
	}	
	
	if ($('#obrasexteriores').is(":checked")) {
		var obrasresult= obras * metros;
	} else {
		var obrasresult=0;
	}
	

	var total = grisresult+electricidadresult+aaresult+cctvresult+senalesresult+ascensoresresult+pciresult+obrasresult;

	$('#tipoprint').html(nombre);
	$('#metrosprint').html(metros);
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
	$('#theresult').slideDown();

	}

}

function volver () {
	metros=0;
	nombre='';
	tipo=1;
	gris=0;
	electricidad=0;
	aa=0;
	cctv=0;
	senales=0;
	ascensores=0;
	pci=0;
	obras=0;
	total=0;

	$('#tipoprint').html('');
	$('#metrosprint').html('0');
	$('#cantprecioprint').html('0');;
	$('#electricidadprint').html('0');
	$('#aaprint').html('0');
	$('#cctvprint').html('0');
	$('#senalesprint').html('0');
	$('#ascensoresprint').html('0');
	$('#pciprint').html('0');
	$('#obrasprint').html('0');
	$('#totalprint').html('0');

	$('#metros').val('');
	$('#theform').slideDown();
	$('#theresult').slideUp();
}