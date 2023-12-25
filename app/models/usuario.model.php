<?php
require_once "./app/config/connection.php";
class Usuario extends Connection
{
    public static function mostrarDatos()
    {
        try {
            $sql = "SELECT * FROM usuario";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt-> execute();
            $result = $stmt->fetchAll();
            return $result;
        } catch (PDOException $th) {
            echo $th -> getMessage();
        }
    }

    public static function obtenerDatoId($id)
    {
        try {
            $sql = "SELECT * FROM usuario WHERE id=id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt -> bindParam(':id', $id);
            $stmt-> execute();
            $result = $stmt->fetch();
            return $result;
        } catch (PDOException $th) {
            echo $th -> getMessage();
        }
    }

    public static function guardarDatos($data)
    {
        try{
            $sql = "INSERT INTO usuario (nombre, mail, edad) VALUES (:nombre,:email, :edad)";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt -> bindParam(':nombre', $data['nombre']);
            $stmt -> bindParam(':email', $data['email']);
            $stmt -> bindParam(':edad', $data['edad']);
            $stmt -> execute();
            return true;
        } catch (PDOException $th) {
            echo $th -> getMessage();
        }
    }

    public static function actualizarDatos($data)
    {
        try {
            $sql = "UPDATE usuario set nombre = :nombre, email=:email,edad=:edad WHERE id=:id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt -> bindParam(':nombre', $data['nombre']);
            $stmt -> bindParam(':email', $data['email']);
            $stmt -> bindParam(':edad', $data['edad']);
            $stmt -> execute();
            return true;
        } catch (PDOException $th) {
            echo $th -> getMessage();
        }
    }

    public static function eliminarDatos($id)
    {
        try {
            $sql = "DELETE FROM usuario WHERE id = :id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt -> bindParam(':id', $id);
            $stmt -> execute();
            return true;
        } catch (PDOException $th) {
            echo $th -> getMessage();
        }
    }
}