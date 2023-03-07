<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Generar PDF con JavaScript</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  </head>
  <body>
    <?php
    include_once(__DIR__.'/../includes/navbar.php');
    ?>
    <h1>Detalles del usuario</h1>
    <div>
      <label for="user-id">ID del usuario:</label>
      <input type="number" id="user-id">
      <button onclick="getUserDetails()">Buscar</button>
    </div>
    <div id="user-details">
    
    </div>
    <button style="display: none;"onclick="generatePDF()" id="generatePDF">Generar PDF</button>

   <script src="consulta.js"></script>
</html>