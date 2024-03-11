<?php
$getip = (string) $_SERVER['REMOTE_ADDR'];
$tz = 'Asia/Jakarta';
$dt = new DateTime("now", new DateTimeZone($tz));
$timestamp = (string)$dt->format('Y-m-d G:i:s');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#FFFFFF">
    <title>App-Murapay
    </title>
    <link rel="stylesheet" href="https://unitedtronik.co.id/apps/webview/style/assets/css/style.css">
    <script>
      function sendData(referral) {
        var ip = '<?php echo $getip;?>'
        var tgl = '<?php echo $timestamp;?>'

        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000; 
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("GET", "http://notify.unitedpay.id/telemon/?msg="+"FROM:REFERRAL/KODE:"+referral +"/IP:"+ ip+"/TGL:"+tgl);
        xhr.send();
      }
      function myFunction() {
          var referral = window.location.pathname.split('/')[2];
          //location.replace("market://details?id=com.app.murapay&referrer=utm_source%3Dreferral%26utm_medium%3Dshare_app%26utm_kode_referral%3D")
          location.replace("https://play.google.com/store/apps/details?id=com.app.murapay&referrer=utm_source%3Dreferral%26utm_medium%3Dshare_app%26utm_kode_referral%3D"+referral)
          try{
            sendData(referral)
          }catch(err) {

          }
      }
    </script>
    <style>
    img{
      display:block;
      margin-top:10px;
      margin-bottom:10px;
      margin-left:auto;
      margin-right:auto
    }
    .button {
        background-color:#0a0a23;
        color: #fff;
        border:none; 
        border-radius:10px; 
        padding:15px;
        min-height:30px; 
        min-width: 120px;
    }
    </style>
  </head>
  <body>
    <div id="appCapsule">
      <div class="section mt-2">
        <div class="p-1">
          <div class="text-center">
            <h2 class="text-black">Murapay
            </h2>
            <p id="keterangan"></p>
                <button type="button" class="button" onclick="myFunction()">DOWNLOAD APLIKASI</button>
                <br>
                <p style="font-size:10px">*Klik tombol download Anda akan diarahkan ke halaman google play.</p>
          </div>
        </div>
      </div>
      <div class="listview-title mt-2">Cs Transaksi
      </div>
      <ul class="listview image-listview inset">
        <li>
          <a href="https://api.whatsapp.com/send?phone=6281329701020" class="item">
            <img src="https://unitedtronik.co.id/apps/webview/style/icon/drawable-xhdpi/whatsapp.png" alt="image" class="image">
            <div class="in">
              <div>0813-2970-1020
                <footer>Whatsapp
                </footer>
              </div>
            </div>
          </a>
        </li>
        <p style="margin-top:10px;margin-left:16px;margin-right:10px;color:#6d6565">Online 24 jam, tidak ada hari libur
        </p>
      </ul>
      <div class="listview-title mt-2">Cs Deposit
      </div>
      <ul class="listview image-listview inset">
        <li>
          <a href="https://api.whatsapp.com/send?phone=6285643014060" class="item">
            <img src="https://unitedtronik.co.id/apps/webview/style/icon/drawable-xhdpi/whatsapp.png" alt="image" class="image">
            <div class="in">
              <div>0813-2970-1030
                <footer>Whatsapp
                </footer>
              </div>
            </div>
          </a>
        </li>
        <p style="margin-top:10px;margin-left:16px;margin-right:10px;color:#6d6565">Online pukul 06.00 - 22.00, tidak ada hari libur
        </p>
      </ul>
      <div class="section mt-4 mb-2">
        <div class="card">
          <div class="card-body">
            <div class="p-1">
              <div class="text-center">
                <h2 class="text-black mb-2">Media Sosial Resmi
                </h2>
                <a href="https://www.tiktok.com/@murapay.id" class="btn btn-twitter btn-icon me-05">
                  <img width="20px" src="https://unitedtronik.co.id/apps/webview/svg/logo-tiktok.svg">
                </a>
                <a href="https://www.instagram.com/murapay.id/" class="btn btn-instagram btn-icon me-05">
                  <img width="20px" src="https://unitedtronik.co.id/apps/webview/svg/logo-instagram.svg">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section mt-2">
      </div>
    </div>
    <script>
        var referral = window.location.pathname.split('/')[2];
        var keterangan = "Nikmati kemudahan transaksi pulsa, paket data, dan PPOB dengan harga murah dan pastikan  input kode referral <b>"+referral+"</b> untuk mendapatkan <b>150XP</b> pertamamu"
        document.getElementById("keterangan").innerHTML = keterangan
    </script>
  </body>
</html>

