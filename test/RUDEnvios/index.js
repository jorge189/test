let tabla = document.getElementById("tabla");
let idT = 0;
let cont = 0;

function leerRegistros(){

    fetch("modelo/consultas.php")

  .then(response => response.json())
  .then(data => {
    
   
    data.forEach(item => {
    const fila = tabla.insertRow();  
    
    fila.insertCell().innerHTML =item.id;
    fila.insertCell().innerHTML =item.nombreR
    fila.insertCell().innerHTML =item.calleR
    fila.insertCell().innerHTML =item.cpR
    fila.insertCell().innerHTML =item.coloniaR
    fila.insertCell().innerHTML =item.edoR
    fila.insertCell().innerHTML =item.nombreD
    fila.insertCell().innerHTML =item.calleD
    fila.insertCell().innerHTML =item.cpD
    fila.insertCell().innerHTML =item.coloniaD
    fila.insertCell().innerHTML =item.edoD
    fila.insertCell().innerHTML =item.peso ? createList(item.peso) : '';
    fila.insertCell().innerHTML =item.ancho ? createList(item.ancho) : '';
    fila.insertCell().innerHTML =item.alto ? createList(item.alto) : '';
    fila.insertCell().innerHTML =item.contenido ? createList(item.contenido) : '';
    fila.insertCell().innerHTML = `<button type="button" onclick="editar(this)" class="btn editar-btn btn-warning">Editar</button>`;
    fila.insertCell().innerHTML = `<button type="button" onclick="eliminar(this)" class="btn btn-danger eliminar">Borrar</button>`;
    });
  })
  .catch(error => console.error(error));
}
leerRegistros();
// función auxiliar para crear una lista a partir de un string JSON
  function createList(jsonString){
      let data = JSON.parse(jsonString);
    //   console.log(data);
  let listItems = Object.values(data).map(value => `<li >${value}</li>`).join('');
  return `<ul data-id=${data}>${listItems}</ul>`;
  }


  const editarBtns = document.getElementsByClassName('editar-btn');
  console.log(editarBtns);

 
    function editar(btn){
        console.log("a editar");
      const fila = btn.closest('tr');
      // Obtener los datos de la fila seleccionada
       idT = fila.querySelector('td:nth-child(1)').textContent;
      const nomR = fila.querySelector('td:nth-child(2)').textContent;
      const calleR = fila.querySelector('td:nth-child(3)').textContent;
      const cpR = fila.querySelector('td:nth-child(4)').textContent;
      const colR = fila.querySelector('td:nth-child(5)').textContent;
      const edoR = fila.querySelector('td:nth-child(6)').textContent;
      const nomD = fila.querySelector('td:nth-child(7)').textContent;
      const calleD = fila.querySelector('td:nth-child(8)').textContent;
      const cpD = fila.querySelector('td:nth-child(9)').textContent;
      const colD = fila.querySelector('td:nth-child(10)').textContent;
      const edoD = fila.querySelector('td:nth-child(11)').textContent;
      const peso = fila.querySelector('td:nth-child(12)');
      const alto = fila.querySelector('td:nth-child(13)');
      const ancho = fila.querySelector('td:nth-child(14)'); 
      const contenido = fila.querySelector('td:nth-child(15)');
     
      var peso2 = peso.querySelector('ul:nth-of-type(1)');
       peso2= peso2.dataset.id;
       console.log("peso:"+peso2);
      var alto2 = alto.querySelector('ul:nth-of-type(1)');
      alto2 = alto2.dataset.id
      console.log("alto:"+alto2);
      var ancho2 = ancho.querySelector('ul:nth-of-type(1)');
      ancho2 = ancho2.dataset.id
      console.log("ancho:"+ancho2)
      var contenido2 = contenido.querySelector('ul:nth-of-type(1)');
      contenido2 = contenido2.dataset.id
      console.log("contenido:"+contenido2);
      // Mostrar el modal de edición y cargar los datos
      mostrarModalEdicion(nomR,calleR,cpR,colR,edoR,nomD,calleD,cpD,colD,edoD,peso2,alto2,ancho2,contenido2);
      }
      // });

    function mostrarModalEdicion(nomR,calleR,cpR,colR,edoR,nomD,calleD,cpD,colD,edoD,peso2,alto2,ancho2,contenido2) {
        // Obtener el modal de edición y los campos de entrada
        let paquete = document.getElementById('paquete');
        console.log("entrando a mostrar edicion")
        const modal = document.getElementById('modal-edicion');
        const nombreRInput = document.getElementById('nombreRemitente');
        const calleRInput = document.getElementById('calleRemitente');
        const cpRInput = document.getElementById('cpRemitente');
        const colRInput = document.getElementById('colRem');
        const edoRInput = document.getElementById('estadoRemitente');
        const nombreDInput = document.getElementById('nombreDestinatario');
        const calleDInput = document.getElementById('calleDestinatario');
        const cpDInput = document.getElementById('cpDestinatario');
        const colDInput = document.getElementById('colDest');
        const edoDInput = document.getElementById('estadoDestinatario');
        const pesoInput = document.getElementById('peso');
        const altoInput = document.getElementById('alto');
        const anchoInput = document.getElementById('ancho');
        const contenidoInput = document.getElementById('contenido');

        // llamamos la funcion para cargar el select con las opciones
        buscarCp(cpR,"cpRemitente");
        buscarCp(cpD,"cpDestinatario");
        // Cargar los datos de la fila seleccionada en los campos de entrada
        nombreRInput.value = nomR;
        calleRInput.value = calleR;
        cpRInput.value = cpR;
        colRInput.value = colR
        edoRInput.value = edoR
        nombreDInput.value = nomD
        calleDInput.value =calleD
        cpDInput.value = cpD
        colDInput.value = colD
        edoDInput.value = edoD
        // pesoInput.value = peso
        // altoInput.value = alto
        // anchoInput.value = ancho
        // contenidoInput.value =  contenido
        inputsPaquete(peso2,alto2,ancho2,contenido2);


        // Mostrar el modal
        modal.style.display = 'block';
      }

    //   creamos funcion para llenar los inputs con el json que se lleno en la bd
      function inputsPaquete(peso,alto,ancho,contenido){
        cont = -1;
        paquetepeso = document.getElementById('pesoDiv');
        paqueteancho = document.getElementById('anchoDiv');
        paquetealto = document.getElementById('altoDiv');
        paquetecontenido = document.getElementById('contenidoDiv');

        paquetepeso.innerHTML = '';
        paqueteancho.innerHTML = '';
        paquetealto.innerHTML = '';
        paquetecontenido.innerHTML = '';
        
        peso = peso.split(',');
        cont += peso.length;
        console.log(cont);
         alto = alto.split(',');
         ancho = ancho.split(',');
         contenido = contenido.split(',');

         peso.forEach(function(valorp,indice){
            contp = '';
            if (indice > 0) {
                contp = indice
            }
            paquetepeso.innerHTML += `<div class="col-md-12">
            <label for="peso" class="form-label" >Peso</label>
            <input type="number" class="form-control maximop validar" id="peso${contp}" name="peso${contp}" value="${valorp}"></div>`
            
         });
         ancho.forEach(function(valora,indice) {
            conta = '';
            if (indice > 0) {
                conta = indice
            }
            
            paqueteancho.innerHTML += `<div class="col-md-12">
            <label for="ancho" class="form-label" >Ancho</label>
            <input type="number" class="form-control maximoa validar" id="ancho${conta}" name="ancho${conta}" value="${valora}">
            </div>`
        });
        alto.forEach(function(valoral,indice) {
            contal = '';
            if (indice > 0) {
                contal = indice
            }
            
            paquetealto.innerHTML += `<div class="col-md-12">
            <label for="ancho" class="form-label" >Alto</label>
            <input type="number" class="form-control maximoal validar" id="alto${contal}" name="alto${contal}" value="${valoral}">
            </div>`
        });
        contenido.forEach(function(valorc,indice) {
            contc = '';
            if (indice > 0) {
                contc = indice
            }
            
            paquetecontenido.innerHTML += `<div class="col-md-12">
            <label for="ancho" class="form-label" >Contenido</label>
            <input type="text" class="form-control" id="contenido${contc}" name="contenido${contc}" value="${valorc}">
            </div>`
        })
        
        asignamentEvent2();
      }
      function cerrarModal(){
        limpiarTabla();
        leerRegistros(); 
        const modal = document.getElementById('modal-edicion');
        console.log("cerrar Modal");
        modal.style.display = 'none';
      }
      
    const formularioUpdate = document.getElementById('saveChanges');
    
      
    
    formularioUpdate.addEventListener("submit",function(event){
      
      event.preventDefault();
      const datos = new FormData(formularioUpdate);
      datos.append("id",idT);
      datos.append("contador",cont);
    //   leerRegistros();
      fetch("modelo/update.php", {
        method: "POST",
        body: datos
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        
        cerrarModal();
        
      })
      .catch(error => {
        console.error(error);
      });
    });

    function limpiarTabla(){
        var rowCount = tabla.rows.length;
        for (var i = rowCount ; i > 0; i--) {
            tabla.deleteRow(i);
        }
    }

    function buscarCp(cp,id){
        console.log("entrando a busqueda de cp");
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
            const selremitente2 = document.getElementById("colRem");
            removeOptions2(selremitente2);
           
            result.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.colonia;
                option.text = item.colonia ;
                selremitente2.appendChild(option);
              });

        }
        if (id== "cpDestinatario") {
            edoDest.value = "";
            const selDest2 = document.getElementById("colDest");
            edoDest.value = result[0].estado
            removeOptions2(selDest2);
            result.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.colonia;
                option.text = item.colonia ;
                selDest2.appendChild(option);
              });
        }



        })
        .catch((error) => {
        console.error("Error:", error);
        });
    }
    function removeOptions2(select){
        while (select.firstChild) {
            select.removeChild(select.firstChild);
          }
    }

    function eliminar(btn){
    console.log("a eliminar");
   
    const fila2 = btn.closest('tr');
    // Obtener los datos de la fila seleccionada
    var idT2 = fila2.querySelector('td:nth-child(1)').textContent;
    console.log("id:"+idT2);
    const datos = new FormData(formularioUpdate);
      datos.append("id",idT2);
    
     
      fetch("modelo/eliminar.php", {
        method: "POST",
        body: datos
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        limpiarTabla();
        leerRegistros();
      })
      .catch(error => {
        console.error(error);
      });
    }

    const maxPeso2 = 10;
    const maxAlto2 = 100;
    const maxAncho2 = 50;
  
    const validar2 = function(e) {
      console.log(e);
      const input2 = e.target;
      const valor2 = parseFloat(input2.value);
  
      if (valor2 > maxPeso2 && input2.classList.contains('maximop')) {
        alert("El peso máximo permitido es " + maxPeso2);
        input2.value = maxPeso2;
      }
  
      if (valor2 > maxAlto2 && input2.classList.contains('maximoa')) {
        alert("El alto máximo permitido es " + maxAlto2);
        input2.value = maxAlto2;
      }
  
      if (valor > maxAncho && input.classList.contains('maximoal')) {
        alert("El ancho máximo permitido es " + maxAncho2);
        input2.value = maxAncho2;
      }
    };
  
    function asignamentEvent2(){
        console.log("haciendo el recorrido para validar");
      let inputsValidar2 = document.querySelectorAll(".validar");
      inputsValidar2.forEach(element2 => {
      element2.addEventListener("blur", validar2);
      })
    }
    asignamentEvent2();
  