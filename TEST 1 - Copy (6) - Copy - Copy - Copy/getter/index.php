<?php
$servername = "localhost";
$username = "murahpay_root";
$password = "xWnxe,fH%;Sq";
$dbname = "murahpay_ValidasiApi";
$serverName = $_GET['server'];
$appVersion = $_GET['version'];
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}else{
    
    $data = "";
    
    $sql = "SELECT status FROM validator where nama_server = '".$serverName."' and versi_program = '".$appVersion."'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // Data ditemukan
        while ($row = $result->fetch_assoc()){
            $data = array(
                'status' => '200',
                'response' => $row['status']
            );
        }
        
    } else {
        // Data tidak ditemukan
        $data = array(
            'status' => '404',
            'response' => 'Data Tidak Ditemukan'
        );
        
    }
    
    $jsonData = json_encode($data);
    
    echo $jsonData;
}

