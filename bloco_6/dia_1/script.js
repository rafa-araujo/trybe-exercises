function addOptions() {
  const estados = document.getElementById("estado");
  const estadosArray = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

  for (let index = 0; index < estadosArray.length; index += 1) {
    let createOptions = document.createElement('option');

    estados.appendChild(createOptions).innerText = estadosArray[index];
    estados.appendChild(createOptions).value = estadosArray[index];
  };
};
addOptions();