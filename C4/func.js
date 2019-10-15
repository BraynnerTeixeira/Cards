function calcular(tipo, valor) {
	
 	if (tipo === 'acao') {

 		if (valor === 'c') {
 			//Limprar o visor
 			document.getElementById('resultado_text').value = ''
 		}

 		if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
 			//pegando operadores
			document.getElementById('resultado_text').value += valor

 		}

 		if (valor === '=') {
 			//obter resultado
 			var valor_campo = eval(document.getElementById('resultado_text').value)
			document.getElementById('resultado_text').value = valor_campo


 			
 		}

 	} else if (tipo === 'valor') {
 		//pegando os numeros

 		//var valor_do_campo = document.getElementById('resultado_text').value

 		document.getElementById('resultado_text').value += valor

 	}

}