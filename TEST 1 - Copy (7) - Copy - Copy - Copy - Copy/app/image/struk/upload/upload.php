<?php
// Function to resize the image
function resizeImage($sourceFile, $targetFile, $newHeight) {
    list($width, $height) = getimagesize($sourceFile);

    // Calculate the new width to maintain the aspect ratio
    $newWidth = ($newHeight / $height) * $width;

    // Create a new image with the desired dimensions
    $newImage = imagecreatetruecolor($newWidth, $newHeight);

    // Load the original image
    $originalImage = imagecreatefromjpeg($sourceFile); // Change to imagecreatefrompng for PNG images

    // Resize the original image to fit the new dimensions
    imagecopyresampled($newImage, $originalImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

    // Save the resized image
    imagejpeg($newImage, $targetFile); // Change to imagepng for PNG images

    // Free up memory
    imagedestroy($originalImage);
    imagedestroy($newImage);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['image'])) {
    $targetDir = "logo_outlet/";
    $file_name_asli = $_FILES['image']['name'];
    
    if($file_name_asli=="default.png"){
        // Generate a new file name (you can customize the logic)
        $sourceFilePath = $targetDir . $file_name_asli;
        $newFileName = $_POST['kode_reseller'].".png";
        $targetFile = $targetDir . $newFileName;
        if (copy($sourceFilePath, $targetFile)) {
            $response = array(
                "rc" => "00",
                "rd" => "Sukses ubah logo default"
            );
            echo json_encode($response);
        } else {
            $response = array(
                "rc" => "01",
                "rd" => "Gagal ubah logo default"
            );
            echo json_encode($response);
        }
        exit();
    }
    // Generate a new file name (you can customize the logic)
    $newFileName = $_POST['kode_reseller'].".png";
    $targetFile = $targetDir . $newFileName;

    // Memeriksa tipe file
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if ($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png") {
        $response = array(
            "rc" => "01",
            "rd" => "Hanya file JPG, JPEG, dan PNG yang diijinkan $newFileName. Format file anda adalah $imageFileType"
        );
        echo json_encode($response);
        exit();
    }

    // Memeriksa ukuran file
    // list($width, $height) = getimagesize($_FILES['image']['tmp_name']);
    // if ($height >= 100) {
    //     $response = array(
    //         "rc" => "01",
    //         "rd" => "Tinggi gambar tidak boleh lebih dari 100px. Tinggi gambar anda adalah $height px."
    //     );
    //     echo json_encode($response);
    //     exit();
    // }

    // Pindahkan file yang valid
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        resizeImage($targetFile, $targetFile, 100);
        $response = array(
            "rc" => "00",
            "rd" => "File has been uploaded successfully. $newFileName"
        );
        echo json_encode($response);
    } else {
        $response = array(
            "rc" => "00",
            "rd" => "Error uploading file."
        );
        echo json_encode($response);
    }
} else {
    $response = array(
        "rc" => "00",
        "rd" => "Invalid request."
    );
    echo json_encode($response);
}
?>
