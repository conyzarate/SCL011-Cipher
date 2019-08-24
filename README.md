## Abogados Penales

Nuestro cliente nos pidió el desarrollar un sistema de cifrado que  no sea complejo y que pueda adaptarse a la necesidad de sus usuarios, la idea principal es realizar una web que sea muy simple de utilizar y que con unos botones cumpla el objetivo de cifrado de los casos con los que trata.

El cifrado será especificado por código (*offset*) el cúal se le entregará uno a cada usuario y así no habrá más de un uso de los códigos.


# Cifrado César
**¿Por qué utilizaremos cifrado César?**
El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

[https://camo.githubusercontent.com/1f58a3f3b2ea49950a3109fd3f0d63e708c00857/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f322f32622f436165736172332e7376672f3230303070782d436165736172332e7376672e706e67]

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:
-   La letra A se cifra como D.
-   La palabra CASA se cifra como FDVD.
-   Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
-   Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


## Scketchs

Bajamos la idea desde lo principal que podríamos hacer, es por eso que se comenzó a hacer un scketch sobre las posibles ventanas que tendría el producto, se comenzó con una idea a gran escala, viendo las funciones **basicas** del producto, para así después crear una mini maqueta de lo que esperabamos solucionar con el producto.
Siempre recordando que necesitamos un producto simple de usar y que sea muy instuitivo.
[https://fotos.subefotos.com/cca813a226bab6121d1139c14a723050o.jpg]

El poder escoger con anterioridad el si se quiere decifrar o cifrar nos daba la opción de poder separar las utilidades de la página y así enforcarnos en los diferentes usuarios que utilizarían la  web.

Muy buena idea querer dividirlos por usuario, pero olvidamos que necesitamos el código único que el  abogado designará a su cliente, por lo que decidimos ver pantalla por pantalla las diferentes opciones que tendríamos que tener.
[https://i.ibb.co/hfKXCMX/IMG-20190824-160153.jpg]

[https://i.ibb.co/B6Zzq89/IMG-20190824-160204.jpg]

Una muy buena opción es poner el offset en la bienvenida para así poder tener el ingreso del codigo y dependiendo de lo que el usuario quiera hacer dentro de la web es como se usará.
## Flow Chart

El diagrama de flujo nos ayuda a entender para que servirán las diferentes partes de nuestra página, esta puede ser usada una o más veces dentro del proyecto, en este caso realizamos solo una que fue para la maquetación.

[https://i.ibb.co/L8RfMGJ/cifrado.png]

## El cifrado con su formula.

El proceso de la fórmula para poder llegar al producto fue lo que más nos costó, el poder llegar a la lógica fue el paso más complejo pero no por eso no se iba a lograr.
El código para el cifrado y descifrado final es:

>  for (let  i=0; i  <  texto.length; i++){
> 
> ascii=  texto[i].charCodeAt(0)
> 
> resultado  = (parseInt(ascii)-  65  + desplazamiento)%  26  +65;
> 
> resultado  =  String.fromCharCode(resultado);
> 
> end  =  resultado  +  end 

Utilizamos el mismo tanto para decifrado como cifrado, donde solo cambiamos el signo antes del offset y así vemos cuanto recorre nuestro texto. 
Este proceso se demoro más de lo esperado por lo que dentro del plazo solo dejamos que decifre de la A a la Z sin espacios y que solo ingrese **letras en mayusculas** en nuestra próxima versión podremos ver ya el producto funcionando en su totalidad.

## Producto final

Después de los testeos con el cliente e ir viendo que es lo que más le acomodaba al usuario decidimos dejar solo dos pantallas una donde el cliente ingrese su clave y otra donde se cifre y descifre (dentro de una misma caja de texto) y otra donde salga el texto descifrado, llegamos a la conclusión que el usuario no tiene muchos conocimientos sobre tecnologia asi que mientras más simple sea, será mejor para nuestro cliente.

[https://i.ibb.co/Km6cPfy/Captura11.jpg]
