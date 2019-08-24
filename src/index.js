let desplazamiento, texto;

// acá se ingresa el número de desplazamiento y lo manda a la consola.
 
document.getElementById("$offset").addEventListener("click", () => {
    desplazamiento = document.getElementById("offset").value
     desplazamiento = parseInt(desplazamiento);
     
    });

// acá decifra cuando se ingresa el click

document.getElementById("cipher").addEventListener("click", () => {
    texto= document.getElementById("texto").value.toUpperCase();
        document.getElementById("result").innerHTML = window.cipher.encode(texto, desplazamiento);
      
    });

    // acá descifra
document.getElementById("dicipher").addEventListener("click", () => {
       texto= document.getElementById("texto").value.toUpperCase();
       document.getElementById("result").innerHTML = window.cipher.decode(texto, desplazamiento);
       
    });

    
document.getElementById("$offset").addEventListener("click", () => {
        document.getElementById("secondPage").style.display= "block";
        document.getElementById("userOff").style.display="none";
        
});

document.getElementById("home").addEventListener("click", () => {
        document.getElementById("userOff").style.display="block";
        document.getElementById("secondPage").style.display="none";

});
 

