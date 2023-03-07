<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Lectura y Actualizacion de Registros</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
       
    </head>
    <body>

       <?php 
       include_once(__DIR__.'/../includes/navbar.php');
       ?>
    <table class="table table-striped">
    <thead>
    <tr>
    <th>ID</th>
      <th>Nombre Rem</th>
      <th>Calle Rem</th>
      <th>CP Rem</th>
      <th>Colonia Rem</th>
      <th>Edo Rem</th>
      <th>Nombre Dest</th>
      <th>Calle Dest</th>
      <th>CP Dest</th>
      <th>Col Dest</th>
      <th>Edo Dest</th>
      <th>Peso</th>
      <th>Ancho</th>
      <th>Alto</th>
      <th>Contenido</th>
      <th>Editar</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody id="tabla">
    <!-- Los datos se añadirán aquí con JavaScript -->
  </tbody>
    </table>

    <div id="modal-edicion" class="modal" style="display:none">
    <div class="modal-contenido" style="background-color: aquamarine;">
    <h2>Editar Registro</h2>
    <form class="row g-3 needs-validation" id="saveChanges" novalidate>
    <h1>Remitente</h1>
    <div class="row">
                <div class="col-md-6">
                    <label for="nombreRemitente" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombreRemitente" name="nombreRemitente" value="" >
                </div>
                <div class="col-md-6">
                    <label for="calleRemitente" class="form-label">Calle</label>
                    <input type="text" class="form-control" id="calleRemitente" name="calleRemitente" value="" >
                </div>
          
                
                    <div class="col-md-4">
                        <label for="cpRemitente" class="form-label">Codigo Postal</label>
                        <input type="number" class="form-control" id="cpRemitente" name="cpRemitente" onkeyup="searchcp(this)" value="" >
                    </div>
                    <div class="col-md-4">
                        <label for="coloniaRemitente" class="form-label">Colonia</label>
                        <select class="form-select" id="colRem" name="colRem" aria-label="Default select example">
                            
                            
                          </select>
                    </div>
                    <div class="col-md-4">
                        <label for="estadoRemitente" class="form-label">Estado</label>
                        <input type="text" class="form-control" id="estadoRemitente" name="estadoRemitente" value="" >
                    </div>
               
                <h1>Destinatario</h1>
                <div class="col-md-6">
                    <label for="nombreDestinatario" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombreDestinatario" name="nombreDestinatario" value="" >
                </div>
                <div class="col-md-6">
                    <label for="calleDestinatario" class="form-label">Calle</label>
                    <input type="text" class="form-control" id="calleDestinatario" name="calleDestinatario" value="" >
                </div>    
                <div class="col-md-3">
                    <label for="cpDestinatario" class="form-label">Codigo Postal</label>
                    <input type="number" class="form-control" id="cpDestinatario" name="cpDestinatario" onkeyup="searchcp(this)" value="" >
                </div>
                <div class="col-md-3">
                    <label for="coloniaDestinatario" class="form-label">Colonia</label>
                    <select class="form-select" id="colDest" name="colDest" aria-label="Default select example">
                        
                        
                      </select>
                </div>
                <div class="col-md-3">
                    <label for="estadoDestinatario" class="form-label">Estado</label>
                    <input type="text" class="form-control" id="estadoDestinatario" name="estadoDestinatario" value="" >
                </div>
                
                <h1>Paquete</h1>
                
                <div class="row" id="paquete">
                   
                    <div class="col-md-3" id="pesoDiv" >
                        
                    </div>
                    <div class="col-md-3" id="anchoDiv">
                    
                    </div>
                    <div class="col-md-3" id="altoDiv">
                    </div>
                    <div class="col-md-3" id="contenidoDiv">
                    </div>

                </div>
            </div>
      
      <div class="modal-footer">
      <input onclick="cerrarModal()" id="cerrar" class="btn btn-secondary">cerrar</button>
        <button type="submit" id="guardar-btn" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </form>
  </div>
</div>
   
    </body>
    <script src="../ordenEntrega/validaciones.js"></script>
    <script src="index.js"></script>
</html>