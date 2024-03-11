"use strict";var data=[],dynamic_form_1="",pin="",panchi="",config="",nominal=document.querySelector(".nominal"),headtitle=document.getElementById("head-title"),main_input=document.getElementById("main-input"),outer_dynamic_form=document.getElementById("dynamic-form"),setup_footer_button=document.getElementById("setup-footer-button"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),outter_check_out=document.getElementById("outter-check-out"),outter_buy=document.getElementById("outter-buy"),total_pembelian=document.getElementById("total-pembelian"),checkbox_pin=document.getElementById("switchMaterial"),form_pin=document.getElementById("pin"),title_total=document.getElementById("title-total"),total_bottom=document.getElementById("total-bottom"),header_pembelian=document.getElementById("header_pembelian"),footer=document.getElementById("footer"),offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianPembelian")),element_kontak=document.getElementsByClassName("nomor"),height_screen="";window.onload=function(){config=get_config(),data=get_produk(),get_pin(),setupview(config,data),height_screen=window.innerHeight},window.addEventListener("resize",function(){window.innerHeight>=height_screen?add_footer():remove_footer()});var remove_footer=function a(){footer.classList.add("d-none")},add_footer=function a(){footer.classList.remove("d-none")},get_pin=function a(){try{pin=Android.get_pin(),""==pin?(checkbox_pin.checked=!0,checkbox_pin.readOnly=!1):(form_pin.readOnly=!0,checkbox_pin.checked=!1,form_pin.value=pin)}catch($){Android.log($)}},setup_pin=function a($){""==$?(checkbox_pin.checked=!0,checkbox_pin.readOnly=!1):(form_pin.readOnly=!0,checkbox_pin.checked=!1,form_pin.value=$)},changepin=function a($){if(!0==$.checked)Android.reset_pin(),form_pin.readOnly=!1,form_pin.value="";else{var n=form_pin.value;!0==Android.set_pin(n,6)?(form_pin.readOnly=!0,$.checked=!1):(form_pin.readOnly=!1,$.checked=!0)}},get_config=function a(){try{return Android.log(Android.getConfig()),JSON.parse(Android.getConfig())}catch($){Android.log($)}},get_produk=function a(){var $="";try{return $=JSON.parse(Android.getJsonProduk())}catch(n){Android.log(n)}},setupview=function a($,n){var t=$.settingTujuan.hint,e="",_="",o="",i="",r="",c="",l="",s=$.settingProses.is_cek;$.settingProses.isVoucher;var d=$.settingProses.isFavorit,p=$.settingProses.isTerjadwal,u=$.settingTujuan.isKontak,h=$.settingTujuan.isScan,m=$.settingTujuan.tipe,v=$.settingTujuan.title,g=character_find($.keterangan),f="",y="",b="",k="";title_total.innerHTML=$.settingProses.title,n.detail.map(function(a){y=a.exp,b=a.harga,k=a.kode,f=a.produk}),headtitle.innerHTML=g,e="numeric"===m?"numeric":"text",!0===d&&(_='\n        <svg onclick="favorite()" id="Layer_x0020_1" class="me-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 38.232 38.232">\n        <defs>\n          <clipPath id="clip-path">\n            <path id="Path_80" data-name="Path 80" d="M0,0H38.232V38.232H0Z" fill="#f37021" clip-rule="evenodd"/>\n          </clipPath>\n        </defs>\n        <g id="Group_62" data-name="Group 62" clip-path="url(#clip-path)">\n          <g id="Group_61" data-name="Group 61" transform="translate(0.439 0.439)">\n            <path id="Path_79" data-name="Path 79" d="M18.725.047A18.678,18.678,0,1,1,5.518,5.518,18.62,18.62,0,0,1,18.725.047Zm10.644,16c-.311-3.432-2.74-5.921-5.78-5.921a5.749,5.749,0,0,0-4.922,2.836,5.536,5.536,0,0,0-4.8-2.836c-3.041,0-5.47,2.489-5.781,5.921a3.309,3.309,0,0,0-.036.486v.122A7.568,7.568,0,0,0,8.261,18.3a9.636,9.636,0,0,0,2.959,4.934l7.441,6.754,7.568-6.752A9.655,9.655,0,0,0,29.188,18.3a6.124,6.124,0,0,0,.18-2.251Z" transform="translate(-0.047 -0.047)" fill="#f37021" fill-rule="evenodd"/>\n          </g>\n        </g>\n        <path id="Path_81" data-name="Path 81" d="M0,0H38.232V38.232H0Z" fill="none" fill-rule="evenodd"/>\n      </svg>\n        '),!0===p&&(i='<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">\n        <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">\n          <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>\n          <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">\n            <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>\n            <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>\n          </g>\n        </g>\n      </svg>'),o='<div class="col-'.concat(3,' px-0 d-flex justify-content-around align-self-center">\n        ').concat(_).concat(i,"\n    </div>\n    ");var x="".concat(_).concat(i);h?(r='<span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">\n          <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">\n              <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>\n          </svg>\n        </span>',!0===u&&(r='<span id="labelContact" onclick="kontak(this)" class="input-group-text bg-transparent border-start-0 py-1 px-2">\n            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">\n              <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">\n                <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>\n              </g>\n            </svg>\n          </span>\n          <span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">\n               <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">\n                    <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>\n                </svg>\n          </span>')):r='\n        <span class="input-group-text border-radius-right-8" id="labelScan" onclick="kontak(this)">\n          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">\n            <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">\n              <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>\n            </g>\n          </svg>\n        </span>',dynamic_form_1='<div class="col-12 mt-2 dynamic-form">\n        <div class="multi">\n            <div class="row">\n                <div class="col-6">\n                <p id="label-nomor" class="text-secondary font-large">'.concat(v,'</p>\n                </div>\n                <div class="col-6 text-end">\n                <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>\n                </div>\n                <div class="col-12 pt-1">\n                <div class="input-group mb-1">\n                <input type="text" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-dark nomor" placeholder="').concat(t,'" aria-label="Nomor User" inputmode="').concat(e,'"  aria-describedby="inptNomor" autocomplete="off" />\n                ').concat(r,'\n                </div>\n                <p class="font-normal error_number text-red mb-2"></p>\n                </div>\n                <div class="col-12">\n                <p id="label-nomor" class="text-secondary font-large">Nama Produk</p>\n                </div>\n                <div class="col-12 pt-1">\n                  <div class="input-group mb-1">\n                    <input type="text" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-dark produk" aria-label="Nominal" aria-describedby="inptproduk" autocomplete="off" value="').concat(f,'" readonly data-produk="').concat(f,'" data-harga="').concat(b,'" data-kode="').concat(k,'" data-exp="').concat(y,'"/>\n                    <span onclick="kontak(this)" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8 text-orange">\n                      ').concat(y,"\n                    </span>\n                  </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>"),!0===s&&(l='<button id="set_nominal" onclick="rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white" onclick="cek()">\n            Lanjut\n        </button>'),c='<div class="col-12 px-1">\n    '.concat(l,"\n    </div>\n    "),total_bottom.innerHTML="(".concat(formatRupiah(Math.abs(b),"Rp. "),")"),outer_dynamic_form.innerHTML=dynamic_form_1,setup_footer_button.innerHTML=c,favorit_kode_voucher_terjadwal.innerHTML+=x},set_kontak=function a($){document.querySelector(".nomor").value=$},informasi_pin=function a(){try{Android.dialogInfoPin()}catch($){}},kontak=function a($){try{Android.get_kontak()}catch(n){}},scan=function a($){try{Android.get_kontak_scan()}catch(n){}},favorite=function a(){var $=[],n=document.querySelector(".nomor"),t=document.querySelector(".produk"),e={tujuan:n.value,kode_produk:t.dataset.kode};$.push(e);try{Android.setFavorite(JSON.stringify($))}catch(_){}},terjadwal=function a(){try{Android.setFckingTerjadwal("Coming Soon")}catch($){}},character_find=function a($){if(!($.length>150))return $;var n=$.substring(0,150);if(n.includes(" "))return n.substring(0,n.lastIndexOf(" "))+" ...<span class='text-light-blue' onclick='title_keterangan(\"".concat($,"\")'> Selengkapnya.</span>")},title_keterangan=function a($){document.querySelector(".title-multitrx").innerHTML="Keterangan",document.querySelector(".isi-multitrx").innerHTML=$,(offcanvasRincianMultitrx=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianMultitrx"))).show(),footer.classList.add("d-none")};document.getElementById("offcanvasRincianMultitrx").addEventListener("hidden.bs.offcanvas",function(){footer.classList.remove("d-none")});var value_cek=function a($){try{Android.log($),$=JSON.parse($),panchi="";var n="",t="";panchi={pancigedhe:[],pincok:""},header_pembelian.textContent=$.header_pembelian,$.rincian_pembelian.map(function(a){var $={kode:a.kode_produk,tujuan:a.value_tujuan};panchi.pancigedhe.push($),n+='<div class="row check-out mb-1">\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">'.concat(a.title_produk,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_produk,'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_nama_produk,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_nama_produk,'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_admin,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_admin,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_tagihan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_tagihan,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_total_tagihan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_total_tagihan,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_tujuan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_tujuan,'</p>\n        </div>\n        <div class="col-12 mt-1">\n          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">').concat(a.xp,"</span>").concat(a.keterangan,"</p>\n        </div>\n      </div>")}),outter_check_out.innerHTML=n,t='\n      <div class="col-12">\n        <hr>\n      </div>\n      <div class="col-12 mb-1">\n        <p class="fw-bold font-large-1">'.concat($.header_pembayaran,'</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat($.detail_pembayaran.title_saldo_awal,'</p>\n      </div>\n      <div class="col-8 text-end mb-1">\n        <p id="saldo-awal" class="font-large text-secondary">').concat(formatRupiah($.detail_pembayaran.value_saldo_awal,"Rp. "),'</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat($.detail_pembayaran.title_harga_produk,'</p>\n      </div>\n      <div class="col-8 mb-1 text-end">\n        <p class="font-large text-dark">(').concat(formatRupiah($.detail_pembayaran.value_harga_produk,"Rp. "),')</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat($.detail_pembayaran.title_saldo_akhir,'</p>\n      </div>\n      <div class="col-8 mb-1 text-end">\n        <p id="saldo-akhir" class="font-large text-dark">').concat("string"==typeof $.detail_pembayaran.value_saldo_akhir?$.detail_pembayaran.value_saldo_akhir:formatRupiah($.detail_pembayaran.value_saldo_akhir,"Rp. "),"</p>\n      </div>\n    "),outter_buy.innerHTML=t,total_bayar.textContent=formatRupiah($.detail_pembayaran.value_harga_produk,"Rp. "),offcanvas_rincian_pembeilan.show()}catch(e){Android.log("error_log"+e)}},rincian_pembelian=function a(){var $=main_input.querySelector(".nomor").value,n=main_input.querySelector(".produk").value,t=main_input.querySelector(".error_number"),e=main_input.querySelector(".produk").dataset.kode,_=main_input.querySelector(".produk").dataset.exp,o=main_input.querySelector(".produk").dataset.harga,i=config.judul;$.length>0?(t.classList.add("d-none"),cek_tagihan($,n,e,_,o,i)):(t.innerHTML="Isi ID pelanggan dulu",t.classList.remove("d-none"))},cek_tagihan=function a($,n,t,e,_,o){try{t=t.replace("BYR","CEK");var i={tujuan:$,produk:n,harga:_,kode_produk:t,exp:e,title:o};Android.sendNudes(JSON.stringify(i))}catch(r){console.log(r)}},bayar=function a(){try{panchi.pincok=form_pin.value,Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch($){}},isNumber=function a($,n){if(main_input.querySelector(".error_number").classList.add("d-none"),"numeric"===n.getAttribute("inputmode")){var t=($=$||window.event).which?$.which:$.keyCode;if(t>31&&(t<48||t>57))return!1}return!0},formatRupiah=function a($,n){var t=($="string"==typeof $?$:$.toString()).replace(/[^,\d]/g,"").toString().split(","),e=t[0].length%3,_=t[0].substr(0,e),o=t[0].substr(e).match(/\d{3}/gi);return o&&(_+=(e?".":"")+o.join(".")),"string"==typeof $?0>parseInt($)&&(_="-"+_):$<0&&(_="-"+_),_=void 0!=t[1]?_+","+t[1]:_,void 0==n?_:_?"Rp "+_:""};