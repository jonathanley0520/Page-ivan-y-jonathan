document.addEventListener("DOMContentLoaded", function() {
    const rolSelect = document.getElementById("rol");
    const aprendizDiv = document.getElementById("aprendiz");
    const equipoRadio = document.getElementsByName("equipo_computo");
    const equipoDiv = document.getElementById("equipo_computo");
    const vehiculoRadio = document.getElementsByName("tiene_vehiculo");
    const vehiculoDiv = document.getElementById("vehiculo");
    const carroDiv = document.getElementById("carro");
    const motoDiv = document.getElementById("moto");
    const bicicletaDiv = document.getElementById("bicicleta");
  
    rolSelect.addEventListener("change", function() {
      if (this.value === "aprendiz") {
        aprendizDiv.classList.remove("hidden");
      } else {
        aprendizDiv.classList.add("hidden");
      }
    });
  
    for (let i = 0; i < equipoRadio.length; i++) {
      equipoRadio[i].addEventListener("change", function() {
        if (this.value === "si") {
          equipoDiv.classList.remove("hidden");
        } else {
          equipoDiv.classList.add("hidden");
        }
      });
    }
  
    for (let i = 0; i < vehiculoRadio.length; i++) {
      vehiculoRadio[i].addEventListener("change", function() {
        if (this.value === "si") {
          vehiculoDiv.classList.remove("hidden");
        } else {
          vehiculoDiv.classList.add("hidden");
        }
      });
    }
  
    carroDiv.classList.add("hidden");
    motoDiv.classList.add("hidden");
    bicicletaDiv.classList.add("hidden");
  
    const vehiculoSelect = document.getElementsByName("tiene_vehiculo");
    vehiculoSelect.addEventListener("change", function() {
      if (this.value === "carro") {
        carroDiv.classList.remove("hidden");
        motoDiv.classList.add("hidden");
        bicicletaDiv.classList.add("hidden");
      } else if (this.value === "moto") {
        carroDiv.classList.add("hidden");
        motoDiv.classList.remove("hidden");
        bicicletaDiv.classList.add("hidden");
      } else if (this.value === "bicicleta") {
        carroDiv.classList.add("hidden");
        motoDiv.classList.add("hidden");
        bicicletaDiv.classList.remove("hidden");
      }
    });
  });
  