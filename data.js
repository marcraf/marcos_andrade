
function extenso(data)
{
var input=prompt("Data","Digite a Data");
var i=0;
var arrayMes=new Array(12);
arrayMes[0] = "de Janeiro de";
arrayMes[1] = "de Fevereiro de";
arrayMes[2] = "de Mar�o de";
arrayMes[3] = "de Abril de";
arrayMes[4] = "de Maio de";
arrayMes[5] = "de Junho de";
arrayMes[6] = "de Julho de";
arrayMes[7] = "de Agosto de";
arrayMes[8] = "de Setembro de";
arrayMes[9] = "de Outubro de";
arrayMes[10] = "de Novembro de";
arrayMes[11] = "de Dezembro de";

var dados = input.split("/");

alert(dados[0]+" "+arrayMes[parseInt(dados[1]-1)]+" "+ dados[2]);
}







