<?php 
include_once('../../ordenEntrega/model/conexion.php');

$metodo = new Conexion();
$conexion = $metodo->Conectar();


$sql = "SELECT * From enviopaquete";
$sentencia = $conexion->prepare($sql) or trigger_error($conexion->error,E_USER_ERROR);

// $sentencia->bindParam(":id",$id);
$sentencia->execute();
$result = $sentencia->fetchAll(PDO::FETCH_OBJ);

echo json_encode($result);

?>