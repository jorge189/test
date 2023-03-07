<?php

define("SERVIDOR","localhost");
define("BD","ordenEntrega");
define("USUARIO","root");
define("PASS","");
class Conexion{	  
    public static function Conectar() {              
        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::MYSQL_ATTR_DIRECT_QUERY => false,
            PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_PERSISTENT => true
        );			
        try{
            $conexion = new PDO("mysql:host=".SERVIDOR.";dbname=".BD,USUARIO,PASS,$opciones);
            //  echo "Conexión realizada Satisfactoriamente";
            return $conexion;			           
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}


?>