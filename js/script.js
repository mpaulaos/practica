// Función para mostrar mensaje de cookies (mencionada en el onload del body)
function mostrarMensajeCookies() {
    console.log('Página cargada - Mensaje de cookies');
    // Aquí puedes implementar un mensaje sobre cookies si es necesario
}

// Función para calcular el IMC
function calcularIMC() {
    // Obtener los valores de peso y estatura - seleccionamos los inputs dentro de los primeros dos div.input-group
    const pesoInput = document.querySelectorAll('.input-group input')[0];
    const estaturaInput = document.querySelectorAll('.input-group input')[1];
    const imcInput = document.getElementById('imc');
    const nivelPesoInput = document.getElementById('nivelPeso');
    
    // Obtener los valores y convertirlos a números
    const peso = parseFloat(pesoInput.value);
    const estatura = parseFloat(estaturaInput.value);
    
    // Validar que los valores sean números válidos
    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert('Por favor, ingrese valores válidos para peso y estatura.');
        return;
    }
    
    // Calcular el IMC: peso (kg) / estatura² (m²)
    const imc = peso / (estatura * estatura);
    
    // Mostrar el resultado con dos decimales
    imcInput.value = imc.toFixed(2);
    
    // Determinar el nivel de peso según el IMC
    let nivelPeso = '';
    if (imc < 18.5) {
        nivelPeso = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
        nivelPeso = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        nivelPeso = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        nivelPeso = 'Obesidad grado I';
    } else if (imc >= 35 && imc < 40) {
        nivelPeso = 'Obesidad grado II';
    } else {
        nivelPeso = 'Obesidad grado III';
    }
    
    // Mostrar el nivel de peso
    nivelPesoInput.value = nivelPeso;
}

// Función para reiniciar el formulario
function reiniciarFormulario() {
    // Obtener todos los inputs
    const pesoInput = document.querySelectorAll('.input-group input')[0];
    const estaturaInput = document.querySelectorAll('.input-group input')[1];
    const imcInput = document.getElementById('imc');
    const nivelPesoInput = document.getElementById('nivelPeso');
    
    // Limpiar los valores
    pesoInput.value = '';
    estaturaInput.value = '';
    imcInput.value = '';
    nivelPesoInput.value = '';
    
    // Enfocar el campo de peso para facilitar una nueva entrada
    pesoInput.focus();
}
