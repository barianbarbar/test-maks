<?php
	header('Access-Control-Allow-Origin: *');
    // Get image string posted from Android App
    $base=$_POST['image'];
    // Get file name posted from Android App
    $filename = trim(str_replace(" ","", strtolower($_POST['filename'])));
    // Decode Image
    $binary=base64_decode($base);
    
	//Cara k1
    /* 
	header('Content-Type: bitmap; charset=utf-8');
    $file = fopen('images/'.$filename, 'wb');
	fwrite($file, $binary);
	fclose($file);
	 */
	//Cara k2
	
	//$data = base64_decode($imgstr); 
	$source_img = imagecreatefromstring($binary);
	$rotated_img = imagerotate($source_img, 0, 0); 
	$file = 'feedback/'.$filename;
	$imageSave = imagejpeg($rotated_img, $file, 100);
	imagedestroy($source_img);
	//unlink('images/bank520170223141836kudo1.png');
	echo json_encode(array("url"=>"https://murapay.id/app/addon/feedback/".$filename,"thumb"=>"https://murapay.idapp/addon/feedback/thumbnails/".$filename));
?>