window.onload = function () {
  //Retorna a referência dos elementos através do seu ID.
  const resultDiv = document.getElementById("result");
  const imcValueSpan = document.getElementById("imcValue");
  const imcCategoryP = document.getElementById("imcCategory");

  //Função de limpeza do formulário para uma nova consulta
  function nova_consulta(nomeClass) {
    resultDiv.classList.replace(nomeClass, "hidden");
    document.querySelector("#weight").value = "";
    document.querySelector("#height").value = "";
  }

  //Função para calculo do imc, recebendo peso e altura como parâmetro
  function calculateIMC(weight, height) {
    height /= 100;
    const imc = weight / (height * height);

    return imc.toFixed(1);
  }

  //Função que categoriza de acordo com valor de imc recebido como parâmetro
  function categoriza(imc) {
    if (imc < 18.5) {
      return 0;
    } else if (imc >= 18.5 && imc < 24.9) {
      return 1;
    } else if (imc >= 25 && imc < 29.9) {
      return 2;
    } else if (imc >= 30) {
      return 3;
    }
  }

  document.querySelector("button").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    imc = calculateIMC(weight, height);

    let category = "";

    if (categoriza(imc) === 0) {
      //Abaixo do peso: IMC < 18.5
      imcValueSpan.textContent = imc;
      resultDiv.classList.add("aPeso");
      imcValueSpan.style.color = "purple";
      category = "Abaixo do peso";
    } else if (categoriza(imc) === 1) {
      //Peso normal: 18.5 ≤ IMC < 24.9
      imcValueSpan.textContent = imc;
      resultDiv.classList.add("pNormal");
      imcValueSpan.style.color = "green";
      category = "Peso normal";
    } else if (categoriza(imc) === 2) {
      //Sobrepeso: 25 ≤ IMC < 29.9
      imcValueSpan.textContent = imc;
      resultDiv.classList.add("sPeso");
      imcValueSpan.style.color = "orange";
      category = "Sobrepeso";
    } else if (categoriza(imc) === 3) {
      // Obesidade: IMC ≥ 30
      imcValueSpan.textContent = imc;
      resultDiv.classList.add("obes");
      imcValueSpan.style.color = "red";
      category = "Obesidade";
    }

    imcCategoryP.textContent = category;
    resultDiv.classList.remove("hidden");
  });

  document.querySelector("#weight").addEventListener("focusin", function () {
    nova_consulta(resultDiv.className);
  });

  function funTest(weight, height) {
    imc = calculateIMC(weight, height);

    if (categoriza(imc) === 0) {
      return imc + " - Abaixo do peso";
    } else if (categoriza(imc) === 1) {
      return imc + " - Peso Normal";
    } else if (categoriza(imc) === 2) {
      return imc + " - Sobrepeso";
    } else if (categoriza(imc) === 3) {
      return imc + " - Obesidade";
    }
  }

  console.log(funTest(30, 150));
  console.log(funTest(70, 171));
  console.log(funTest(80, 165));
  console.log(funTest(100, 171));
};
