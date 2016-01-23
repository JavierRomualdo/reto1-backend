// JavaScript Document
var express = require('express');
var faker = require('faker');
var _ = require('lodash');
var app = express();

app.get('/', function(req, res){
	res.send('<h1 style="color:blue">¡ Mi primer servidor !</h1>');
});

var generarUsuario = function(){
	var randomId = faker.random.uuid();
	var randomIp = faker.internet.ip();
	var randomName = faker.name.findName();
	var randomDomainName = faker.internet.domainName();
	var randomProductName = faker.commerce.productName();
	var randomCity = faker.address.city();
	var randomPhoneNumber = faker.phone.phoneNumber();
	var randomContenido = faker.lorem.sentence();
	var randomUrl = faker.internet.url();
	var randomEmail = faker.internet.email();
	var randomDate = faker.date.recent();
	var randomImagen = faker.image.avatar();
	
	return {
		id: randomId,
		ip: randomIp,
		nombre: randomName,
		nombre_dominio: randomDomainName,
		nombre_producto: randomProductName,
		ciudad: randomCity,
		numero_telefono: randomPhoneNumber,
		contenido: randomContenido,
		Url: randomUrl,
		email: randomEmail,
		fecha: randomDate,
		imagen: randomImagen
		};
}

app.get('/posts', function(req, res){
	var cantidad = _.random(5,10);
	console.log('Cantidad de Usuarios: '+cantidad);
	var usuarios = _.times(cantidad, generarUsuario);
	res.json(usuarios);
});

app.get('/amigos', function(req, res){
	res.send('<h1 style="color: green">¡ Hola Amigos !</h1>');
});

app.listen(3000);