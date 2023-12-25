<?php
require_once "../models/usuario.model.php";
echo json_encode(Usuario::obtenerDatoId($_POST['id']));