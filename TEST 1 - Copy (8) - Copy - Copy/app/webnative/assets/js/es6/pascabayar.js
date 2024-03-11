let data=[],dynamic_form_1="",pin="",panchi="",config="";const nominal=document.querySelector(".nominal"),headtitle=document.getElementById("head-title"),main_input=document.getElementById("main-input"),outer_dynamic_form=document.getElementById("dynamic-form"),setup_footer_button=document.getElementById("setup-footer-button"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),outter_check_out=document.getElementById("outter-check-out"),outter_buy=document.getElementById("outter-buy"),total_pembelian=document.getElementById("total-pembelian"),total_bottom=document.getElementById("total-bottom"),header_pembelian=document.getElementById("header_pembelian");let element_kontak=document.getElementsByClassName("nomor");window.onload=function(){setupview(config=get_config(),data=get_produk())};const get_config=()=>{try{Android.log(Android.getConfig());let $=JSON.parse(Android.getConfig());return $}catch(a){Android.log(a)}},get_produk=()=>{let $="";try{return $=JSON.parse(Android.getJsonProduk())}catch(a){Android.log(a)}},setupview=($,a)=>{let t=$.settingTujuan.hint,e="",_="",n=3,r="",o="",l="",i="",d="",s=$.settingProses.is_cek;$.settingProses.isVoucher;let c=$.settingProses.isFavorit,p=$.settingProses.isTerjadwal,u=$.settingTujuan.isKontak,h=$.settingTujuan.isScan,m=$.settingTujuan.tipe,v=$.settingTujuan.title,g=$.keterangan,f="",b="",k="",y="";a.detail.map($=>{b=$.exp,k=$.harga,y=$.kode,f=$.produk}),headtitle.innerHTML=g,e="numeric"===m?"numeric":"text",!0===c&&(_=`
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
        `),!0===p&&(o=`<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">
        <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">
          <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>
          <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">
            <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>
            <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>
          </g>
        </g>
      </svg>`),r=`<div class="col-${n} px-0 d-flex justify-content-around align-self-center">
        ${_}${o}
    </div>
    `;let x=`${_}${o}`;h?(l=`<span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">
          <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
              <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
          </svg>
        </span>`,!0===u&&(l=`<span id="labelContact" onclick="kontak(this)" class="input-group-text bg-transparent border-start-0 py-1 px-2" id="labelContact">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">
              <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
                <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
              </g>
            </svg>
          </span>
          <span class="input-group-text border-radius-right-8" id="labelScan" onclick="scan(this)">
               <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
                    <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
                </svg>
          </span>`)):l=`
        <span class="input-group-text border-radius-right-8" id="labelScan" onclick="kontak(this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">
            <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
              <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
            </g>
          </svg>
        </span>`,dynamic_form_1=`<div class="col-12 mt-2 dynamic-form">
        <div class="multi">
            <div class="row">
                <div class="col-6">
                <p id="label-nomor" class="text-secondary font-large">${v}</p>
                </div>
                <div class="col-6 text-end">
                <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
                </div>
                <div class="col-12 pt-1">
                <div class="input-group mb-1">
                <input type="text" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-dark nomor" placeholder="${t}" aria-label="Nomor User" inputmode="${e}"  aria-describedby="inptNomor" autocomplete="off" />
                ${l}
                </div>
                <p class="font-normal error_number text-red mb-2"></p>
                </div>
                <div class="col-12">
                <p id="label-nomor" class="text-secondary font-large">Nama Produk</p>
                </div>
                <div class="col-12 pt-1">
                  <div class="input-group mb-1">
                    <input type="text" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-dark produk" aria-label="Nominal" aria-describedby="inptproduk" autocomplete="off" value="${f}" readonly data-produk="${f}" data-harga="${k}" data-kode="${y}" data-exp="${b}"/>
                    <span class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8 text-orange">
                      ${b}
                    </span>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>`,!0===s&&(d=`<button id="set_nominal" onclick="rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white" onclick="cek()">
            Lanjut
        </button>`),i=`<div class="col-12 px-1">
    ${d}
    </div>
    `,total_bottom.innerHTML=`(${formatRupiah(Math.abs(k),"Rp. ")})`,outer_dynamic_form.innerHTML=dynamic_form_1,setup_footer_button.innerHTML=i,favorit_kode_voucher_terjadwal.innerHTML+=x,offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianPembelian"))},set_kontak=$=>{element_kontak[0].value=$},kontak=$=>{try{element_kontak="",Android.get_kontak(),element_kontak=$.parentNode.querySelector(".nomor")}catch(a){}},scan=$=>{try{element_kontak="",Android.get_kontak_scan(),element_kontak=$.parentNode.querySelector(".nomor")}catch(a){}},favorite=()=>{pembelian=[];let $=document.querySelector(".nomor"),a=document.querySelector(".produk"),t={tujuan:$.value,kode_produk:a.dataset.kode};pembelian.push(t);try{Android.setFavorite(JSON.stringify(pembelian))}catch(e){}},terjadwal=()=>{try{Android.setFckingTerjadwal("Coming Soon")}catch($){}},value_cek=$=>{try{Android.log($),$=JSON.parse($),panchi="";let a="",t="";panchi={pancigedhe:[]},header_pembelian.textContent=$.header_pembelian,$.rincian_pembelian.map($=>{let t={kode:$.kode_produk,tujuan:$.value_tujuan};panchi.pancigedhe.push(t),a+=`<div class="row check-out mb-1">
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${$.value_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_nama_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${$.value_nama_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_admin}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah($.value_admin,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah($.value_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_total_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah($.value_total_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${$.title_tujuan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${$.value_tujuan}</p>
        </div>
        <div class="col-12 mt-1">
          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${$.xp}</span>${$.keterangan}</p>
        </div>
      </div>`}),outter_check_out.innerHTML=a,t=`
      <div class="col-12">
        <hr>
      </div>
      <div class="col-12 mb-1">
        <p class="fw-bold font-large-1">${$.header_pembayaran}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${$.detail_pembayaran.title_saldo_awal}</p>
      </div>
      <div class="col-8 text-end mb-1">
        <p id="saldo-awal" class="font-large text-secondary">${formatRupiah($.detail_pembayaran.value_saldo_awal,"Rp. ")}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${$.detail_pembayaran.title_harga_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-dark">(${formatRupiah($.detail_pembayaran.value_harga_produk,"Rp. ")})</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${$.detail_pembayaran.title_saldo_akhir}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p id="saldo-akhir" class="font-large text-dark">${"string"==typeof $.detail_pembayaran.value_saldo_akhir?$.detail_pembayaran.value_saldo_akhir:formatRupiah($.detail_pembayaran.value_saldo_akhir,"Rp. ")}</p>
      </div>
    `,outter_buy.innerHTML=t,total_bayar.textContent=formatRupiah($.detail_pembayaran.value_harga_produk,"Rp. "),offcanvas_rincian_pembeilan.show()}catch(e){Android.log("error_log"+e)}},rincian_pembelian=()=>{let $=main_input.querySelector(".nomor").value,a=main_input.querySelector(".produk").value,t=main_input.querySelector(".error_number"),e=main_input.querySelector(".produk").dataset.kode,_=main_input.querySelector(".produk").dataset.exp,n=main_input.querySelector(".produk").dataset.harga,r=config.judul;$.length>0?(t.classList.add("d-none"),cek_tagihan($,a,e,_,n,r)):(t.innerHTML="Isi ID pelanggan dulu",t.classList.remove("d-none"))},cek_tagihan=($,a,t,e,_,n)=>{try{t=t.replace("BYR","CEK");let r={tujuan:$,produk:a,harga:_,kode_produk:t,exp:e,title:n};Android.sendNudes(JSON.stringify(r))}catch(o){console.log(o)}},bayar=()=>{try{Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch($){}},isNumber=($,a)=>{main_input.querySelector(".error_number").classList.add("d-none");if("numeric"===a.getAttribute("inputmode")){var t=($=$||window.event).which?$.which:$.keyCode;if(t>31&&(t<48||t>57))return!1}return!0},formatRupiah=($,a)=>{var t,e=($="string"==typeof $?$:$.toString()).replace(/[^,\d]/g,"").toString().split(","),_=e[0].length%3,n=e[0].substr(0,_),r=e[0].substr(_).match(/\d{3}/gi);return r&&(n+=(_?".":"")+r.join(".")),"string"==typeof $?0>parseInt($)&&(n="-"+n):$<0&&(n="-"+n),n=void 0!=e[1]?n+","+e[1]:n,void 0==a?n:n?"Rp "+n:""};