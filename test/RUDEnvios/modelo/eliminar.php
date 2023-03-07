<?php
include_once('../../ordenEntrega/model/conexion.php');
$metodo = new Conexion();
$conexion = $metodo->Conectar();



// var_dump($_POST);


$id = $_POST["id"];




$sql=" DELETE FROM `enviopaquete` WHERE `enviopaquete`.`id` = :id";
 
                        
 $sentencia = $conexion->prepare($sql) or trigger_error($conexion->error,E_USER_ERROR);
 
 $sentencia->bindParam("id",$id);

 
 $sentencia->execute();
 ?>