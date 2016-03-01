function Nota()
{
var nota=0;

if (arguments.length<5)
{

 for (var i = 0, len = arguments.length;i < len ;i++) 
   {
     nota+=arguments[i];
                          }

nota=(nota/arguments.length);
  
document.getElementById("teste").innerHTML ="<p><h1>Aprovado</h1></p><p></p><h2>Nota:"+nota+"</h2>";
}
  
  
  

if (arguments.length>4)
{
nota=arguments[(arguments.length)-1];
document.getElementById("teste").innerHTML ="<p><h1>Nota Prova Final</h1></p><p></p><h2>Nota:"+nota+"</h2>";
                                       }

}



 


document.getElementById("teste").innerHTML =
"<p> <h1>Calculadora</h1></p><h2>Nota:"+nota+"</h2>";


