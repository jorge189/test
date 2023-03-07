<?php
include_once('../ordenEntrega/model/conexion.php');

$metodo = new Conexion();
$conexion = $metodo->Conectar();
$cp = $_POST["cp"];

$sql = "SELECT colonia,estado From codigospostales WHERE codigopostal = :cp";
$sentencia = $conexion->prepare($sql) or trigger_error($conexion->error,E_USER_ERROR);
$sentencia->bindParam(":cp",$cp);
// $sentencia->bindParam(":id",$id);
$sentencia->execute();
$result = $sentencia->fetchAll(PDO::FETCH_OBJ);

echo json_encode($result);


?>