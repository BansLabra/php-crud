<?php
require_once "../models/usuario.model.php";

$arrayName = array('nombre' => $_POST['nombre'],
'email' => $_POST['email'], 
'edad' => $_POST['edad'], 
);

echo json_encode(Usuario::guardarDatos($arrayName));