
    
window.cipher = {

    encode: (texto, desplazamiento) => { let ascii, resultado, end ="";

        for (let i=0; i < texto.length; i++){
        
        ascii= texto[i].charCodeAt(0)
        resultado = (parseInt(ascii)- 65 + desplazamiento)% 26 +65; 
        resultado = String.fromCharCode(resultado);
        
        end = resultado + end
        
      }
        return end;
   
  }, 
 
    decode: (texto, desplazamiento) => { let ascii, resultado, end ="";


    for (let i=0; i < texto.length; i++){
        
      ascii= texto[i].charCodeAt(0)
      resultado = (parseInt(ascii)- 65 - desplazamiento)% 26 +65; 
      resultado = String.fromCharCode(resultado);
      
      end = resultado + end
      
    }
      return end;
 
}, 
}
