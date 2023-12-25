<?php
class Connection
{
    public $host = 'localhost';
    public $dbname = 'postgres';
    public $port = '5432';
    public $username = 'postgres';
    public $password = 'Postgres123!';
    public $connect;

    public static function getConnection()
    {
        try {
            $connection = new Connection();
            $connection->connect = new PDO("pgsql:host={$connection->host};port={$connection->port};dbname={$connection->dbname};user={$connection->username};password={$connection->password}");
            $connection->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //echo "PostgreSQL conectado exitosamente";
            return $connection->connect;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}

//Connection::getConnection();

?>

