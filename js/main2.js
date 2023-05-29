function formValidacion()
{
var usuario = document.registration.userid;
var passid = document.registration.passid;
var nombre = document.registration.username;
var direccion = document.registration.address;
var pais = document.registration.country;
var Codpos = document.registration.zip;
var correo = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 



if(userid_validation(usuario,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(nombre))
{
if(alphanumeric(direccion))
{ 
if(countryselect(pais))
{
if(allnumeric(Codpos))
{
if(ValidateEmail(correo))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}

function userid_validation(usuario,mx,my)
{
    console.log('Ejecutando la función userid_validation'); // Agregando console.log
var usuario_len = usuario.value.length;
if (usuario_len == 0 || usuario_len >= my || usuario_len < mx)
{
alert("El ID de usuario no debe estar vacío / la longitud debe estar entre "+mx+" y "+my);
usuario.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("La contraseña no debe estar vacía / la longitud debe estar entre "+mx+" y "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(nombre)
{ 
var letters = /^[A-Za-z]+$/;
if(nombre.value.match(letters))
{
return true;
}
else
{
alert('El nombre de usuario debe tener solo caracteres alfabéticos');
nombre.focus();
return false;
}
}

function alphanumeric(direccion)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(direccion.value.match(letters))
{
return true;
}
else
{
alert('La dirección del usuario debe tener solo caracteres alfanuméricos');
direccion.focus();
return false;
}
}

function countryselect(pais)
{
if(pais.value == "Default")
{
alert('Seleccione su país de la lista');
pais.focus();
return false;
}
else
{
return true;
}
}

function allnumeric(Codpos)
{ 
var numbers = /^[0-9]+$/;
if(Codpos.value.match(numbers))
{
return true;
}
else
{
alert('El código postal debe tener solo caracteres numéricos');
Codpos.focus();
return false;
}
}

function ValidateEmail(correo)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(correo.value.match(mailformat))
{
return true;
}
else
{
alert("¡Ha ingresado una dirección de correo electrónico no válida!");
correo.focus();
return false;
}
}

function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Seleccione Masculino/Femenino');
umsex.focus();
return false;
}
else
{
alert('Formulario entregado satisfactoriamente');
window.location.reload()
return true;}
}



