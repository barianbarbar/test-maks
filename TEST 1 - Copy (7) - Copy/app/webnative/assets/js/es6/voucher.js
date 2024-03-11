let data = []
let temp_valueproduk = []
let dynamic_form_1 = ''
let cek = ''
const nomor = document.getElementsByClassName('nomor')
const checkbox_pin = document.getElementById("switchMaterial")
const outer_dynamic_form = document.getElementById('dynamic-form')
const favorit_kode_voucher_terjadwal = document.getElementById('favorit-kode-voucher-terjadwal')
const headtitle = document.getElementById('head-title')
const footer = document.getElementById('footer')
const footer_button = document.getElementById('footer-button')
const outer_produk = document.getElementById('outter-produk')
const main_input = document.getElementById('main-input')
const outter_check_out = document.getElementById('outter-check-out')
const total_pembelian = document.getElementById('total-pembelian')
let offcanvas_rincian_pembeilan  = ''
let text_title = ''
window.onload = function () {
    // data = {
    //     "judul": "Voucher Game",
    //     "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //     "template": "2",
    //     "isPromo": true,
    //     "isFavorit": true,
    //     "isTerjadwal": true,
    //     "settingPin": {
    //         "title": "Pin Transaksi",
    //         "hint": "Contoh: 123456",
    //         "tipe": "number"
    //     },
    //     "config": {
    //         "proses_string": "proses",
    //         "is_searching": false,
    //         "is_favorit": true,
    //         "is_terjadwal": true,
    //         "is_voucher": true
    //     },
    //     "checkout": {
    //         "checkout_saldoawal_string": "Saldo Awal",
    //         "checkout_tujuan_string": "Tujuan",
    //         "checkout_produk_string": "Produk",
    //         "checkout_harga_string": "Harga",
    //         "checkout_xp_string": "Mendapat [exp] EXP",
    //         "checkout_saldoakhir_string": "Saldo Akhir"
    //     },
    //     "data": [{
    //         "kode_operator": "VGAOV",
    //         "operator": "AOV",
    //         "icon": "https://mura.co.id/app/img/aov.png",
    //         "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //         "format": "[kode].[tujuan].[pin]",
    //         "settingTujuan": {
    //             "title": "Nomor HP",
    //             "hint": "Contoh: 081234567890",
    //             "isKontak": true,
    //             "isScan": true,
    //             "isHlr": false,
    //             "tipe": "phone"
    //         },
    //         "cek": {
    //             "isCek": false,
    //             "tipeCek": "1"
    //         },
    //         "detailGrid": 1,
    //         "detail": [{
    //                 "tag": "AOV Regular",
    //                 "kode": "AOV5",
    //                 "produk": "AOV VC GAME 5.000",
    //                 "exp": "+50 exp",
    //                 "isPromo": false,
    //                 "harga": "5500"
    //             },
    //             {
    //                 "tag": "AOV Promo",
    //                 "kode": "AOV10",
    //                 "produk": "AOV VC GAME 10.000",
    //                 "exp": "+50 exp",
    //                 "isPromo": true,
    //                 "harga": "10500"
    //             },
    //             {
    //                 "tag": "AOV Promo",
    //                 "kode": "AOV15",
    //                 "produk": "AOV VC GAME 15.000",
    //                 "exp": "+50 exp",
    //                 "isPromo": true,
    //                 "harga": "15500"
    //             },
    //             {
    //                 "tag": "AOV Reguler",
    //                 "kode": "AOV20",
    //                 "produk": "AOV VC GAME 20.000",
    //                 "exp": "+50 exp",
    //                 "isPromo": false,
    //                 "harga": "20500"
    //             },
    //             {
    //                 "tag": "AOV Reguler",
    //                 "kode": "AOV30",
    //                 "produk": "AOV VC GAME 30.000",
    //                 "exp": "+50 exp",
    //                 "isPromo": false,
    //                 "harga": "30500"
    //             },
    //             {
    //                 "tag": "AOV Reguler",
    //                 "kode": "AOV25",
    //                 "produk": "AOV VC GAME 25.000",
    //                 "exp": "+100 exp",
    //                 "isPromo": false,
    //                 "harga": "25500"
    //             },
    //             {
    //                 "tag": "AOV Reguler",
    //                 "kode": "AOV50",
    //                 "produk": "AOV VC GAME 50.000",
    //                 "exp": "+120 exp",
    //                 "isPromo": false,
    //                 "harga": "50500"
    //             },
    //             {
    //                 "tag": "AOV Reguler",
    //                 "kode": "AOV100",
    //                 "produk": "AOV VC GAME 100.000",
    //                 "exp": "+120 exp",
    //                 "isPromo": false,
    //                 "harga": "100500"
    //             }
    //         ]
    //     }]
    // }
    data = {
        "judul": "PLN Prabayar",
        "keterangan": "",
        "template": "2",
        "isPromo": true,
        "isFavorit": true,
        "isTerjadwal": true,
        "settingPin": {
          "title": "Pin Transaksi",
          "hint": "Contoh: 123456",
          "tipe": "number"
        },
        "config": {
          "proses_string": "proses",
          "is_searching": false,
          "is_favorit": true,
          "is_terjadwal": true,
          "is_voucher": true
        },
        "checkout": {
          "checkout_saldoawal_string": "Saldo Awal",
          "checkout_tujuan_string": "Tujuan",
          "checkout_produk_string": "Produk",
          "checkout_harga_string": "Harga",
          "checkout_xp_string": "Mendapat [exp] EXP",
          "checkout_saldoakhir_string": "Saldo Akhir"
        },
        "data": [
          {
            "kode_operator": "PLN",
            "operator": "PLN Prabayar",
            "icon": "https://mura.co.id/app/img/pln_pra.png",
            "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "format": "[kode_operator].[tujuan].[kode].[pin]",
            "isNominalBebas": false,
            "settingTujuan": {
              "title": "Nomor HP",
              "hint": "Contoh: 081234567890",
              "isKontak": false,
              "isScan": true,
              "isHlr": false,
              "tipe": "phone"
            },
            "settingNominal": {
              "title": "Masukkan Nominal",
              "hint": "Contoh 10.000",
              "isEdit": true,
              "tipe": "number"
            },
            "cek": {
              "isCek": true,
              "tipeCek": "1"
            },
            "detailGrid":2,
            "detail": [
              {
                "tag" : "PLN Regular",
                "kode": "10000",
                "produk": "10.000",
                "exp": "+50 exp",
                "isPromo":false,
                "harga": "10500"
              },
              {
                "tag" : "PLN Regular",
                "kode": "15000",
                "produk": "15.000",
                "exp": "+50 exp",
                "isPromo":false,
                "harga": "15500"
              },
              {
                "tag" : "PLN Regular",
                "kode": "20000",
                "produk": "20.000",
                "exp": "+50 exp",
                "isPromo":false,
                "harga": "20500"
              },
              {
                "tag" : "PLN Regular",
                "kode": "30000",
                "produk": "30.000",
                "exp": "+50 exp",
                "isPromo":false,
                "harga": "30500"
              },
              {
                "tag" : "PLN Regular",
                "kode": "25000",
                "produk": "25.000",
                "exp": "+100 exp",
                "isPromo":false,
                "harga": "25500"
              },
              {
                "tag" : "PLN Regular",
                "kode": "50000",
                "produk": "50.000",
                "exp": "+120 exp",
                "isPromo":false,
                "harga": "50500"
              },
              {
                "tag" : "PLN Promo",
                "kode": "100000",
                "produk": "100.000",
                "exp": "+120 exp",
                "isPromo":true,
                "harga": "100500"
              }
            ]
          }
        ]
      }
    setupview(data)
    setup_view_harga(data)
    get_pin()
}
const setupview = (data) => {
    let hint = data.data[0].settingTujuan.hint
    let keyboard_mode = ''
    let favorit = ''
    let col_voucher = 12
    let col_fav_terjadwal = 3
    let fav_terjadwal = ''
    let kode_voucher = ''
    let terjadwal = ''
    let scan_mode = ''
    let is_kode_voucher = data.isPromo
    let is_favorit = data.isFavorit
    let is_terjadwal = data.isTerjadwal
    let is_kontak =  data.data[0].settingTujuan.isKontak
    let is_scan =  data.data[0].settingTujuan.isScan
    let type_keyboard =  data.data[0].settingTujuan.tipe
    text_title =  data.data[0].settingTujuan.title
    let header = data.data[0].keterangan
    cek = data.data[0].cek.isCek
    headtitle.innerHTML = header
    let setup_button_footer
    // offcanvas_harga =  new bootstrap.Offcanvas(document.getElementById('offcanvasHarga'))
    if (type_keyboard === "phone") {
        keyboard_mode = 'numeric'
    } else {
        keyboard_mode = 'text'
    }

    if (is_favorit === true) {
        favorit = `
          <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F37021"
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926 7.814 12.74a2.745 2.745 0 0 1 0-3.907 2.745 2.745 0 0 1 3.906 0l.28.279.279-.279a2.745 2.745 0 0 1 3.906 0 2.745 2.745 0 0 1 .001 3.907z" />
          </svg>
          `
    }
    if (is_terjadwal === true) {
        terjadwal = `<svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F37021"
              d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z" />
          </svg>`
    }
    fav_terjadwal = `<div class="col-${col_fav_terjadwal} px-0 d-flex justify-content-around align-self-center">
            ${favorit}${terjadwal}
        </div>`
    col_voucher = col_voucher - col_fav_terjadwal
    if (is_kode_voucher === true) {
        kode_voucher = `<div class="col-12 pb-2">
            <p class="text-secondary font-large">Kode Voucher</p>
            </div>
            <div class="col-${col_voucher}">
              <div class="row">
                <div class="col-10">
                  <span class="text-dark font-normal font-large-1 text-start">PLN Hemat
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-check-circle-fill background-light-blue" viewBox="0 0 16 16">
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                </div>
                <div class="col-2 d-flex align-self-center">
                  <span>
                    <img src="./assets/images/icon/Layer_x-29.png" width="13" height="7" alt="">
                  </span>
                </div>
              </div>
              <hr class="mt-1 mb-0">
          </div>`
    } else {
        kode_voucher = `<div class="col-${col_voucher}"></div>`
    }
    let voucher_etc = `${kode_voucher}${fav_terjadwal}`
    if (is_scan) {
        scan_mode = `<span id="labelContact" class="input-group-text bg-transparent border-start-0 py-1 px-2" id="labelContact">
                    <img src="./assets/images/icon/Layer_x-15.png" width="20" height="20" alt="contact" />
            </span>
            <span class="input-group-text border-radius-right-8" id="labelScan">
                <img src="https://pic.onlinewebfonts.com/svg/img_305132.png"  width="20" height="20" alt="scan" />
            </span>`
    } else {
        scan_mode = `
            <span class="input-group-text border-radius-right-8" id="labelContact">
                <img src="./assets/images/icon/Layer_x-15.png"  width="20" height="20" alt="scan" />
            </span>`
    }
    dynamic_form_1 = `<div class="col-12 mt-2 dynamic-form">
        <div class="multi">
            <div class="row">
                <div class="col-6">
                <p id="label-nomor" class="text-secondary font-large">${text_title}</p>
                </div>
                <div class="col-6 text-end">
                <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
                </div>
                <div class="col-12 mb-1 pt-1">
                <div class="input-group mb-1">
                <input type="text" onkeypress="return isNumber(event,this);" class="form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor" placeholder="${hint}" aria-label="Nomor User" inputmode="${keyboard_mode}"  aria-describedby="inptNomor" autocomplete="off" />
                ${scan_mode}
                </div>
                <p class="font-normal error_number text-red mb-2 d-none"></p>
                </div>
            </div>
        </div>
    </div>`
    if(cek === true){
        setup_button_footer = `<div class="col-12 justify-content-end d-flex align-self-center">
            <button id="set_nominal" class="btn border-radius-10 background-orange text-white py-1 px-4-5 w-100" onclick="rincian_pembelian()">
            Lanjut
        </button>
    </div>`
    }else{
        setup_button_footer = `<div class="col-6">
            <p class="text-secondary font-large">Total Bayar</p>
            <p class="text-dark font-large-1" id="total-bottom"></p>
        </div>
        <div class="col-6 justify-content-end d-flex align-self-center">
            <button id="set_nominal" class="btn border-radius-10 background-orange text-white py-1 px-4-5" onclick="rincian_pembelian()">
            Lanjut
            </button>
        </div>`
    }
    outer_dynamic_form.innerHTML += dynamic_form_1
    favorit_kode_voucher_terjadwal.innerHTML += voucher_etc
    footer_button.innerHTML += setup_button_footer
}

const get_pin = () => {
    try {
        const data = Android.simpanpin()
        if(data == true){

        }
    }
    catch(err) {
        checkbox_pin.checked = true;
        console.log(err)
    }
}

const scroll_produk = (scrolling) => {
    if(scrolling.scrollTop === 0){
      main_input.classList.add('min-margin-top-min')
      main_input.classList.remove('min-margin-top-min-2')
    }else{
      main_input.classList.add('min-margin-top-min-2')
      main_input.classList.remove('min-margin-top-min')
    }
}

const setup_view_harga = (data) => {
    outer_produk.innerHTML = ""
    let get_produk= data.data.map(data => {
        let {detailGrid} = data
        detailGrid = (12/parseInt(detailGrid))
        const {detail} = data
        let get_produk = detail.map(data => {
          let border = ""
          let background = ""
          let background_2 = ""
          data.isPromo ? background_2 = "background-green": background_2 = "background-gray" 
          let view_produk = `<div class="col-${detailGrid} mb-3" onclick="set_harga(this)">
            <div class="shadow-sm ${border} ${background} border-radius-8 mx-0 bg-white box-harga">
              <div class="row gx-0">
                <div class="col-12">
                    <span class="${background_2} tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${data.tag}</span>
                </div>
                <div class="col-12 pt-2">
                  <p class="font-large-1 fw-bold text-dark ms-2 produk" data-produk="${data.produk}">${data.produk}</p>
                </div>
                <div class="col-7 py-2 pe-0">
                  <p class="font-large text-dark ms-2 price" data-harga="${data.harga}">${formatRupiah(data.harga,"Rp. ")}</p>
                </div>
                <div class="col-5 ps-0 pe-2 py-2 text-end">
                  <p class="text-orange font-large exp" data-exp="${data.exp}">${data.exp}</p>
                  <p class="text-orange font-large kode_produk d-none" data-kode="${data.kode}">${data.kode}</p>
                </div>
              </div>
            </div>
          </div>`
          outer_produk.innerHTML += view_produk
        })
    })
}

const set_harga = (event) => {
    const tagging = event.querySelector('.tagging')
    const produk = event.querySelector('.produk')
    const box_harga = event.querySelector('.box-harga')
    const price = event.querySelector('.price')
    const exp = event.querySelector('.exp')
    const kode_produk = event.querySelector('.kode_produk')
    const remove_active = document.getElementsByClassName('box-harga')
    const error_notif = main_input.querySelector('.error_number')
    error_notif.classList.add('d-none')
    for(let i = 0; i < remove_active.length; i++){
        remove_active[i].classList.remove('border-orange','background-yellow-light')
        remove_active[i].querySelector('.tagging').classList.remove('background-orange')
        remove_active[i].querySelector('.tagging').classList.add('background-gray')
    }
    box_harga.classList.contains('background-green') ? box_harga.classList.add('background-yellow-light','border-orange'):tagging.classList.remove('background-gray'),tagging.classList.add('background-orange'),box_harga.classList.add('background-yellow-light','border-orange')
    //jika produk tidak ada cek 
    if(cek == false){
        const total_bottom = document.getElementById('total-bottom')
        total_bottom.innerHTML = ""
        total_bottom.innerHTML += formatRupiah(price.dataset.harga,'Rp. ')
    }
    temp_valueproduk = {
      "produk": produk.dataset.produk,
      "price" : price.dataset.harga,
      "kode_produk" : kode_produk.dataset.kode,
      "exp" : exp.dataset.exp,
      "nomor" : nomor[0].value
    }
}

const rincian_pembelian = () => {
    outter_check_out.querySelector('.rincian').innerHTML = ""
    total_pembelian.innerHTML = ""
    const error_notif = main_input.querySelector('.error_number')
    let view_rincian_pembelian = ''
    pembelian = []
    let sum_total_harga = 0
    offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'))
    if(nomor[0].value.length > 0){
      error_notif.classList.add('d-none')
      if(temp_valueproduk.length === 0){
        error_notif.innerHTML += "Pilih produknya dulu"  
        error_notif.classList.remove('d-none')
      }else{
        if(cek === true){
            let value_tagihan = cek_tagihan(nomor,produk)
            value_tagihan.detail.map((item) => {
                item.map((item_detail) => {
                    let setup_tagihan = `<div class="col-6 mb-1">
                    <p class="font-large text-secondary">${item_detail.title}</p>
                    </div>
                    <div class="col-6 mb-1 text-end">
                        <p class="font-large text-secondary">${item_detail.value}</p>
                    </div>`
                    outter_check_out.querySelector('.rincian').innerHTML += setup_tagihan
                })
            })
        }else{
            view_rincian_pembelian = setup_view_rincian()
            outter_check_out.querySelector('.rincian').innerHTML += view_rincian_pembelian
        }
        sum_total_harga = temp_valueproduk.price
        total_pembelian.innerHTML += "-"+formatRupiah(sum_total_harga,'Rp. ')
        offcanvas_rincian_pembeilan.show()
      }
    }else{
      error_notif.innerHTML = `Isi ${text_title} dulu` 
      error_notif.classList.remove('d-none')
    }
}
const cek_tagihan = (tujuan,produk) => {
    let tagihan = {
        "kode":produk.dataset.kode,
        "tujuan":tujuan.value,
        "voucher":"",
        "type":"cek",
        "format": `${produk.dataset.kode}.${tujuan.value}`
    }
    //response dari android
    const response = {
        "totalTagihan": "200.000",
        "xp":"+100 xp",
        "detail": [
          [
            {
              "title": "Nama Pelanggan",
              "value": "Ahmad Jaelani"
            },
            {
              "title": "ID Pelanggan",
              "value": "1234567890"
            },
            {
              "title": "Tagihan",
              "value": "200.000"
            },
            {
              "title": "Nama Produk",
              "value": "Telkomsel Halo"
            }
          ]
        ]
    }
    return response
}
const setup_view_rincian = () => {
    let view_rincian_pembelian = `
        <div class="col-4 mb-1">
        <p class="font-large text-secondary">Jenis Produk</p>
        </div>
        <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${data.judul}</p>
        </div>
        <div class="col-4 mb-1">
        <p class="font-large text-secondary">Nama Produk</p>
        </div>
        <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${temp_valueproduk.produk}</p>
        </div>
        <div class="col-4 mb-1">
        <p class="font-large text-secondary">Nomor Tujuan</p>
        </div>
        <div class="col-8 mb-1 text-end">
        <p class="font-large text-secondary">${temp_valueproduk.nomor}</p>
        </div>
        <div class="col-12 mt-1">
        <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${temp_valueproduk.exp}</span>akan kamu dapatkan setelah transaksi sukses</p>
        </div>`
    return view_rincian_pembelian
}
const isNumber = (evt,data) => {
    const error_notif = main_input.querySelector('.error_number')
    error_notif.classList.add('d-none')
    let type = data.getAttribute("inputmode")
    if(type === "numeric"){
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
    }
    return true;
}

//rupiah 
const formatRupiah = (angka, prefix)=> {
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp ' + rupiah : '');
}