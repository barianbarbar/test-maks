let data=[],config="",dynamic_form_1="",dynamic_form_2="",dynamic_form_3="",data_dynamic=[],temp_valueproduk=[],pembelian=[],is_hlr="",dynamic=1,nominal_tag="",element_kontak="",find_hlr=!1;const nomor=document.getElementsByClassName("nomor"),nominal=document.getElementsByClassName("nominal"),headtitle=document.getElementById("head-title"),main_input=document.getElementById("main-input"),outer_dynamic_form=document.getElementById("dynamic-form"),outer_produk=document.getElementById("outter-produk"),footer=document.getElementById("footer"),total_bottom=document.getElementById("total-bottom"),kode_vouher=document.getElementById("kode-voucher"),outter_check_out=document.getElementById("outter-check-out"),outter_buy=document.getElementById("outter-buy"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),checkbox_pin=document.getElementById("switchMaterial"),proses_nudes=document.getElementById("set_prosess"),proses_nominal=document.getElementById("set_nominal"),header_pembelian=document.getElementById("header_pembelian"),total_bayar=document.getElementById("total_bayar"),button_add_form=document.getElementById("add-form");let offcanvas_rincian_pembeilan="",offcanvas_harga="",offcanvasRincianMultitrx="",panchi="";window.onload=function(){config=get_config(),data=get_produk(),setupview(config)};const get_produk=()=>{let a="";try{return a=JSON.parse(Android.getJsonProduk())}catch(b){}},get_config=()=>{try{let a=JSON.parse(Android.getConfig());return a}catch(b){Android.log(b)}},setupview=a=>{let d=a.settingTujuan.hint,c="",g="",h="";is_hlr=a.settingTujuan.isHlr;let b="";a.settingProses.isVoucher;let i=a.settingProses.isFavorit,j=a.settingProses.isTerjadwal,k=a.settingTujuan.isKontak,l=a.settingTujuan.isScan,m=a.settingTujuan.tipe,e=a.settingTujuan.title,f=a.settingNominal.title,n=a.keterangan;headtitle.innerHTML=n,proses_nudes.textContent=a.settingProses.proses_string,offcanvas_harga=new bootstrap.Offcanvas(document.getElementById("offcanvasHarga")),c="numeric"===m?"numeric":"text",!0===i&&(g=`
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
    `),!0===j&&(h=`<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">
    <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">
      <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>
      <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">
        <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>
        <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>
      </g>
    </g>
  </svg>`);let o=`${g}${h}`;l?(b=`<span class="input-group-text border-radius-right-8" id="labelContact" onclick="kontak(this)" >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889"  onclick="kontak(this)">
      <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
        <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
      </g>
      </svg>
    </span>`,!0===k&&(b=`<span id="labelContact" onclick="kontak(this)" class="input-group-text bg-transparent border-start-0 py-1 px-2" id="labelContact">
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
      </span>`)):b=`
      <span class="input-group-text border-radius-right-8" id="labelContact" onclick="kontak(this)" >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889"  onclick="kontak(this)">
        <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
          <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
        </g>
        </svg>
      </span>`;let p=`<div class="col-6 pb-2">
      <p class="font-large text-light-blue" onclick="multi_keterangan()">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22.818 22.818">
        <g id="Group_3601" data-name="Group 3601" transform="translate(-605 -788)">
          <g id="Path_1137" data-name="Path 1137" transform="translate(605 788)" fill="#fff">
            <path d="M 11.40908813476562 21.81817817687988 C 5.669497966766357 21.81817817687988 0.999998152256012 17.14867782592773 0.999998152256012 11.40908813476562 C 0.999998152256012 5.669497966766357 5.669497966766357 0.999998152256012 11.40908813476562 0.999998152256012 C 17.14867782592773 0.999998152256012 21.81817817687988 5.669497966766357 21.81817817687988 11.40908813476562 C 21.81817817687988 17.14867782592773 17.14867782592773 21.81817817687988 11.40908813476562 21.81817817687988 Z" stroke="none"/>
            <path d="M 11.40908813476562 1.999998092651367 C 6.220897674560547 1.999998092651367 1.999998092651367 6.220897674560547 1.999998092651367 11.40908813476562 C 1.999998092651367 16.5972785949707 6.220897674560547 20.81817817687988 11.40908813476562 20.81817817687988 C 16.5972785949707 20.81817817687988 20.81817817687988 16.5972785949707 20.81817817687988 11.40908813476562 C 20.81817817687988 6.220897674560547 16.5972785949707 1.999998092651367 11.40908813476562 1.999998092651367 M 11.40908813476562 -1.9073486328125e-06 C 17.71014785766602 -1.9073486328125e-06 22.81817817687988 5.10801887512207 22.81817817687988 11.40908813476562 C 22.81817817687988 17.71014785766602 17.71014785766602 22.81817817687988 11.40908813476562 22.81817817687988 C 5.10801887512207 22.81817817687988 -1.9073486328125e-06 17.71014785766602 -1.9073486328125e-06 11.40908813476562 C -1.9073486328125e-06 5.10801887512207 5.10801887512207 -1.9073486328125e-06 11.40908813476562 -1.9073486328125e-06 Z" stroke="none" fill="#61c6db"/>
          </g>
          <path id="Path_917" data-name="Path 917" d="M4.462-14.222a1.362,1.362,0,0,1,1.008.415,1.375,1.375,0,0,1,.41,1,1.367,1.367,0,0,1-.415,1,1.367,1.367,0,0,1-1,.415,1.355,1.355,0,0,1-.994-.415,1.367,1.367,0,0,1-.415-1,1.375,1.375,0,0,1,.41-1A1.351,1.351,0,0,1,4.462-14.222Zm.6,4.437L3.083-2.927a3.792,3.792,0,0,0-.164.772.283.283,0,0,0,.087.2.253.253,0,0,0,.183.092.5.5,0,0,0,.328-.145A5.9,5.9,0,0,0,4.559-3.3l.328.193Q3.43-.573,1.79-.573a1.391,1.391,0,0,1-1-.352A1.177,1.177,0,0,1,.42-1.817a3.311,3.311,0,0,1,.164-.907L1.925-7.335a3.983,3.983,0,0,0,.193-1,.493.493,0,0,0-.183-.376.725.725,0,0,0-.5-.164q-.145,0-.347.01l.125-.386,3.27-.531Z" transform="translate(613.453 806.659)" fill="#61c6db"/>
        </g>
      </svg> Multi transaksi</p>
      </div>
      <div class="col-6 pb-2 text-end">
          <button class="bg-transparent p-0 btn btn-small font-large text-orange delete-dynamic" onclick="remove_form(this)">Hapus X</button>
      </div>`,q=`
    <div class="col-12 pb-2 text-end">
        <button class="bg-transparent p-0 btn btn-small font-large text-orange delete-dynamic" onclick="remove_form(this)">Hapus X</button>
    </div>`;dynamic_form_1=`<div class="col-12 mt-2 dynamic-form">
      <div class="multi">
          <div class="row">
              <div class="col-6">
              <p id="label-nomor" class="text-secondary font-large">${e}</p>
              </div>
              <div class="col-6 text-end">
              <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
              </div>
              <div class="col-12 mb-1 pt-1">
              <div class="input-group mb-1">
              <input type="text" onpaste="setup_auto_complete(this,'paste');" onkeyup="setup_auto_complete(this);" maxlength="15" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="${d}" aria-label="Nomor User" inputmode="${c}"  aria-describedby="inptNomor" autocomplete="off" />
              ${b}
              </div>
              <p class="font-normal hlr-notfound text-red mb-2 d-none"></p>
              </div>
              <div class="col-12">
              <p id="label-nomor" class="text-secondary font-large">${f}</p>
              </div>
              <div class="col-12 pt-1">
              <div class="input-group" onclick="off_harga(this)">
              <input type="text" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off" readonly data-produk="" data-harga="" data-kode="" data-exp=""/>
              <span id="nominalContact" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8" id="labelContact">
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
              <p class="font-normal produk-notfound text-red mb-2 d-none"></p>
              </div>
          </div>
      </div>
  </div>`,dynamic_form_2=`<div class="col-12 mt-2 dynamic-form">
      <div class="multi">
          <div class="row">
              ${p}
              <div class="col-6">
              <p id="label-nomor" class="text-secondary font-large">${e}</p>
              </div>
              <div class="col-6 text-end">
              <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
              </div>
              <div class="col-12 mb-1 pt-1">
              <div class="input-group mb-1">
              <input type="text" onpaste="setup_auto_complete(this,'paste');" onkeyup="setup_auto_complete(this);" maxlength="15" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="${d}" aria-label="Nomor User" inputmode="${c}"  aria-describedby="inptNomor" autocomplete="off" />
              ${b}
              </div>
              <p class="font-normal hlr-notfound text-red d-none"></p>
              </div>
              <div class="col-12">
              <p id="label-nomor" class="text-secondary font-large">${f}</p>
              </div>
              <div class="col-12 pt-1">
              <div class="input-group" onclick="off_harga(this)">
              <input type="text" class="form-control bg-white border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nominal" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off" readonly data-produk="" data-harga="" data-kode="" data-exp=""/>
              <span id="nominalContact" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8" id="labelContact">
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
              <p class="font-normal produk-notfound text-red mb-2 d-none"></p>
              </div>
          </div>
      </div>
  </div>`,dynamic_form_3=`<div class="col-12 mt-2 dynamic-form">
      <div class="multi">
          <div class="row">
              ${q}
              <div class="col-6">
              <p id="label-nomor" class="text-secondary font-large">${e}</p>
              </div>
              <div class="col-6 text-end">
              <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
              </div>
              <div class="col-12 mb-1 pt-1">
              <div class="input-group mb-1">
              <input type="text" onpaste="setup_auto_complete(this,'paste');" onfocus="scrollbottom(this)" maxlength="15" onkeyup="setup_auto_complete(this);" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="${d}" aria-label="Nomor User" inputmode="${c}"  aria-describedby="inptNomor" autocomplete="off" />
              ${b}
              </div>
              <p class="font-normal hlr-notfound text-red mb-2 d-none"></p>
              </div>
              <div class="col-12">
              <p id="label-nomor" class="text-secondary font-large">${f}</p>
              </div>
              <div class="col-12 pt-1">
              <div class="input-group" onclick="off_harga(this)">
              <input type="text" class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off" readonly data-produk="" data-harga="" data-kode="" data-exp=""/>
              <span id="nominalContact" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8" id="labelContact">
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
              <p class="font-normal produk-notfound text-red mb-2 d-none"></p>
              </div>
          </div>
      </div>
  </div>`,outer_dynamic_form.innerHTML+=dynamic_form_1,favorit_kode_voucher_terjadwal.innerHTML+=o},set_kontak=a=>{element_kontak.value=a,setup_auto_complete(element_kontak,"konscan")},kontak=a=>{try{element_kontak="",Android.get_kontak(),element_kontak=a.parentNode.querySelector(".nomor")}catch(b){}},scan=a=>{try{element_kontak="",Android.get_kontak_scan(),element_kontak=a.parentNode.querySelector(".nomor")}catch(b){}},scrollbottom=a=>{setTimeout(()=>{let b=a.getBoundingClientRect().y,c=a.parentNode.parentNode.parentNode.querySelector(".delete-dynamic"),d=window.innerHeight-document.getElementById("footer-height").offsetHeight-a.getBoundingClientRect().height;b>d&&c.scrollIntoView({behavior:"smooth"})},300)},setup_auto_complete=(a,g)=>{let e=a.value.length,b=a.parentNode.parentNode.querySelector(".hlr-notfound"),j=a.parentNode.parentNode.parentNode.querySelector(".operator-label"),f=a.parentNode.parentNode.parentNode.querySelector(".nominal");if(is_hlr){if("konscan"==g){let c=a.value;"62"==a.value.substring(0,2)&&(c=`0${a.value.slice(2)}`,a.value=c);let h=cek_hlr(c,"change");0!=h.length?h.map(a=>{let{operator:c}=a;j.innerHTML=c,b.classList.add("d-none"),reset_nominal(f)}):(reset_nominal(f),c.length>3&&(b.classList.remove("d-none"),b.innerHTML="Operator tidak di temukan"))}else if("paste"==g)setTimeout(()=>{let c=a.value;"62"==a.value.substring(0,2)&&(c=`0${a.value.slice(2)}`,a.value=c);let d=cek_hlr(c,"change");0!=d.length?d.map(a=>{let{operator:c}=a;j.innerHTML=c,b.classList.add("d-none"),reset_nominal(f)}):(reset_nominal(f),c.length>3&&(b.classList.remove("d-none"),b.innerHTML="Operator tidak di temukan"))},100);else if(e>3&&e<=5){let d=a.value;"62"==a.value.substring(0,2)&&(d=`0${a.value.slice(2)}`,a.value=d);let i=cek_hlr(d,"change");0!=i.length?i.map(a=>{let{operator:c}=a;j.innerHTML=c,b.classList.add("d-none"),reset_nominal(f)}):(reset_nominal(f),d.length>3&&(b.classList.remove("d-none"),b.innerHTML="Operator tidak di temukan"))}else e<=3&&(reset_nominal(f),b.classList.add("d-none"),j.innerHTML="")}},reset_nominal=a=>{a.value="",a.dataset.produk="",a.dataset.kode="",a.dataset.exp="",a.dataset.harga="",footer.classList.add("d-none")},cek_hlr=(d,b)=>{let a=data,c=[];return"change"===b?a.map(a=>{a.hlr.split(",").map(b=>{!0===d.includes(b)&&c.push(a)})}):a.map(a=>{a.hlr.split(",").map(b=>{d===b&&c.push(a)})}),c},off_harga=a=>{if(a.parentNode.parentNode.querySelector(".nomor").value.length>=4){offcanvas_harga.show();let c=a.parentNode.parentNode.querySelector(".nomor");nominal_tag=a.querySelector(".nominal");let b=cek_hlr(c.value.substr(0,5),"change");b.length>1&&(b=cek_hlr(c.value.substr(0,5),"click")),setup_view_harga(b,a.querySelector(".nominal"))}},setup_view_harga=(b,d)=>{document.getElementById("set_nominal").disabled=!0,outer_produk.innerHTML="";let a=config.grid,c="";a=12/parseInt(a),b.map(b=>{let{detail:e}=b;e.map(b=>{let e="",f="",g="";0===d.value.length?(e="",f="",g=b.isPromo?"background-green":"background-gray"):(d.dataset.kode===b.kode?(e="border-orange",f="background-yellow-light",g=b.isPromo?"background-green":"background-orange",temp_valueproduk={produk:b.produk,price:b.harga,kode_produk:b.kode,exp:b.exp}):(e="",f="",g=b.isPromo?"background-green":"background-gray"),document.getElementById("set_nominal").disabled=!1),c+=`<div class="col-${a} mb-3" onclick="set_harga(this)">
                <div class="shadow-sm ${e} ${f} border-radius-8 h-100 mx-0 box-harga"> 
                    <div class="row gx-0">
                        <div class="col-12">
                            <span class="${g} tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${b.tag}</span>
                        </div>
                        <div class="col-12 py-2">
                            <p class="font-large-1 fw-bold text-dark ms-2 produk" data-produk="${b.produk}">${b.produk}</p>
                        </div>
                        <div class="col-7 py-2 pe-0">
                            <p class="font-large text-dark ms-2 price" data-harga="${b.harga}">${formatRupiah(b.harga,"Rp. ")}</p>
                        </div>
                        <div class="col-5 ps-0 pe-2 py-2 text-end">
                            <p class="text-orange font-large exp" data-exp="${b.exp}">${b.exp}</p>
                            <p class="text-orange font-large kode_produk d-none" data-kode="${b.kode}">${b.kode}</p>
                        </div>
                    </div>
                </div>
            </div>`})}),outer_produk.innerHTML=c},multi_keterangan=()=>{(offcanvasRincianMultitrx=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianMultitrx"))).show(),footer.classList.add("d-none")};document.getElementById("offcanvasRincianMultitrx").addEventListener("hidden.bs.offcanvas",function(){footer.classList.remove("d-none")});const set_harga=a=>{proses_nominal.disabled=!1;let e=a.querySelector(".tagging"),f=a.querySelector(".produk"),d=a.querySelector(".box-harga"),g=a.querySelector(".price"),h=a.querySelector(".exp"),i=a.querySelector(".kode_produk"),c=document.getElementsByClassName("box-harga");for(let b=0;b<c.length;b++)c[b].classList.remove("border-orange","background-yellow-light"),c[b].querySelector(".tagging").classList.remove("background-orange"),c[b].querySelector(".tagging").classList.add("background-gray");d.classList.contains("background-green")?d.classList.add("background-yellow-light","border-orange"):e.classList.remove("background-gray"),e.classList.add("background-orange"),d.classList.add("background-yellow-light","border-orange"),temp_valueproduk={produk:f.dataset.produk,price:g.dataset.harga,kode_produk:i.dataset.kode,exp:h.dataset.exp}},set_nominal=()=>{total_bottom.innerHTML="",nominal_tag.value=temp_valueproduk.produk,nominal_tag.dataset.produk=temp_valueproduk.produk,nominal_tag.dataset.harga=temp_valueproduk.price,nominal_tag.dataset.kode=temp_valueproduk.kode_produk,nominal_tag.dataset.exp=temp_valueproduk.exp;let c=nominal_tag.parentNode.parentNode.querySelector(".produk-notfound");c.classList.add("d-none"),footer.classList.remove("d-none"),offcanvas_harga.hide(),nominal_tag="",temp_valueproduk=[];let a=0;for(let b=0;b<nominal.length;b++)a+=parseInt(nominal[b].dataset.harga);a=formatRupiah(String(a),"Rp. "),total_bottom.innerHTML+=a},favorite=()=>{pembelian=[];let b=nomor.length;for(let a=0;a<b;a++){let c={tujuan:nomor[a].value,produk:nominal[a].dataset.produk,harga:parseInt(nominal[a].dataset.harga),kode_produk:nominal[a].dataset.kode,exp:nominal[a].dataset.exp,title:config.judul};pembelian.push(c)}try{Android.setFavorite(JSON.stringify(pembelian))}catch(d){}},terjadwal=()=>{try{Android.setFckingTerjadwal("Coming Soon")}catch(a){}},rincian_pembelian=()=>{outter_check_out.innerHTML="",pembelian=[],offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.getElementById("offcanvasRincianPembelian"));let e=nomor.length,b=!0,c=document.getElementsByClassName("hlr-notfound"),d=document.getElementsByClassName("produk-notfound");for(let a=0;a<e;a++){""===nomor[a].value&&(b=!1,c[a].classList.remove("d-none"),c[a].innerHTML="Isi nomornya dulu"),(""===nominal[a].value||""===nominal[a].dataset.produk)&&(b=!1,d[a].classList.remove("d-none"),d[a].innerHTML="Isi produknya dulu");let f={tujuan:nomor[a].value,produk:nominal[a].dataset.produk,harga:parseInt(nominal[a].dataset.harga),kode_produk:nominal[a].dataset.kode,exp:nominal[a].dataset.exp,title:config.judul};pembelian.push(f)}if(!0===b)try{let g=Android.sendNudes(JSON.stringify(pembelian));view_rincian_pembayaran(JSON.parse(g)),offcanvas_rincian_pembeilan.show()}catch(h){Android.log(h)}},view_rincian_pembayaran=a=>{panchi="";let c="",b="";panchi={pancigedhe:[]},header_pembelian.textContent=a.header_pembelian,a.rincian_pembelian.map(a=>{let b={kode:a.kode_produk,tujuan:a.value_tujuan};panchi.pancigedhe.push(b),c+=`<div class="row check-out mb-1">
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
        <p class="font-large text-secondary">${a.title_harga}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${formatRupiah(a.value_harga,"Rp. ")}</p>
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
    </div>`}),outter_check_out.innerHTML=c,b=`
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
      <p id="saldo-akhir" class="font-large text-dark">${formatRupiah(a.detail_pembayaran.value_saldo_akhir,"Rp. ")}</p>
    </div>
  `,outter_buy.innerHTML=b,total_bayar.textContent=formatRupiah(a.detail_pembayaran.value_harga_produk,"Rp. ")},bayar=()=>{try{Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch(a){}},isNumber=(a,c)=>{if("numeric"===c.getAttribute("inputmode")){var b=(a=a||window.event).which?a.which:a.keyCode;if(b>31&&(b<48||b>57))return!1}return!0},add_form=()=>{let b=!0;if(dynamic<5){4===dynamic&&button_add_form.classList.add("d-none");let e=nomor.length,c=document.getElementsByClassName("hlr-notfound"),d=document.getElementsByClassName("produk-notfound");for(let a=0;a<e;a++)""===nomor[a].value&&(b=!1,c[a].classList.remove("d-none"),c[a].innerHTML="Isi nomornya dulu"),(""===nominal[a].value||""===nominal[a].dataset.produk)&&(b=!1,d[a].classList.remove("d-none"),d[a].innerHTML="Isi produknya dulu");!0==b&&(dynamic+=1,set_dynamic_data(nomor.length),footer.classList.add("d-none"))}},remove_form=b=>{(dynamic-=1)<=4&&button_add_form.classList.remove("d-none"),b.parentNode.parentNode.parentNode.remove(),set_dynamic_data(nomor.length);for(let a=0;a<dynamic;a++){if(""===nomor[a].value||""===nominal[a].value){footer.classList.add("d-none");break}footer.classList.remove("d-none")}},set_dynamic_data=e=>{data_dynamic=[];let d=document.getElementsByClassName("operator-label");for(let b=0;b<e;b++){let f={nomor:nomor[b].value,nominal:nominal[b].value,produk:nominal[b].dataset.produk,price:nominal[b].dataset.harga,exp:nominal[b].dataset.exp,kode_produk:nominal[b].dataset.kode,operator:d[b].textContent};data_dynamic.push(f)}outer_dynamic_form.innerHTML="";for(let c=0;c<dynamic;c++)0===c?1===dynamic?(main_input.classList.add("min-margin-top-min"),main_input.classList.remove("min-margin-top-min-2"),outer_dynamic_form.innerHTML+=dynamic_form_1):(main_input.classList.remove("min-margin-top-min"),main_input.classList.add("min-margin-top-min-2"),outer_dynamic_form.innerHTML+=dynamic_form_2):outer_dynamic_form.innerHTML+=dynamic_form_3;for(let a=0;a<data_dynamic.length;a++)nomor[a].value=data_dynamic[a].nomor,nominal[a].value=data_dynamic[a].nominal,nominal[a].dataset.produk=data_dynamic[a].produk,nominal[a].dataset.harga=data_dynamic[a].price,nominal[a].dataset.kode=data_dynamic[a].kode_produk,nominal[a].dataset.exp=data_dynamic[a].exp,d[a].innerHTML+=data_dynamic[a].operator},formatRupiah=(c,f)=>{var g,b=(c=c.toString()).replace(/[^,\d]/g,"").toString().split(","),d=b[0].length%3,a=b[0].substr(0,d),e=b[0].substr(d).match(/\d{3}/gi);return e&&(a+=(d?".":"")+e.join(".")),0>parseInt(c)&&(a="-"+a),a=void 0!=b[1]?a+","+b[1]:a,void 0==f?a:a?"Rp "+a:""},autocomplete=(a,b)=>{var c;a.addEventListener("input",function(i){var h,f,e,g=this.value;if(d(),!g)return!1;for(c=-1,(h=document.createElement("DIV")).setAttribute("id",this.id+"autocomplete-list"),h.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(h),e=0;e<b.length;e++)b[e].substr(0,g.length).toUpperCase()==g.toUpperCase()&&((f=document.createElement("DIV")).innerHTML="<strong>"+b[e].substr(0,g.length)+"</strong>",f.innerHTML+=b[e].substr(g.length),f.innerHTML+="<input type='hidden' value='"+b[e]+"'>",f.addEventListener("click",function(b){a.value=this.getElementsByTagName("input")[0].value,d()}),h.appendChild(f))});let d=d=>{for(var c=document.getElementsByClassName("autocomplete-items"),b=0;b<c.length;b++)d!=c[b]&&d!=a&&c[b].parentNode.removeChild(c[b])};document.addEventListener("click",function(a){d(a.target)})}