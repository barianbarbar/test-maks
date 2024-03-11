"use strict";var data=[],config="",produk=[],dynamic_form_1="",height_screen="",element_kontak=document.getElementsByClassName("nomor"),headtitle=document.getElementById("head-title"),outer_dynamic_form=document.getElementById("dynamic-form"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),setup_footer_button=document.getElementById("setup-footer-button"),footer=document.getElementById("footer"),outter_check_out=document.getElementById("outter-check-out"),outter_buy=document.getElementById("outter-buy"),checkbox_pin=document.getElementById("switchMaterial"),main_input=document.getElementById("main-input"),potongan=document.getElementById("total-bottom"),header_pembelian=document.getElementById("header_pembelian"),outter_produk=document.getElementById("outter-produk"),form_pin=document.getElementById("pin"),title_total=document.getElementById("title-total"),offcanvas_produk=new bootstrap.Offcanvas(document.getElementById("offcanvasPDAM")),offcanvas_rincian_pembeilan="",panchi="",temp_produk="",pin="";window.onload=function(){config=get_config(),data=get_produk(),get_pin(),setupview(config,data),height_screen=window.innerHeight},window.addEventListener("resize",function(){window.innerHeight>=height_screen?add_footer():remove_footer()});var get_pin=function a(){try{pin=Android.get_pin(),""==pin?(checkbox_pin.checked=!0,checkbox_pin.readOnly=!1):(form_pin.readOnly=!0,checkbox_pin.checked=!1,form_pin.value=pin)}catch(e){Android.log(e)}},setup_pin=function a(e){""==e?(checkbox_pin.checked=!0,checkbox_pin.readOnly=!1):(form_pin.readOnly=!0,checkbox_pin.checked=!1,form_pin.value=e)},changepin=function a(e){if(!0==e.checked)Android.reset_pin(),form_pin.readOnly=!1,form_pin.value="";else{var t=form_pin.value;!0==Android.set_pin(t,6)?(form_pin.readOnly=!0,e.checked=!1):(form_pin.readOnly=!1,e.checked=!0)}},get_produk=function a(){var e="";try{return e=JSON.parse(Android.getJsonProduk())}catch(t){Android.log(t)}},get_config=function a(){try{return JSON.parse(Android.getConfig())}catch(e){Android.log(e)}},setup_produk=function a(e){var t=data[0].detail.filter(function(a){return a.produk.toLowerCase().includes(e.toLowerCase())}),n="",$="";t.map(function(a){$="",a.kode==temp_produk&&($='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg text-success" viewBox="0 0 16 16">\n        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>\n      </svg>'),n+='<div class="bg-white py-3 px-0 border-bottom" onclick="set_produk(this)">\n      <div class="row"> \n        <div class="col-10">\n          <p class="text-secondary font-large fw-500" data-kode=\''.concat(a.kode,"' data-produk ='").concat(a.produk,"' data-xp='").concat(a.exp,"' data-harga='").concat(a.harga,"'>").concat(a.produk,'</p> \n        </div>\n        <div class="col-2 text-center">\n          ').concat($,"\n        </div>\n      </div>\n    </div>")}),outter_produk.innerHTML=n},set_produk=function a(e){var t=e.querySelector("p"),n=t.dataset.kode,$=t.dataset.produk,o=t.dataset.harga,r=t.dataset.xp;temp_produk=n;var i=document.querySelector(".wilayah");i.dataset.kode=n,i.dataset.produk=$,i.dataset.harga=o,i.dataset.exp=r,i.value=$,offcanvas_produk.hide()},find_wilayah=function a(e){setup_produk(e.value)},setupview=function a(e,t){var n=t[0].detail[0].exp,$=e.settingTujuan.hint,o="",r="",i="",l="",c=e.settingProses.is_cek,d="",s="",_="";e.settingProses.isVoucher;var p=e.settingProses.isFavorit,u=e.settingProses.isTerjadwal,h=e.settingTujuan.isKontak,m=e.settingTujuan.isScan,v=e.settingTujuan.tipe,g=e.settingTujuan.title,f=e.keterangan;title_total.innerHTML=e.settingProses.title,headtitle.innerHTML=f,o="numeric"===v?"numeric":"text",!0===p&&(r='\n        <svg onclick="favorite()" id="Layer_x0020_1" class="me-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 38.232 38.232">\n        <defs>\n          <clipPath id="clip-path">\n            <path id="Path_80" data-name="Path 80" d="M0,0H38.232V38.232H0Z" fill="#f37021" clip-rule="evenodd"/>\n          </clipPath>\n        </defs>\n        <g id="Group_62" data-name="Group 62" clip-path="url(#clip-path)">\n          <g id="Group_61" data-name="Group 61" transform="translate(0.439 0.439)">\n            <path id="Path_79" data-name="Path 79" d="M18.725.047A18.678,18.678,0,1,1,5.518,5.518,18.62,18.62,0,0,1,18.725.047Zm10.644,16c-.311-3.432-2.74-5.921-5.78-5.921a5.749,5.749,0,0,0-4.922,2.836,5.536,5.536,0,0,0-4.8-2.836c-3.041,0-5.47,2.489-5.781,5.921a3.309,3.309,0,0,0-.036.486v.122A7.568,7.568,0,0,0,8.261,18.3a9.636,9.636,0,0,0,2.959,4.934l7.441,6.754,7.568-6.752A9.655,9.655,0,0,0,29.188,18.3a6.124,6.124,0,0,0,.18-2.251Z" transform="translate(-0.047 -0.047)" fill="#f37021" fill-rule="evenodd"/>\n          </g>\n        </g>\n        <path id="Path_81" data-name="Path 81" d="M0,0H38.232V38.232H0Z" fill="none" fill-rule="evenodd"/>\n      </svg>\n        '),!0===u&&(s='<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">\n        <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">\n          <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>\n          <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">\n            <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>\n            <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>\n          </g>\n        </g>\n      </svg>'),d='<div class="col-'.concat(3,' px-0 d-flex justify-content-around align-self-center">\n        ').concat(r).concat(s,"\n    </div>\n    ");var y="".concat(r).concat(s),k="";m?(_='<span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">\n        <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">\n            <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>\n        </svg>\n        </span>',!0===h&&(_='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889"  onclick="kontak(this)">\n            <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">\n              <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>\n            </g>\n          </svg>\n            <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">\n                <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>\n            </svg>')):!0===h?_='\n          <span class="input-group-text border-radius-right-8" id="labelContact">\n              <img src="./assets/images/icon/Layer_x-15.png"  width="20" height="20" alt="scan" />\n          </span>':(_="",k="border-radius-right-8"),dynamic_form_1='<div class="col-12 mt-2 dynamic-form">\n    <div class="multi">\n        <div class="row">\n            <div class="col-6">\n            <p id="label-nomor" class="text-secondary font-large">'.concat(g,'</p>\n            </div>\n            <div class="col-6 text-end">\n            <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>\n            </div>\n            <div class="col-12 pt-1 mb-2">\n            <div class="input-group">\n            <input type="text" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="').concat($,'" aria-label="Nomor User" inputmode="').concat(o,'"  aria-describedby="inptNomor" autocomplete="off" />\n            <span class="input-group-text text-orange bg-transparent ').concat(k,'">\n              ').concat(n,"\n            </span>\n            ").concat(_,'\n            </div>\n            <p id="label-nomor" class="text-red font-large error_number d-none">error</p>\n            </div>\n            <div class="col-12">\n            <p id="label-nomor" class="text-secondary font-large">Wilayah</p>\n            </div>\n            <div class="col-12 pt-1">\n                <div class="input-group" onclick="get_wilayah(this)">\n                  <input id="wilayah" type="text" placeholder="Pilih Wilayah" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal wilayah" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off" readonly data-produk="" data-harga="" data-kode="" data-exp=""/>\n                  <span class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8" id="labelContact">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">\n                        <g id="Group_4703" data-name="Group 4703" transform="translate(0 25) rotate(-90)">\n                        <rect id="Rectangle_492" data-name="Rectangle 492" width="25" height="25" fill="none"/>\n                        <g id="Layer_x0020_1" transform="translate(5)">\n                            <path id="Path_619" data-name="Path 619" d="M14.944,22.331,12.208,25,0,12.49,12.208,0l2.735,2.669-9.6,9.82Z" fill="#484646" fill-rule="evenodd"/>\n                        </g>\n                        </g>\n                    </svg>\n                  </span>\n                </div>\n            <p id="label-nomor" class="text-red font-large error_wilayah d-none">error</p>\n        </div>\n    </div>\n    </div>'),!0===c&&(l='<button id="set_nominal" onclick="rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white" onclick="cek()">\n            '.concat(e.settingProses.proses_string,"\n        </button>")),i='<div class="col-12">\n    '.concat(l,"\n    </div>\n    "),outer_dynamic_form.innerHTML+=dynamic_form_1,setup_footer_button.innerHTML+=i,favorit_kode_voucher_terjadwal.innerHTML+=y,offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianPembelian"))},set_kontak=function a(e){element_kontak[0].value=e},kontak=function a(e){try{element_kontak="",Android.get_kontak(),element_kontak=e.parentNode.querySelector(".nomor")}catch(t){}},scan=function a(e){try{element_kontak="",Android.get_kontak_scan(),element_kontak=e.parentNode.querySelector(".nomor")}catch(t){}},favorite=function a(){pembelian=[];var e=document.querySelector(".nomor"),t=document.querySelector(".wilayah"),n={tujuan:e.value,kode_produk:t.dataset.kode};pembelian.push(n);try{Android.setFavorite(JSON.stringify(pembelian))}catch($){}},terjadwal=function a(){try{Android.setFckingTerjadwal("Coming Soon")}catch(e){}},remove_footer=function a(){footer.classList.add("d-none")},add_footer=function a(){footer.classList.remove("d-none")},get_wilayah=function a(e){document.getElementById("labelsearch").parentNode.children[1].value="";var t=main_input.querySelector(".nomor").value,n=main_input.querySelector(".error_number");t.length>0?(offcanvas_produk.show(),setup_produk("")):(n.classList.remove("d-none"),n.innerHTML="Isi nomor id pelanggan lebih dulu")},rincian_pembelian=function a(){var e=main_input.querySelector(".nomor").value,t=main_input.querySelector(".wilayah").value,n=main_input.querySelector(".error_number"),$=main_input.querySelector(".wilayah").dataset.kode,o=main_input.querySelector(".wilayah").dataset.exp,r=main_input.querySelector(".wilayah").dataset.harga,i=config.judul,l=main_input.querySelector(".error_wilayah");e.length>0?""!=$?cek_tagihan(e,t,$,o,r,i):(l.classList.remove("d-none"),l.innerHTML="Data wilayah tidak ditemukan"):(n.classList.remove("d-none"),n.innerHTML="Isi nomor id pelanggan lebih dulu")},value_cek=function a(e){try{Android.log("test"+e),e=JSON.parse(e),panchi="";var t="",n="";panchi={pancigedhe:[],pincok:""},header_pembelian.textContent=e.header_pembelian,e.rincian_pembelian.map(function(a){var e={kode:a.kode_produk,tujuan:a.value_tujuan};panchi.pancigedhe.push(e),t+='<div class="row check-out mb-1">\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">'.concat(a.title_produk,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_produk,'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_nama_produk,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_nama_produk,'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_admin,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_admin,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_tagihan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_tagihan,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_total_tagihan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(formatRupiah(a.value_total_tagihan,"Rp. "),'</p>\n        </div>\n        <div class="col-4 mb-1">\n          <p class="font-large text-secondary">').concat(a.title_tujuan,'</p>\n        </div>\n        <div class="col-8 mb-1 text-end">\n          <p class="font-large text-secondary">').concat(a.value_tujuan,'</p>\n        </div>\n        <div class="col-12 mt-1">\n          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">').concat(a.xp,"</span>").concat(a.keterangan,"</p>\n        </div>\n      </div>")}),outter_check_out.innerHTML=t,n='\n      <div class="col-12">\n        <hr>\n      </div>\n      <div class="col-12 mb-1">\n        <p class="fw-bold font-large-1">'.concat(e.header_pembayaran,'</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat(e.detail_pembayaran.title_saldo_awal,'</p>\n      </div>\n      <div class="col-8 text-end mb-1">\n        <p id="saldo-awal" class="font-large text-secondary">').concat(formatRupiah(e.detail_pembayaran.value_saldo_awal,"Rp. "),'</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat(e.detail_pembayaran.title_harga_produk,'</p>\n      </div>\n      <div class="col-8 mb-1 text-end">\n        <p class="font-large text-dark">(').concat(formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. "),')</p>\n      </div>\n      <div class="col-4 mb-1">\n        <p class="font-large text-secondary">').concat(e.detail_pembayaran.title_saldo_akhir,'</p>\n      </div>\n      <div class="col-8 mb-1 text-end">\n        <p id="saldo-akhir" class="font-large text-dark">').concat("string"==typeof e.detail_pembayaran.value_saldo_akhir?e.detail_pembayaran.value_saldo_akhir:formatRupiah(e.detail_pembayaran.value_saldo_akhir,"Rp. "),"</p>\n      </div>\n    "),outter_buy.innerHTML=n,total_bayar.textContent=formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. "),offcanvas_rincian_pembeilan.show()}catch($){Android.log("error_log"+$)}},bayar=function a(){try{panchi.pincok=form_pin.value,Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch(e){}},cek_tagihan=function a(e,t,n,$,o,r){try{n=n.replace("BYR","CEK");var i={tujuan:e,produk:t,harga:o,kode_produk:n,exp:$,title:r};Android.sendNudes(JSON.stringify(i))}catch(l){}},formatRupiah=function a(e,t){var n=(e="string"==typeof e?e:e.toString()).replace(/[^,\d]/g,"").toString().split(","),$=n[0].length%3,o=n[0].substr(0,$),r=n[0].substr($).match(/\d{3}/gi);return r&&(o+=($?".":"")+r.join(".")),"string"==typeof e?0>parseInt(e)&&(o="-"+o):e<0&&(o="-"+o),o=void 0!=n[1]?o+","+n[1]:o,void 0==t?o:o?"Rp "+o:""},autocomplete=function a(e,t){try{e.addEventListener("input",function(a){main_input.querySelector(".error_wilayah").classList.add("d-none"),e.dataset.kode="",e.dataset.exp="",e.dataset.harga="";var n,r,i,l=this.value;if(o(),!l)return!1;for($=-1,(n=document.createElement("DIV")).setAttribute("id",this.id+"autocomplete-list"),n.setAttribute("class","autocomplete-items"),n.style.zIndex="9999",this.parentNode.appendChild(n),i=0;i<t.length;i++){var c=t[i].produk.toUpperCase().includes(l.toUpperCase());if(!0===c){r=document.createElement("DIV");var d=t[i].produk.toUpperCase().search(l.toUpperCase()),s=t[i].produk.substr(d,l.length);r.innerHTML+=t[i].produk.replace(s,"<strong>".concat(s,"</strong>")),r.innerHTML+="<input type='hidden' data-kode='".concat(t[i].kode,"' data-exp='").concat(t[i].exp,"' data-harga='").concat(t[i].harga,"' value='").concat(t[i].produk,"'>"),r.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),e.value=this.getElementsByTagName("input")[0].value,e.dataset.kode=this.getElementsByTagName("input")[0].dataset.kode,e.dataset.exp=this.getElementsByTagName("input")[0].dataset.exp,e.dataset.harga=this.getElementsByTagName("input")[0].dataset.harga,potongan.innerHTML="(".concat(formatRupiah(Math.abs(this.getElementsByTagName("input")[0].dataset.harga),"Rp. "),")"),o()}),n.appendChild(r)}}})}catch(n){}var $,o=function a(t){for(var n=document.getElementsByClassName("autocomplete-items"),$=0;$<n.length;$++)t!=n[$]&&t!=e&&n[$].parentNode.removeChild(n[$])}},isNumber=function a(e,t){if(main_input.querySelector(".error_number").classList.add("d-none"),"numeric"===t.getAttribute("inputmode")){var n=(e=e||window.event).which?e.which:e.keyCode;if(n>31&&(n<48||n>57))return!1}return!0};