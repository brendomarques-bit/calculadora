// This file contains the logic for calculating extra hours in JavaScript.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calcular').addEventListener('click', function() {
        const salario = parseFloat(document.getElementById('salario').value);
        const horasExtras = parseFloat(document.getElementById('horas-extras').value);

        if (isNaN(salario) || isNaN(horasExtras)) {
            alert('Por favor, insira valores válidos.');
            return;
        }

        const valorDaHora = (salario / 220) * 2;
        const valorAReceber = horasExtras * valorDaHora;

        const resultado = document.getElementById('resultado');
        resultado.textContent = `O valor a receber pelas horas extras é de R$${valorAReceber.toFixed(2)}`;

        document.getElementById('repetir').style.display = 'inline-block';
    });

    document.getElementById('repetir').addEventListener('click', function() {
        document.getElementById('salario').value = '';
        document.getElementById('horas-extras').value = '';
        document.getElementById('resultado').textContent = '';
        document.getElementById('repetir').style.display = 'none';
    });
});