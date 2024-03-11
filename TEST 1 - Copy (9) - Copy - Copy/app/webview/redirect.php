<?php
$halaman = $_GET['halaman'];
$kd_agen = $_GET['a'];

if(strtolower($halaman)=="perubahan nomor hp terdaftar"){
    header("Location: http://bit.ly/UbahdataMurapay");
    //header("Location: http://bit.ly/PERUBAHAN_DATA");
}elseif(strtolower($halaman)=="refund dana karena salah transfer"){
    header("Location: https://bit.ly/RefundDana_Murapay");
    //header("Location: http://bit.ly/refunddana_retail");
}else{

}
exit;
?>