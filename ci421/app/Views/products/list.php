<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ci4 Pagination</title>
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
  <main>
    <div class="container">
      <h1>Listagem</h1>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">TESTE</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex">
          <?php
          $cards = '';
          foreach ($products as $i => $v) {
            $cards .= '<div class="card m-2 shadow">'
              . '<div class="card-body">'
              . "<p>$v[productName]</p>"
              . "<p>$v[productLine]</p>"
              . "<p>$v[productVendor]</p>"
              . "<p>$v[buyPrice]</p>"
              . '</div>'
              . '</div>';
          }
          echo $cards
          ?>
        </div>
      </div>
      <?= $pager->links('g1', 'bs') ?>
      <?= $pager->simpleLinks('g1') ?>

    </div>
  </main>
</body>

</html>