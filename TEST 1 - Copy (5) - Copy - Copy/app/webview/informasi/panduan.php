<meta name='viewport' content='width=640, user-scalable=0'/>
<?php
$id = $_GET['id'];
$wtinkouridol = $_GET['wtinkouridol'];
// Jika $id sama dengan 1, lakukan konfirmasi deposit
if ($id == 1) {
   // Jika $id tidak sama dengan 1, redirect ke URL lain
   echo $redirectUrl = $wtinkouridol;
   $output = str_replace('/', '%2F', str_replace('+', '%2B', $redirectUrl));
   //echo "<br>";
   //echo "Rm1N6WZ2b3EGZN74HoB87O5bUCAgfwPmUCKMXaHzSzXcp5eFVK7iKoaMB8VjJvq1tQpaH2nbzm8GUXwS8%2BjsCiuZzkbjRyNPCY2GgLc5EjmKxrMWfGux45a%2FxE1j9RqvgWez5Nuhwop1dxGXtjtKLJY%2BTOjIdxh%2BAcejBSr8qj9UNo1KPnInBx3I2AXly3%2BBlPxKiBWwR2BAnuSHMoBaldxleAZB5iIw7DiItuFSkhtyQgb8LsOlc2b8qbtDOvpSQSxEm8mAZ6g%2BSGDBZTu794G2k6hIdva3THV%2BYG2SMaUlJiBFqXHfssG7qNosURAW";
   echo '<meta http-equiv="refresh" content="0;url=https://addon.murapay.id/tfbank-guide/' . $output . '">';
}else{
    echo "page not found";
}
?>
