$(document).ready(function() {
    $('#form-salario').submit(function(e) {
      e.preventDefault();
  
      const nome = $('#nome').val();
      const idade = parseInt($('#idade').val());
      const salarioBruto = parseFloat($('#salario').val());
      const dependentes = parseInt($('#dependentes').val());
  
      const bonus = idade > 50 ? 300 : 200;
      const inss = salarioBruto * 0.08;
      const vt = salarioBruto * 0.05;
      const valorDep = dependentes * 50;
      const salarioLiquido = salarioBruto - inss - vt + bonus + valorDep;
  
      alert(
        `Nome: ${nome}\n` +
        `Número de Dependentes: ${dependentes}\n` +
        `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
        `INSS: R$ ${inss.toFixed(2)}\n` +
        `Vale Transporte: R$ ${vt.toFixed(2)}\n` +
        `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`
      );
    });
  });