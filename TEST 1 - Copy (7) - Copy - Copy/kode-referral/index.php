<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
    <meta name="theme-color" content="#FFFFFF">
    <meta name="keywords" content="kode referral, murapay, kode referral murapay, kode referral murapay adalah">
    <meta name="description" content="Kategori: Kode Referral Murapay, Kode Referral: digunakan untuk mendaftar aplikasi murapay">
    <title>Kode Referral Murapay</title>
    <link rel="stylesheet" href="https://apps.murapay.id/kode-referral/assets/css/style.css?v=1" defer="defer">
    <style defer="defer">
      img {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto
      }

      .button {
        background-color: #0a0a23;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 15px;
        min-height: 30px;
        min-width: 120px
      }
    </style>
  </head>
  <body>
    <div id="appCapsule">
      <div class="section mt-2">
        <div class="p-1">
          <div class="text-center">
            <img width="70px" height="70px" src="https://apps.murapay.id/assets/img/murapaylogo.png" alt="icon whatsapp murapay" class="image" cache-control="public, max-age=31536000">
            <h2 class="text-black">MuraPay</h2>
            <p id="keterangan"></p>
            <button type="button" class="button" onclick="myFunction()">DOWNLOAD APLIKASI</button>
            <br>
            <p style="font-size:10px">*Klik tombol download Anda akan diarahkan ke halaman google play.</p>
          </div>
        </div>
      </div>
      <div class="listview-title mt-2" style="color:#000">Cs Transaksi</div>
      <ul class="listview image-listview inset">
        <li>
          <a href="https://api.whatsapp.com/send?phone=6281329701020" class="item">
            <img width="20px" height="20px" src="https://unitedtronik.co.id/apps/webview/style/icon/drawable-xhdpi/whatsapp.png" alt="icon whatsapp murapay" class="image" cache-control="public, max-age=31536000">
            <div class="in">
              <div>0813-2970-1020 <footer style="color:#000">Whatsapp</footer>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="listview-title mt-2" style="color:#000">Cs Deposit</div>
      <ul class="listview image-listview inset">
        <li>
          <a href="https://api.whatsapp.com/send?phone=6285643014060" class="item">
            <img width="20px" height="20px" src="https://unitedtronik.co.id/apps/webview/style/icon/drawable-xhdpi/whatsapp.png" alt="icon whatsapp murapay" class="image" cache-control="public, max-age=31536000">
            <div class="in">
              <div>0813-2970-1030 <footer style="color:#000">Whatsapp</footer>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="section mt-4 mb-2">
        <div class="card">
          <div class="card-body">
            <div class="p-1">
              <div class="text-center">
                <h2 class="text-black mb-2">Media Sosial Resmi</h2>
                <a href="https://www.tiktok.com/@murapay.id" class="btn btn-twitter btn-icon me-05">
                  <img width="20px" height="20px" src="https://unitedtronik.co.id/apps/webview/svg/logo-tiktok.svg" alt="icon tiktok murapay" cache-control="public, max-age=31536000">
                </a>
                <a href="https://www.instagram.com/murapay.id/" class="btn btn-instagram btn-icon me-05">
                  <img width="20px" height="20px" src="https://unitedtronik.co.id/apps/webview/svg/logo-instagram.svg" alt="icon instagram murapay" cache-control="public, max-age=31536000">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script async defer="defer">
      var referral = window.location.pathname.split('/')[2];
      var keterangan = "Untuk mendapatkan  <b> 150 XP </b> pertamamu pastikan kamu memasukkan kode referral  <b> "+referral+" </b> saat mendaftar di aplikasi MuraPay. Daftar dengan kode referral dan dapatkan harga yang lebih murah dengan cara naik level!. Kumpulkan xp sebanyak-banyaknya untuk naik level"
      document.getElementById("keterangan").innerHTML = keterangan
      async function myFunction() {
        var referral = window.location.pathname.split('/')[2];
        location.replace("https://play.google.com/store/apps/details?id=com.app.murapay&referrer=utm_source%3Dreferral%26utm_medium%3Dshare_app%26utm_kode_referral%3D" + referral)
      }
    </script>
  </body>
</html>