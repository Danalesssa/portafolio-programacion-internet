<?php
    $servername = "db";
    $username = "root";
    $password = "root_password";
    $dbname = "autos";
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit;
    }
    $sql = "
        SELECT compra.id, modelo.nombre AS modelo, usuarios.nombre AS usuario, compra.folio
        FROM compra
        JOIN modelo ON compra.idModelo = modelo.id
        JOIN usuarios ON compra.idUsuario = usuarios.id;
        ";
    $result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Práctica 8</title>
    <link rel="stylesheet" href="estilosp8.css">
</head>
<body>
    <h1>Tabla de Compras</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Usuario</th>
                <th>Folio</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result && mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>
                            <td>{$row['id']}</td>
                            <td>{$row['modelo']}</td>
                            <td>{$row['usuario']}</td>
                            <td>{$row['folio']}</td>
                        </tr>";
                }
            } else {
                echo "<tr><td colspan='4'>No hay registros en la tabla compra</td></tr>";
            }
            mysqli_close($conn);
            ?>
        </tbody>
    </table>
</body>
</html>
