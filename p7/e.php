<?php
function factorial($k) {
    $f = 1;
    for ($i = 2; $i <= $k; $i++) {
        $f *= $i;
    }
    return $f;
}
$n = isset($_GET['n']) ? (int)$_GET['n'] : 0;
$sum = 0;
$res = [];
for ($i = 0; $i <= $n; $i++) {
    $sum += 1 / factorial($i);
    $res[] = [$i, $sum];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Práctica 7</title>
    <link rel="stylesheet" href="p7estilos.css">
</head>
<body>
    <h1>Resultado aproximado de e</h1>
    <p>Con n = <?php echo $n; ?> → e ≈ <?php echo number_format(end($res)[1], 10); ?></p>
    <table>
    <thead>
        <tr>
            <th>n</th>
            <th>Aproximación</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($res as $fila): ?>
        <tr>
            <td><?php echo $fila[0]; ?></td>
            <td><?php echo number_format($fila[1], 10); ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
    </table>
    <p><a href="e.html"><strong>Regresar</strong></a></p>

</body>
</html>
