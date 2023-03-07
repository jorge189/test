<?php
include_once('./conexion.php');
$metodo = new Conexion();
$conexion = $metodo->Conectar();



// var_dump($_POST);

$contador = $_POST["contador"];
$nombreR = $_POST["nombreRemitente"];
$calleR = $_POST["calleRemitente"];
$cpR = $_POST["cpRemitente"];
$colR = $_POST["colRem"];
$edoR = $_POST["estadoRemitente"];
$nombreD = $_POST["nombreDestinatario"];
$calleD = $_POST["calleDestinatario"];
$cpD = $_POST["cpDestinatario"];
$colD = $_POST["colDest"];
$edoD = $_POST["estadoDestinatario"];
$peso = array($_POST["peso"]);
$alto = array($_POST["alto"]);
$ancho = array($_POST["ancho"]);
$contenido = array($_POST["contenido"]);
for ($i=1; $i <= $contador ; $i++) { 
    array_push($peso,$_POST["peso".$i]);
    array_push($alto,$_POST["alto".$i]);
    array_push($ancho,$_POST["ancho".$i]);
    array_push($contenido,$_POST["contenido".$i]);
}

$json_peso = json_encode($peso);
$json_alto = json_encode($alto);
$json_ancho = json_encode($ancho);
$json_contenido = json_encode($contenido);
$sql = "INSERT INTO `enviopaquete` ( `nombreR`,`calleR`,`cpR`,`coloniaR`,`edoR`,
                                    `nombreD`,`calleD`,`cpD`,`coloniaD`,`edoD`
                                    ,`peso`, `ancho`, `alto`, `contenido`)
                VALUES ( :nomR,:callR,:cpR,:colR,:edoR,
                        :nomD,:calleD,:cpD,:colD,:edoD,   
                        :peso, :ancho, :alto,:contenido);";
 $sentencia = $conexion->prepare($sql) or trigger_error($conexion->error,E_USER_ERROR);
 $sentencia->bindParam(":nomR",$nombreR);
 $sentencia->bindParam(":callR",$calleR);
 $sentencia->bindParam(":cpR",$cpR);
 $sentencia->bindParam(":colR",$colR);
 $sentencia->bindParam(":edoR",$edoR);
 $sentencia->bindParam(":nomD",$nombreD);
 $sentencia->bindParam(":calleD",$calleD);
 $sentencia->bindParam(":cpD",$cpD);
 $sentencia->bindParam(":colD",$colD);
 $sentencia->bindParam(":edoD",$edoD);
 $sentencia->bindParam(":peso",$json_peso);
 $sentencia->bindParam(":ancho",$json_ancho);
 $sentencia->bindParam(":alto",$json_alto);
 $sentencia->bindParam(":contenido",$json_contenido);
 
 $sentencia->execute();

?>