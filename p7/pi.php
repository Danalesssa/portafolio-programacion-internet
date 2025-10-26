<?php
$n = isset($_GET['n']) ? (int)$_GET['n'] : 0;
$sum = 0;
$res = [];
for ($i = 0; $i <= $n; $i++) {
    $sum += ((($i % 2) == 0) ? 1.0 : -1.0) / (2 * $i + 1);
    $aprox = 4 * $sum;
    $res[] = [$i, $aprox];
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
  <h1>Resultado</h1>
  <h2>Aproximación de π</h2>
  <p>Con n = <?php echo $n; ?> → π ≈ <?php echo number_format(end($res)[1], 10); ?></p>
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
      <p><a href="pi.html"><strong>Regresar</strong></a></p>

</body>
</html>
