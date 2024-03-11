const get_produk=()=>{let e="";try{return e=JSON.parse(Android.getJsonProduk())}catch(a){Android.log(a)}},get_config=()=>{try{let e=JSON.parse(Android.getConfig());return e}catch(a){Android.log(a)}},menu=document.querySelector("#menu"),header=document.querySelector("header"),footer=document.getElementById("footer"),setup_footer_button=document.getElementById("setup-footer-button"),total_bottom=document.getElementById("total-bottom"),favorit_kode_voucher_terjadwal=document.getElementById("favorit-kode-voucher-terjadwal"),outter_buy=document.getElementById("outter-buy"),outter_check_out=document.getElementById("outter-check-out"),total_bayar=document.getElementById("total_bayar"),mainContent=document.querySelector("#mainContent"),layoutPromo=document.querySelector("#layout-promo"),layoutBottom=document.querySelector("#layout-bottom"),layoutNominal=document.querySelector("#layout-nominal"),layoutCheckout=document.querySelector("#outer-checkout"),layoutFavorite=document.querySelector("#layout-favorite"),layoutTerjadwal=document.querySelector("#layout-terjadwal"),layoutIcon=document.querySelector("#layout-icon"),labelPin=document.querySelector("#label-pin"),labelExp=document.querySelector("#label-exp"),labelScan=document.querySelector("#labelScan"),labelContact=document.querySelector("#labelContact"),offcanvas_rincian_pembeilan=new bootstrap.Offcanvas(document.querySelector("#offcanvas-rincian-pembelian")),saldoAwal=document.querySelector("#saldo-awal"),saldoAkhir=document.querySelector("#saldo-akhir"),kodeVoucher=document.querySelector("#kode-voucher"),totalBayar=document.querySelector("#total-bayar"),totalPembelian=document.querySelector("#total-pembelian"),mainInput=document.querySelector("#main-input"),inputPin=document.querySelector("#input-pin"),inputVoucher=document.querySelector("#input-voucher"),switchPin=document.querySelector("#switchMaterial");let element_kontak=document.getElementsByClassName("nomor");const btnCheckout=document.querySelector("#btn-checkout");let data="",config="",panchi="",formatTrx="",kodeOperator="",height_screen="",storedData={tujuan:"",produk:"",harga:"",kode_produk:"",exp:"",title:""};const remove_footer=()=>{footer.classList.add("d-none")},add_footer=()=>{footer.classList.remove("d-none")},show_footer=()=>{try{Android.log("berhasil"),footer.classList.remove("d-none")}catch(e){}},formatRupiah=(e,a)=>{var t,o=(e="string"==typeof e?e:e.toString()).replace(/[^,\d]/g,"").toString().split(","),r=o[0].length%3,l=o[0].substr(0,r),n=o[0].substr(r).match(/\d{3}/gi);return n&&(l+=(r?".":"")+n.join(".")),"string"==typeof e?0>parseInt(e)&&(l="-"+l):e<0&&(l="-"+l),l=void 0!=o[1]?l+","+o[1]:l,void 0==a?l:l?"Rp "+l:""},backToNumber=e=>{let a=e.replace(/[^0-9]/g,""),t=parseInt(a);return t},onClickMenu=e=>{kodeOperator=e.dataset.kode;let{isFavorit:a,isPromo:t,isTerjadwal:o,data:r,checkout:l,config:n,settingPin:d}=data,i=r.filter(e=>e.kode_operator===kodeOperator);menu.classList.add("d-none"),header.classList.remove("d-none"),mainContent.classList.remove("d-none"),footer.classList.remove("d-none"),setupFooter({isFavorit:a,isPromo:t,isTerjadwal:o}),setupMainInput(i[0]),setupProduk(i[0])},onChangeTujuan=()=>{let e=document.querySelector("body").querySelector("#input-nomor");0===e.value.length?(document.querySelector(".hlr-notfound").classList.remove("d-none"),document.querySelector(".hlr-notfound").innerHTML="Tujuan tidak boleh kosong"):document.querySelector(".hlr-notfound").classList.add("d-none"),storedData.tujuan=e.value,remove_footer()},onChangeNominal=e=>{let a=document.querySelector("body").querySelector("#input-nominal"),t=document.querySelector(".background-yellow-light"),o=a.value,r=formatRupiah(o),l=data.admin;if(0===o.length){document.querySelector(".feedback").classList.remove("d-none"),document.querySelector(".feedback").innerHTML="Nominal tidak boleh kosong";return}document.querySelector(".feedback").classList.add("d-none"),t&&(t.classList.remove("background-yellow-light","border-orange"),t.classList.add("bg-white")),a.value=r;let n=parseInt(r.replace(/[^0-9]/g,""))+l;console.log(l),storedData.produk=r.replace(/[^0-9]/g,""),storedData.title=config.judul,storedData.harga=n,storedData.kode_produk=data.detail[0].kode,storedData.exp=data.detail[0].exp,total_bottom.innerHTML=formatRupiah(n,"Rp "),remove_footer()},onClickProduk=e=>{let a=document.querySelector("body").querySelector("#input-nominal");document.querySelector(".feedback").classList.contains("d-none")||document.querySelector(".feedback").classList.add("d-none");let t=e.querySelector(".price").dataset.price,o=e.querySelector(".produk").dataset.produk,r=e.querySelector(".kode_produk").dataset.kode,l=e.querySelector(".exp").dataset.exp,n=e.querySelector(".box-harga");n.classList.remove("bg-white"),n.classList.add("background-yellow-light","border-orange");let d=document.querySelectorAll(".box-harga");d.forEach(e=>{e!==n&&(e.classList.remove("background-yellow-light","border-orange"),e.classList.add("bg-white"))}),a.value=formatRupiah(o),storedData.produk=o,storedData.kode_produk=r,storedData.harga=t,storedData.title=config.judul,storedData.exp=l,total_bottom.innerHTML=formatRupiah(t,"Rp ")},cek_rincian_pembelian=()=>{let e=document.querySelector("body").querySelector("#input-nomor"),a=document.querySelector("body").querySelector("#input-nominal");if(0===e.value.length){document.querySelector(".hlr-notfound").classList.remove("d-none"),document.querySelector(".hlr-notfound").innerHTML="Tujuan tidak boleh kosong";return}if(0===a.value.length){document.querySelector(".feedback").classList.remove("d-none"),document.querySelector(".feedback").innerHTML="Nominal tidak boleh kosong";return}storedData.tujuan=e.value;let{produk:t,kode_produk:o,harga:r,title:l,exp:n,tujuan:d}=storedData;cek_tagihan(d,t,o,n,r,l)},cek_tagihan=(e,a,t,o,r,l)=>{try{t=t.replace("BYR","CEK");let n={tujuan:e,produk:a,harga:r,kode_produk:t,exp:o,title:l};Android.sendNudes(JSON.stringify(n))}catch(d){console.log(d)}},value_cek=e=>{try{Android.log("test"+e),e=JSON.parse(e),panchi="";let a="",t="";panchi={pancigedhe:[]},header_pembelian.textContent=e.header_pembelian,e.rincian_pembelian.map(t=>{let o={kode:t.kode_produk,tujuan:t.value_tujuan,nominal:e.detail_pembayaran.value_harga_produk};panchi.pancigedhe.push(o),a+=`<div class="row check-out mb-1">
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${t.value_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_nama_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${t.value_nama_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_admin}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(t.value_admin,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(t.value_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_total_tagihan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(t.value_total_tagihan,"Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${t.title_tujuan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${t.value_tujuan}</p>
        </div>
        <div class="col-12 mt-1">
          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${t.xp}</span>${t.keterangan}</p>
        </div>
      </div>`}),outter_check_out.innerHTML=a,t=`
      <div class="col-12">
        <hr>
      </div>
      <div class="col-12 mb-1">
        <p class="fw-bold font-large-1">${e.header_pembayaran}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.detail_pembayaran.title_saldo_awal}</p>
      </div>
      <div class="col-8 text-end mb-1">
        <p id="saldo-awal" class="font-large text-secondary">${formatRupiah(e.detail_pembayaran.value_saldo_awal,"Rp. ")}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.detail_pembayaran.title_harga_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-dark">(${formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. ")})</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.detail_pembayaran.title_saldo_akhir}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p id="saldo-akhir" class="font-large text-dark">${"string"==typeof e.detail_pembayaran.value_saldo_akhir?e.detail_pembayaran.value_saldo_akhir:formatRupiah(e.detail_pembayaran.value_saldo_akhir,"Rp. ")}</p>
      </div>
    `,outter_buy.innerHTML=t,total_bayar.textContent=formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. "),offcanvas_rincian_pembeilan.show()}catch(o){Android.log("error_log"+o)}},rincian_pembelian=()=>{let e=document.querySelector("body").querySelector("#input-nomor"),a=document.querySelector("body").querySelector("#input-nominal");if(0===e.value.length){document.querySelector(".hlr-notfound").classList.remove("d-none"),document.querySelector(".hlr-notfound").innerHTML="Tujuan tidak boleh kosong";return}if(0===a.value.length){document.querySelector(".feedback").classList.remove("d-none"),document.querySelector(".feedback").innerHTML="Nominal tidak boleh kosong";return}storedData.tujuan=e.value;let{produk:t,kode_produk:o,harga:r,title:l,exp:n,tujuan:d}=storedData,i={tujuan:d,produk:t,harga:r,kode_produk:o,exp:n,title:l};try{let s=Android.sendNudes(JSON.stringify(i));view_rincian_pembayaran(JSON.parse(s)),offcanvas_rincian_pembeilan.show()}catch($){Android.log("lanjut pembayaran"+$)}},view_rincian_pembayaran=e=>{panchi="";let a="",t="";panchi={pancigedhe:[]},header_pembelian.textContent=e.header_pembelian,e.rincian_pembelian.map(e=>{let t={kode:e.kode_produk,tujuan:e.value_tujuan};panchi.pancigedhe.push(t),a+=`<div class="row check-out mb-1">
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.title_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${e.value_produk}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.title_nama_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${e.value_nama_produk}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.title_harga}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${formatRupiah(e.value_harga,"Rp. ")}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${e.title_tujuan}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${e.value_tujuan}</p>
      </div>
      <div class="col-12 mt-1">
        <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${e.xp}</span>${e.keterangan}</p>
      </div>
    </div>`}),outter_check_out.innerHTML=a,t=`
    <div class="col-12">
      <hr>
    </div>
    <div class="col-12 mb-1">
      <p class="fw-bold font-large-1">${e.header_pembayaran}</p>
    </div>
    <div class="col-4 mb-1">
      <p class="font-large text-secondary">${e.detail_pembayaran.title_saldo_awal}</p>
    </div>
    <div class="col-8 text-end mb-1">
      <p id="saldo-awal" class="font-large text-secondary">${formatRupiah(e.detail_pembayaran.value_saldo_awal,"Rp. ")}</p>
    </div>
    <div class="col-4 mb-1">
      <p class="font-large text-secondary">${e.detail_pembayaran.title_harga_produk}</p>
    </div>
    <div class="col-8 mb-1 text-end">
      <p class="font-large text-dark">(${formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. ")})</p>
    </div>
    <div class="col-4 mb-1">
      <p class="font-large text-secondary">${e.detail_pembayaran.title_saldo_akhir}</p>
    </div>
    <div class="col-8 mb-1 text-end">
      <p id="saldo-akhir" class="font-large text-dark">${formatRupiah(e.detail_pembayaran.value_saldo_akhir,"Rp. ")}</p>
    </div>
  `,outter_buy.innerHTML=t,total_bayar.textContent=formatRupiah(e.detail_pembayaran.value_harga_produk,"Rp. ")},setupMainInput=(e,a)=>{let t,o,r=a.operator,{keterangan:l,settingTujuan:n,settingNominal:d}=e,{title:i,hint:s,isKontak:$,isScan:c}=n;e.settingProses.isVoucher;let u=e.settingProses.isFavorit,_=e.settingProses.isTerjadwal,p="",m="";e.settingProses.is_cek;let h=e.checkout.rincianProduk.is_ppob,v="";if(d){let{title:g,hint:y}=d;t=g,o=y}let b="",f="",k="";c?$?(b="border-end-0",k="bg-transparent"):k="d-none":$?(b="border-end-0",f="d-none",k="border-radius-right-8 bg"):(b="border-radius-right-8",f="d-none",k="d-none");let x=a.detail[0].exp,w=`
    <div class="row px-2 py-2">
      <div class="col-12">
        <p class="text-secondary font-normal" id="head-title">${l}</p>
      </div>
      <div class="col-12 mt-2 dynamic-form" id="dynamic-form">
        <div class="col-12 mt-2 dynamic-form">
          <div class="multi">
            <div class="row">
              <div class="col-6">
                <p id="label-bank" class="text-secondary font-large">Nama Produk</p>
              </div>
              <div class="col-12 mb-1">
              <div class="input-group mb-1">
              <input placeholder= "${r}" value="${r}" type="text" class="bank form-control bg-white shadow-none border-radius-left-8 font-large-1 text-dark fw-500 border-end-0" aria-label="Nominal" aria-describedby="" readonly/>
              <span id="labelContact" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8 text-orange">
                 ${x}
              </span>
              </div>
              </div>
              <div class="col-6">
                <p id="label-nomor" class="text-secondary font-large">${i}</p>
              </div>
              <div class="col-6 text-end">
                <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
              </div>
              <div class="col-12 mb-1">
                <div class="input-group mb-1">
                  <input
                    id="input-nomor"
                    type="text"
                    class="form-control ${b} shadow-none border-radius-left-8 font-large-1 text-dark nomor"
                    placeholder="${s}"
                    aria-label="Nomor User"
                    inputmode="numeric"
                    aria-describedby="inptNomor"
                    autocomplete="off"
                    onkeyup="onChangeTujuan(this)"
                  />
                  <span id="labelContact" class="input-group-text border-start-0 py-1 px-2 ${k}" id="labelContact" onclick="kontak(this)" onpaste="test()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">
                    <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
                      <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
                    </g>
                  </svg>
                  </span>
                  <span class="input-group-text border-radius-right-8 ${f}" id="labelScan" onclick="scan(this)">
                    <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
                      <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
                    </svg>
                  </span>
                </div>
                <p class="font-normal hlr-notfound text-red mb-2 d-none"></p>
              </div>
              <div class="col-12">
                <p id="label-nominal" class="text-secondary font-large">${t}</p>
              </div>
              <div class="col-12">
                <input id="input-nominal" autocomplete="off" onkeyup="onChangeNominal(this)" placeholder= "${o} "type="text" inputmode="numeric" class="bank form-control bg-white shadow-none border-radius-8 font-large-1 text-dark wilayah" aria-label="Nominal" aria-describedby=""/>
                <p class="font-normal feedback text-red mb-2 d-none"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;!0===u&&(m=`
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
    `),!0===_&&(p=`<svg xmlns="http://www.w3.org/2000/svg" onclick="terjadwal()" width="28" height="28" viewBox="0 0 38.232 38.232">
    <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">
      <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>
      <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">
        <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>
        <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>
      </g>
    </g>
  </svg>`),footer_button=`<div class="col-12">
  ${v=!0===h?`<button id="set_nominal" onclick="cek_rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white">
          ${e.settingProses.proses_string}
      </button>`:`<button id="set_nominal" onclick="rincian_pembelian()" class="btn border-radius-10 background-dark-blue w-100 py-1 text-white">
          ${e.settingProses.proses_string}
      </button>`}
  </div>
  `;let S=`${m}${p}`;mainInput.innerHTML=w,favorit_kode_voucher_terjadwal.innerHTML+=S,setup_footer_button.innerHTML+=footer_button},setupProduk=e=>{let{cek:a,detail:t,detailGrid:o,format:r}=e,{isCek:l}=a;formatTrx=r,btnCheckout.setAttribute("data-cek",l),l?(layoutBottom.querySelectorAll("p").forEach(e=>{e.classList.add("d-none")}),layoutBottom.querySelector("#cek").classList.remove("d-none"),btnCheckout.innerHTML="Bayar"):(layoutBottom.querySelector("#cek").classList.add("d-none"),layoutBottom.querySelectorAll("p").forEach(e=>{e.classList.remove("d-none")})),renderProduk({detail:t,detailGrid:o})},renderProduk=e=>{let{detail:a}=e,t=config.grid,o=12/t,r="";a.map((e,a)=>{let{tag:l,kode:n,produk:d,exp:i,harga:s}=e,$=`
        <div class="col-${o} mb-3 ${r=2===t?a%2!=0?"pe-0":"ps-0":"px-0"}" onclick="onClickProduk(this)">
          <div class="h-100 border border-white bg-white border-radius-8 mx-0 box-harga"> 
              <div class="row gx-0">
                  <div class="col-12 py-2">
                      <p class="font-large-1 fw-bold text-dark ms-2 produk" data-produk="${d}">${formatRupiah(d)}</p>
                      <p class="text-orange font-large kode_produk d-none" data-kode="${n}">${n}</p>
                      <p class="text-orange font-large price d-none" data-price="${s}">${s}</p>
                      <p class="text-orange font-large exp d-none" data-exp="${i}">${i}</p>
                  </div>
              </div>
          </div>
        </div>
      `;layoutNominal.innerHTML+=$})},scroll_produk=e=>{let a=document.querySelector("body").querySelector("#head-title");0===e.scrollTop?(a.classList.remove("d-none"),mainInput.classList.add("min-margin-top-min"),mainInput.classList.remove("min-margin-top-min-2")):(a.classList.add("d-none"),mainInput.classList.add("min-margin-top-min-2"),mainInput.classList.remove("min-margin-top-min"))},set_kontak=e=>{Android.log(e),element_kontak[0].value=e,storedData.tujuan=e},kontak=e=>{try{Android.get_kontak()}catch(a){}},scan=e=>{try{Android.get_kontak_scan()}catch(a){}},favorite=()=>{let{kode_produk:e,tujuan:a}=storedData,t={tujuan:a,kode_produk:e};(pembelian=[]).push(t);try{Android.log(t),Android.setFavorite(JSON.stringify(pembelian))}catch(o){}},terjadwal=()=>{try{Android.setFckingTerjadwal("Coming Soon")}catch(e){}},bayar=()=>{try{Android.log(JSON.stringify(panchi)),Android.panchi(JSON.stringify(panchi))}catch(e){}};window.onload=()=>{data=get_produk(),setupMainInput(config=get_config(),data),renderProduk(data),height_screen=window.innerHeight},window.addEventListener("resize",()=>{window.innerHeight>=height_screen?add_footer():remove_footer()});