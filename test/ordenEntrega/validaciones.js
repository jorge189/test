
 
 console.log("estas entrando a validaciones");

let inputsPeso = document.getElementsByClassName("maximop");
let inputsAlto = document.getElementsByClassName("maximoa");
let inputsAncho = document.getElementsByClassName("maximoal");

 
 
// funcion que se lanza con el evento onkeyup para realizar la busqueda de las colonias y el estado en el cp
    function searchcp(event){
        valor = event.value
        
        if (valor.length == 5) {
            
            searchCp(valor,event.id);
       }
    }
    // funcion que hace la peticion para cargar las opciones de colonia en el select y el estado
    function searchCp(cp,id){
        const formData = new FormData();
        formData.append("cp",cp);
        const edoRem = document.getElementById("estadoRemitente");
        const edoDest = document.getElementById("estadoDestinatario");
        
        fetch("../includes/consultas.php", {
            method: "POST",
            body: formData,
          })
          .then((response) => response.json())
        .then((result) => {
            
           
        console.log("Success:", result);
        if (id == "cpRemitente") {
            edoRem.value = "";
            edoRem.value = result[0].estado;
            const selremitente = document.getElementById("colRem");
            removeOptions(selremitente);
            result.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.colonia;
                option.text = item.colonia ;
                selremitente.appendChild(option);
              });

        }
        if (id== "cpDestinatario") {
            edoDest.value = "";
            const selDest = document.getElementById("colDest");
            edoDest.value = result[0].estado
           removeOptions(selDest);
            result.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.colonia;
                option.text = item.colonia ;
                selDest.appendChild(option);
              });
        }



        })
        .catch((error) => {
        console.error("Error:", error);
        });
    }
    // con esta funcion limpiomos las opciones de los selects
    function removeOptions(select){
        while (select.firstChild) {
            select.removeChild(select.firstChild);
          }
    }

    //funcion para crear mas elementos para el envio de paquetes
    let contador = 0;
    const agregarPaquete = document.getElementById("addPaquete");
    if (agregarPaquete) {
      
   
    agregarPaquete.addEventListener("click",function(e){

    e.preventDefault();
      contador++;
      console.log("clics "+contador);
      paquete = document.getElementById('paquete');
      let content = document.createElement("DIV");
      content.classList.add("row")
      content.innerHTML += `<div class="col-md-3">
      <label for="peso" class="form-label" >Peso</label>
      <input type="number" class="form-control maximop validar" id="peso${contador}" name="peso${contador}" required></div>`;
      
      
      content.innerHTML += `<div class="col-md-3">
      <label for="ancho${contador}" class="form-label" >Ancho</label>
      <input type="number" class="form-control maximoa validar" id="ancho${contador}" name="ancho${contador}" required>
      </div>`;
      
      content.innerHTML += `<div class="col-md-3">
      <label for="alto${contador}" class="form-label" >Alto</label>
      <input type="number" class="form-control maximoal validar" id="alto${contador}" name="alto${contador}" required>
      </div>`;
      
      content.innerHTML += `<div class="col-md-3">
      <label for="contenido${contador}" class="form-label" >Contenido</label>
      <input type="text" class="form-control" id="contenido${contador}" name="contenido${contador}" required>
      </div>`;
      
      paquete.appendChild(content);
      
      asignamentEvent();
    });
  }
    // Enviaremos los datos del formulario hacia el back
    const formulario = document.getElementById('ordenEntrega');
    if (formulario) {
      
    
    formulario.addEventListener("submit",function(event){

      event.preventDefault();
      const datos = new FormData(formulario);
      datos.append("contador",contador)
      fetch("model/insertForm.php", {
        method: "POST",
        body: datos
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    });
  }

  
  
  
  const maxPeso = 10;
  const maxAlto = 100;
  const maxAncho = 50;

  const validar = function(e) {
    console.log(e);
    const input = e.target;
    const valor = parseFloat(input.value);

    if (valor > maxPeso && input.classList.contains('maximop')) {
      alert("El peso máximo permitido es " + maxPeso);
      input.value = maxPeso;
    }

    if (valor > maxAlto && input.classList.contains('maximoa')) {
      alert("El alto máximo permitido es " + maxAlto);
      input.value = maxAlto;
    }

    if (valor > maxAncho && input.classList.contains('maximoal')) {
      alert("El ancho máximo permitido es " + maxAncho);
      input.value = maxAncho;
    }
  };

  function asignamentEvent(){
    let inputsValidar = document.querySelectorAll(".validar");
    inputsValidar.forEach(element => {
    element.addEventListener("blur", validar);
    })
  }
  asignamentEvent();

 // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        console.log("entro a validar");
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
 