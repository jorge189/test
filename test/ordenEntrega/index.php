<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Orden de Entrega</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
       
    </head>
    <body>

       <?php 
       include_once(__DIR__.'/../includes/navbar.php');
       ?>


        <div class="container ">

        
        <form class="row g-3 needs-validation" id="ordenEntrega" novalidate>
           
                <h1>Remitente</h1>
            <div class="row">
                <div class="col-md-6">
                    <label for="nombreRemitente" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombreRemitente" name="nombreRemitente" value="" required>
                </div>
                <div class="col-md-6">
                    <label for="calleRemitente" class="form-label">Calle</label>
                    <input type="text" class="form-control" id="calleRemitente" name="calleRemitente" value="" required>
                </div>
          
                
                    <div class="col-md-4">
                        <label for="cpRemitente" class="form-label">Codigo Postal</label>
                        <input type="number" class="form-control" id="cpRemitente" name="cpRemitente" onkeyup="searchcp(this)" value="" required>
                    </div>
                    <div class="col-md-4">
                        <label for="coloniaRemitente" class="form-label">Colonia</label>
                        <select class="form-select" id="colRem" name="colRem" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            
                          </select>
                    </div>
                    <div class="col-md-4">
                        <label for="estadoRemitente" class="form-label">Estado</label>
                        <input type="text" class="form-control" id="estadoRemitente" name="estadoRemitente" value="" required>
                    </div>
               
                <h1>Destinatario</h1>
                <div class="col-md-6">
                    <label for="nombreDestinatario" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombreDestinatario" name="nombreDestinatario" value="" required>
                </div>
                <div class="col-md-6">
                    <label for="calleDestinatario" class="form-label">Calle</label>
                    <input type="text" class="form-control" id="calleDestinatario" name="calleDestinatario" value="" required>
                </div>    
                <div class="col-md-3">
                    <label for="cpDestinatario" class="form-label">Codigo Postal</label>
                    <input type="number" class="form-control" id="cpDestinatario" name="cpDestinatario" onkeyup="searchcp(this)" value="" required>
                </div>
                <div class="col-md-3">
                    <label for="coloniaDestinatario" class="form-label">Colonia</label>
                    <select class="form-select" id="colDest" name="colDest" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        
                      </select>
                </div>
                <div class="col-md-3">
                    <label for="estadoDestinatario" class="form-label">Estado</label>
                    <input type="text" class="form-control" id="estadoDestinatario" name="estadoDestinatario" value="" required>
                </div>
                
                <h1>Paquete</h1>
                <button type="button" class="btn btn-info" id="addPaquete">Añadir</button>
              <div id="paquete">
              <div class="row" >
                   
                   <div class="col-md-3">
                       <label for="peso" class="form-label" >Peso</label>
                       <input type="number" class="form-control maximop validar" id="peso" name="peso" required>
                   </div>
                   <div class="col-md-3">
                       <label for="ancho" class="form-label" >Ancho</label>
                       <input type="number" class="form-control maximoa validar" id="ancho" name="ancho" required>
                   </div>
                   <div class="col-md-3">
                       <label for="alto" class="form-label" >Alto</label>
                       <input type="number" class="form-control maximoal validar" id="alto" name="alto" required>
                   </div>
                   <div class="col-md-3">
                       <label for="contenido" class="form-label" >Contenido</label>
                       <input type="text" class="form-control maximo" id="contenido" name="contenido" required>
                   </div>

               </div>
              </div>
            </div>
            

            <div class="container text-center">
                <div class="row">
                 
                  <div class="col align-self-center">
                    <button class="btn btn-primary " type="submit">Enviar</button>
                  </div>
                 
                </div>
              </div>
          </form>
    </div>
    </body>
    <script src="validaciones.js"></script>
</html>