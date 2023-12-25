<?php
require_once "../models/usuario.model.php";

$arrayName = array('nombre' => $_POST['nombre'],
'email' => $_POST['email'], 
'edad' => $_POST['edad'], 
'id' => $_POST['id'],
);

echo json_encode(Usuario::actualizarDatos($arrayName));