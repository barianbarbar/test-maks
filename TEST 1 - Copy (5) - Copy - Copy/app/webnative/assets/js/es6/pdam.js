let data=[],config="",produk=[],dynamic_form_1="",height_screen="",element_kontak=document.getElementsByClassName("nomor");const headtitle=document.getElementById("head-title"),outer_dynamic_form=document.getElementById("dynamic-form"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),setup_footer_button=document.getElementById("setup-footer-button"),footer=document.getElementById("footer"),outter_check_out=document.getElementById("outter-check-out"),outter_buy=document.getElementById("outter-buy"),checkbox_pin=document.getElementById("switchMaterial"),main_input=document.getElementById("main-input"),potongan=document.getElementById("total-bottom"),header_pembelian=document.getElementById("header_pembelian"),outter_produk=document.getElementById("outter-produk");let offcanvas_produk=new bootstrap.Offcanvas(document.getElementById("offcanvasPDAM")),offcanvas_rincian_pembeilan="",panchi="",temp_produk="";window.onload=function(){setupview(config=get_config(),data=get_produk()),height_screen=window.innerHeight},window.addEventListener("resize",()=>{window.innerHeight>=window.innerHeight?add_footer():remove_footer()});const get_produk=()=>{let a="";try{return a=JSON.parse(Android.getJsonProduk())}catch(e){Android.log(e)}},get_config=()=>{try{let a=JSON.parse(Android.getConfig());return a}catch(e){Android.log(e)}},setup_produk=a=>{let e=data[0].detail.filter(e=>e.produk.toLowerCase().includes(a.toLowerCase())),t="",$="";e.map(a=>{$="",a.kode==temp_produk&&($=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg text-success" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg>`),t+=`<div class="bg-white py-3 px-0 border-bottom" onclick="set_produk(this)">
      <div class="row"> 
        <div class="col-10">
          <p class="text-secondary font-large fw-500" data-kode='${a.kode}' data-produk ='${a.produk}' data-xp='${a.exp}' data-harga='${a.harga}'>${a.produk}</p> 
        </div>
        <div class="col-2 text-center">
          ${$}
        </div>
      </div>
    </div>`}),outter_produk.innerHTML=t},set_produk=a=>{let e=a.querySelector("p"),t=e.dataset.kode,$=e.dataset.produk,r=e.dataset.harga,n=e.dataset.xp;temp_produk=t;let o=document.querySelector(".wilayah");o.dataset.kode=t,o.dataset.produk=$,o.dataset.harga=r,o.dataset.exp=n,o.value=$,offcanvas_produk.hide()},find_wilayah=a=>{setup_produk(a.value)},setupview=(a,e)=>{let t=e[0].detail[0].exp,$=a.settingTujuan.hint,r="",n="",o="",i="",l=a.settingProses.is_cek,s=3,d="",_="",c="";a.settingProses.isVoucher;let p=a.settingProses.isFavorit,u=a.settingProses.isTerjadwal,h=a.settingTujuan.isKontak,m=a.settingTujuan.isScan,g=a.settingTujuan.tipe,v=a.settingTujuan.title,f=a.keterangan;headtitle.innerHTML=f,r="numeric"===g?"numeric":"text",!0===p&&(n=`
        <svg onclick="favorite()" id="Layer_x0020_1" class="me-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 38.232 38.232">
        <defs>
          <clipPath id="clip-path">
            <path id="Path_80" data-name="Path 80" d="M0,0H38.232V38.232H0Z" fill="#f37021" clip-rule="evenodd"/>
          </clipPath>
        </defs>
        <g id="Group_62" data-name="Group 62" clip-path="url(#clip-path)">
          <g id="Group_61" data-name="Group 61" transform="translate(0.439 0.439)">
            <path id="Path_79" data-name="Path 79" d="M18.725.047A18.678,18.678,0,1,1,5.518,5.518,18.62,18.62,0,0,1,18.725.047Zm10.644,16c-.311-3.432-2.74-5.921-5.78-5.921a5.749,5.749,0,0,0-4.922,2.836,5.536,5.536,0,0,0-4.8-2.836c-3.041,0-5.47,2.489-5.781,5.921a3.309,3.309,0,0,0-.036.486v.122A7.568,7.568,0,0,0,8.261,18.3a9.636,9.636,0,0,0,2.959,4.934l7.441,6.754,7.568-6.752A9.655,9.655,0,0,0,29.188,18.3a6.124,6.124,0,0,0,.18-2.251Z" transform="translate(-0.047 -0.047)" fill="#f37021" fill-rule="evenodd"/>
          </g>
        </g>
        <path id="Path_81" data-name="Path 81" d="M0,0H38.232V38.232H0Z" fill="none" fill-rule="evenodd"/>
      </svg>
        `),!0===u&&(_=`<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">
        <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">
          <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>
          <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">
            <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>
            <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>
          </g>
        </g>
      </svg>`),d=`<div class="col-${s} px-0 d-flex justify-content-around align-self-center">
        ${n}${_}
    </div>
    `;let y=`${n}${_}`,k="";m?(c=`<span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">
        <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
            <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
        </svg>
        </span>`,!0===h&&(c=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889"  onclick="kontak(this)">
            <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
              <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
            </g>
          </svg>
            <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
                <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
            </svg>`)):!0===h?c=`
          <span class="input-group-text border-radius-right-8" id="labelContact">
              <img src="./assets/images/icon/Layer_x-15.png"  width="20" height="20" alt="scan" />
          </span>`:(c="",k="border-radius-right-8"),dynamic_form_1=`<div class="col-12 mt-2 dynamic-form">
    <div class="multi">
        <div class="row">
            <div class="col-6">
            <p id="label-nomor" class="text-secondary font-large">${v}</p>
            </div>
            <div class="col-6 text-end">
            <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
            </div>
            <div class="col-12 pt-1 mb-2">
            <div class="input-group">
            <input type="text" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="${$}" aria-label="Nomor User" inputmode="${r}"  aria-describedby="inptNomor" autocomplete="off" />
            <span class="input-group-text text-orange bg-transparent ${k}">
              ${t}
            </span>
            ${c}
            </div>
            <p id="label-nomor" class="text-red font-large error_number d-none">error</p>
            </div>
            <div class="col-12">
            <p id="label-nomor" class="text-secondary font-large">Wilayah</p>
            </div>
            <div class="col-12 pt-1">
                <div class="input-group" onclick="get_wilayah(this)">
                  <input id="wilayah" type="text" placeholder="Pilih Wilayah" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal wilayah" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off" readonly data-produk="" data-harga="" data-kode="" data-exp=""/>
                  <span class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8" id="labelContact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                        <g id="Group_4703" data-name="Group 4703" transform="translate(0 25) rotate(-90)">
                        <rect id="Rectangle_492" data-name="Rectangle 492" width="25" height="25" fill="none"/>
                        <g id="Layer_x0020_1" transform="translate(5)">
                            <path id="Path_619" data-name="Path 619" d="M14.944,22.331,12.208,25,0,12.49,12.208,0l2.735,2.669-9.6,9.82Z" fill="#484646" fill-rule="evenodd"/>
                        </g>
                        </g>
                    </svg>
                  </span>
                </div>
            <p id="label-nomor" class="text-red font-large error_wilayah d-none">error</p>
        </div>
    </div>
    </div>`,!0===l&&(i=`<button id="set_nominal" onclick="rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white" onclick="cek()">
            ${a.settingProses.proses_string}
        </button>`),o=`<div class="col-12">
    ${i}
    </div>
    `,outer_dynamic_form.innerHTML+=dynamic_form_1,setup_footer_button.innerHTML+=o,favorit_kode_voucher_terjadwal.innerHTML+=y,offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianPembelian"))},set_kontak=a=>{element_kontak[0].value=a},kontak=a=>{try{element_kontak="",Android.get_kontak(),element_kontak=a.parentNode.querySelector(".nomor")}catch(e){}},scan=a=>{try{element_kontak="",Android.get_kontak_scan(),element_kontak=a.parentNode.querySelector(".nomor")}catch(e){}},favorite=()=>{pembelian=[];let a=document.querySelector(".nomor"),e=document.querySelector(".wilayah"),t={tujuan:a.value,kode_produk:e.dataset.kode};pembelian.push(t);try{Android.setFavorite(JSON.stringify(pembelian))}catch($){}},terjadwal=()=>{try{Android.setFckingTerjadwal("Coming Soon")}catch(a){}},remove_footer=()=>{footer.classList.add("d-none")},add_footer=()=>{footer.classList.remove("d-none")},get_wilayah=a=>{document.getElementById("labelsearch").parentNode.children[1].value="";let e=main_input.querySelector(".nomor").value,t=main_input.querySelector(".error_number");e.length>0?(offcanvas_produk.show(),setup_produk("")):(t.classList.remove("d-none"),t.innerHTML="Isi nomor id pelanggan lebih dulu")},rincian_pembelian=()=>{let a=main_input.querySelector(".nomor").value,e=main_input.querySelector(".wilayah").value,t=main_input.querySelector(".error_number"),$=main_input.querySelector(".wilayah").dataset.kode,r=main_input.querySelector(".wilayah").dataset.exp,n=main_input.querySelector(".wilayah").dataset.harga,o=config.judul,i=main_input.querySelector(".error_wilayah");a.length>0?""!=$?cek_tagihan(a,e,$,r,n,o):(i.classList.remove("d-none"),i.innerHTML="Data wilayah tidak ditemukan"):(t.classList.remove("d-none"),t.innerHTML="Isi nomor id pelanggan lebih dulu")},value_cek=a=>{try{Android.log("test"+a),a=JSON.parse(a),panchi="";let e="",t="";panchi={pancigedhe:[]},header_pembelian.textContent=a.header_pembelian,a.rincian_pembelian.map(a=>{let t={kode:a.kode_produk,tujuan:a.value_tujuan};panchi.pancigedhe.push(t),e+=`<div class="row check-out mb-1">
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${a.value_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_nama_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${a.value_nama_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_admin}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(a.value_admin,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(a.value_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_total_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(a.value_total_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${a.title_tujuan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${a.value_tujuan}</p>
        </div>
        <div class="col-12 mt-1">
          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${a.xp}</span>${a.keterangan}</p>
        </div>
      </div>`}),outter_check_out.innerHTML=e,t=`
      <div class="col-12">
        <hr>
      </div>
      <div class="col-12 mb-1">
        <p class="fw-bold font-large-1">${a.header_pembayaran}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${a.detail_pembayaran.title_saldo_awal}</p>
      </div>
      <div class="col-8 text-end mb-1">
        <p id="saldo-awal" class="font-large text-secondary">${formatRupiah(a.detail_pembayaran.value_saldo_awal,"Rp. ")}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${a.detail_pembayaran.title_harga_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-dark">(${formatRupiah(a.detail_pembayaran.value_harga_produk,"Rp. ")})</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${a.detail_pembayaran.title_saldo_akhir}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p id="saldo-akhir" class="font-large text-dark">${"string"==typeof a.detail_pembayaran.value_saldo_akhir?a.detail_pembayaran.value_saldo_akhir:formatRupiah(a.detail_pembayaran.value_saldo_akhir,"Rp. ")}</p>
      </div>
    `,outter_buy.innerHTML=t,total_bayar.textContent=formatRupiah(a.detail_pembayaran.value_harga_produk,"Rp. "),offcanvas_rincian_pembeilan.show()}catch($){Android.log("error_log"+$)}},bayar=()=>{try{Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch(a){}},cek_tagihan=(a,e,t,$,r,n)=>{try{t=t.replace("BYR","CEK");let o={tujuan:a,produk:e,harga:r,kode_produk:t,exp:$,title:n};Android.sendNudes(JSON.stringify(o))}catch(i){}},formatRupiah=(a,e)=>{var t,$=(a="string"==typeof a?a:a.toString()).replace(/[^,\d]/g,"").toString().split(","),r=$[0].length%3,n=$[0].substr(0,r),o=$[0].substr(r).match(/\d{3}/gi);return o&&(n+=(r?".":"")+o.join(".")),"string"==typeof a?0>parseInt(a)&&(n="-"+n):a<0&&(n="-"+n),n=void 0!=$[1]?n+","+$[1]:n,void 0==e?n:n?"Rp "+n:""},autocomplete=(a,e)=>{var t;try{a.addEventListener("input",function($){main_input.querySelector(".error_wilayah").classList.add("d-none"),a.dataset.kode="",a.dataset.exp="",a.dataset.harga="";var n,o,i,l=this.value;if(r(),!l)return!1;for(t=-1,(n=document.createElement("DIV")).setAttribute("id",this.id+"autocomplete-list"),n.setAttribute("class","autocomplete-items"),n.style.zIndex="9999",this.parentNode.appendChild(n),i=0;i<e.length;i++){let s=e[i].produk.toUpperCase().includes(l.toUpperCase());if(!0===s){o=document.createElement("DIV");let d=e[i].produk.toUpperCase().search(l.toUpperCase()),_=e[i].produk.substr(d,l.length);o.innerHTML+=e[i].produk.replace(_,`<strong>${_}</strong>`),o.innerHTML+=`<input type='hidden' data-kode='${e[i].kode}' data-exp='${e[i].exp}' data-harga='${e[i].harga}' value='${e[i].produk}'>`,o.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),a.value=this.getElementsByTagName("input")[0].value,a.dataset.kode=this.getElementsByTagName("input")[0].dataset.kode,a.dataset.exp=this.getElementsByTagName("input")[0].dataset.exp,a.dataset.harga=this.getElementsByTagName("input")[0].dataset.harga,potongan.innerHTML=`(${formatRupiah(Math.abs(this.getElementsByTagName("input")[0].dataset.harga),"Rp. ")})`,r()}),n.appendChild(o)}}})}catch($){}let r=e=>{for(var t=document.getElementsByClassName("autocomplete-items"),$=0;$<t.length;$++)e!=t[$]&&e!=a&&t[$].parentNode.removeChild(t[$])}},isNumber=(a,e)=>{let t=main_input.querySelector(".error_number");t.classList.add("d-none");if("numeric"===e.getAttribute("inputmode")){var $=(a=a||window.event).which?a.which:a.keyCode;if($>31&&($<48||$>57))return!1}return!0};