//document.getElementById('formulario').addEventListener('submit', cadastroVeiculo);
document.getElementById('formulario').addEventListener('submit', cadastroVeiculo);

function cadastroVeiculo(e) {
    var modeloCarro = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('placaCarro').value;
    var time = new Date();

    if(!modeloCarro && !placaCarro){
      alert("Por favor, preencha todos os campos em branco !");
      return false;
    }
    carro = {
      modelo: modeloCarro,
      placa: placaCarro,
      hora: time.getHours(),
      minutos: time.getMinutes(),
    }

    if(localStorage.getItem('Patio') == null){
      var carros = [];
      carros.push(carro);
      localStorage.setItem('Patio', JSON.stringify(carros));
    }
    else{
      var carros = JSON.parse(localStorage.getItem('Patio'));
      carros.push(carro);
      localStorage.setItem('Patio', JSON.stringify(carros));
    }
    document.getElementById("formulario").reset();

    mostraPatio();

    e.preventDefault();
}

function apagarVeiculo(placa){
  var carros = JSON.parse(localStorage.getItem("Patio"));

  for(var i = 0; i < carros.length; i++){
    if(carros[i].placa == placa){
        carros.splice(i, 1);
    }
      localStorage.setItem("Patio", JSON.stringify(carros));
  }
  mostraPatio();

}


function finalizarWindow(){
  document.querySelector('.bg-modal').style.display = 'flex';
}






function mostraPatio() {
    var carros = JSON.parse(localStorage.getItem('Patio'));
    var carros_resultado = document.getElementById('resultados');

    carros_resultado.innerHTML = '';

    for(var i = 0; i < carros.length; i++){
        var modelo = carros[i].modelo;
        var placa = carros[i].placa;
        var hora = carros[i].hora;
        var minutos = carros[i].minutos;

        carros_resultado.innerHTML += '<tr><td>' + modelo + '</td><td>' + placa + '</td><td>' + hora + ':' + minutos + '</td><td>' +'<button class = "btn btn-danger" onClick="finalizarWindow()">Finalizar</button>' + '</tr>';
    }  //onClick="apagarVeiculo(\''+ placa +'\')"

}
