<?php 
header('Content-type: image/jpeg');
echo file_get_contents("https://api.qrserver.com/v1/create-qr-code/?data=123456&amp;size=500x500"); 
?>