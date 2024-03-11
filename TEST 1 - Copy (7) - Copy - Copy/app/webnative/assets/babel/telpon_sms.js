"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.match.js");

var data = [];
var dynamic_form_1 = '';
var temp_valueproduk = [];
var outter_check_out = document.getElementById('outter-check-out');
var favorit_kode_voucher_terjadwal = document.getElementById('favorit-kode-voucher-terjadwal');
var headtitle = document.getElementById('head-title');
var outer_dynamic_form = document.getElementById('dynamic-form');
var outer_produk = document.getElementById('outter-produk');
var main_input = document.getElementById('main-input');
var produk = document.getElementById('produk');
var total_bottom = document.getElementById('total-bottom');
var total_pembelian = document.getElementById('total-pembelian');
var nomor = document.getElementsByClassName('nomor');
var checkbox_pin = document.getElementById("switchMaterial");
var offcanvas_rincian_pembeilan = "";

window.onload = function () {
  data = {
    "judul": "Telpon SMS",
    "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
    "settingTujuan": {
      "title": "Nomor HP",
      "hint": "Contoh: 122021102174",
      "isKontak": true,
      "isScan": true,
      "isHlr": false,
      "tipe": "number"
    },
    "checkout": {
      "rincianProduk": {
        "title": "Rincian Pembelian",
        "titleMenu": "Jenis Produk",
        "valueMenu": "[menu]",
        "titleProduk": "Nama Produk",
        "valueProduk": "[operator + nominal]",
        "titleTujuan": "NamaTujuan",
        "valueTujuan": "[tujuan]",
        "keterangan": "[exp] akan kamu dapatkan setelah transaksi sukses"
      },
      "bill": {
        "title": "Rincian Pembelian",
        "titleSaldo": "Saldo Awal",
        "valueSaldo": "[saldo]",
        "titleHarga": "Harga Produk",
        "valueHarga": "[total_harga]",
        "titleVoucher": "Kode Voucher",
        "valueVoucher": "[kode_voucher]",
        "titleSisaSaldo": "Saldo Akhir",
        "valueSisaSaldo": "[sisa_saldo]"
      }
    },
    "data": [{
      "kode_operator": "PTAX",
      "operator": "Axis",
      "icon": "https://mura.co.id/app/img/shopee.png",
      "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "format": "[kode].[tujuan].[pin]",
      "isNominalBebas": false,
      "cek": {
        "isCek": false,
        "tipeCek": "1"
      },
      "detailGrid": 1,
      "detail": [{
        "tag": "Paket Telepon",
        "kode": "ATLP7",
        "produk": "AXIS TLP |TLP 30menit ALL OPERATOR 24Jam<br>Masa Aktif 7 hari",
        "exp": "+50 exp",
        "harga": "8801"
      }, {
        "tag": "Paket Telepon",
        "kode": "ATLP30",
        "produk": "AXIS TLP |TLP 100menit ALL OPERATOR <br>Masa Aktif 30 hari",
        "exp": "+50 exp",
        "harga": "24640"
      }, {
        "tag": "Paket Telepon",
        "kode": "ATLP60",
        "produk": "AXIS TLP |TLP 1000menit ALL OPERATOR 24Jam<br>Masa Aktif 60 hari",
        "exp": "+50 exp",
        "harga": "34640"
      }, {
        "tag": "Paket Telepon",
        "kode": "ATLP60",
        "produk": "AXIS TLP |TLP 1200menit ALL OPERATOR 24Jam<br>Masa Aktif 90 hari",
        "exp": "+50 exp",
        "harga": "44640"
      }, {
        "tag": "Paket SMS",
        "kode": "SMS10",
        "produk": "100 SMS Sesama |100 SMS ALL OPERATOR 24Jam<br>Masa Aktif 90 hari",
        "exp": "+50 exp",
        "harga": "10000"
      }, {
        "tag": "Paket SMS",
        "kode": "SMS20",
        "produk": "200 SMS Sesama |100 SMS ALL OPERATOR 24Jam<br>Masa Aktif 90 hari",
        "exp": "+50 exp",
        "harga": "20000"
      }, {
        "tag": "Paket SMS",
        "kode": "SMS30",
        "produk": "300 SMS Sesama |100 SMS ALL OPERATOR 24Jam<br>Masa Aktif 90 hari",
        "exp": "+50 exp",
        "harga": "30000"
      }]
    }]
  };
  setupview(data);
  setup_view_harga(data);
  get_pin();
};

var setupview = function setupview(data) {
  var hint = data.settingPin.hint;
  var keyboard_mode = '';
  var favorit = '';
  var col_voucher = 12;
  var kode_voucher = '';
  var terjadwal = '';
  var scan_mode = '';
  var is_kode_voucher = data.isPromo;
  var is_favorit = data.isFavorit;
  var is_terjadwal = data.isTerjadwal;
  var is_kontak = data.settingTujuan.isKontak;
  var is_scan = data.settingTujuan.isScan;
  var type_keyboard = data.settingTujuan.tipe;
  var text_title = data.settingTujuan.title;
  var header = data.data[0].keterangan;
  headtitle.innerHTML = header;

  if (type_keyboard === "phone") {
    keyboard_mode = 'numeric';
  } else {
    keyboard_mode = 'text';
  }

  if (is_favorit === true) {
    favorit = "<div class=\"col-2 px-0 justify-content-center d-flex align-self-center\">\n      <svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#F37021\"\n          d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926 7.814 12.74a2.745 2.745 0 0 1 0-3.907 2.745 2.745 0 0 1 3.906 0l.28.279.279-.279a2.745 2.745 0 0 1 3.906 0 2.745 2.745 0 0 1 .001 3.907z\" />\n      </svg>\n    </div>";
    col_voucher = col_voucher - 2;
  }

  if (is_terjadwal === true) {
    terjadwal = "<div class=\"col-1 px-0 justify-content-center d-flex align-self-center\">\n      <svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#F37021\"\n          d=\"M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z\" />\n      </svg>\n    </div>";
    col_voucher = col_voucher - 1;
  }

  if (is_kode_voucher === true) {
    kode_voucher = "<div class=\"col-12 pb-2\">\n      <p class=\"text-secondary font-large\">Kode Voucher</p>\n      </div>\n      <div class=\"col-".concat(col_voucher, "\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <span class=\"text-dark font-normal font-large-1 text-start\">PLN Hemat\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                class=\"bi bi-check-circle-fill background-light-blue\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n              </svg>\n            </span>\n          </div>\n          <div class=\"col-2 d-flex align-self-center\">\n            <span>\n              <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"\">\n            </span>\n          </div>\n        </div>\n        <hr class=\"mt-1 mb-0\">\n    </div>");
  } else {
    kode_voucher = "<div class=\"col-".concat(col_voucher, "\"></div>");
  }

  var voucher_etc = "".concat(kode_voucher).concat(favorit).concat(terjadwal);

  if (is_scan) {
    scan_mode = "<span id=\"labelContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2\" id=\"labelContact\">\n              <img src=\"./assets/images/icon/Layer_x-15.png\" width=\"20\" height=\"20\" alt=\"contact\" />\n      </span>\n      <span class=\"input-group-text border-radius-right-8\" id=\"labelScan\">\n          <img src=\"https://pic.onlinewebfonts.com/svg/img_305132.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n      </span>";
  } else {
    scan_mode = "\n      <span class=\"input-group-text border-radius-right-8\" id=\"labelContact\">\n          <img src=\"./assets/images/icon/Layer_x-15.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n      </span>";
  }

  dynamic_form_1 = "<div class=\"col-12 mt-2 dynamic-form\">\n      <div class=\"multi\">\n          <div class=\"row\">\n              <div class=\"col-6\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">".concat(text_title, "</p>\n              </div>\n              <div class=\"col-6 text-end\">\n              <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n              </div>\n              <div class=\"col-12 mb-1\">\n              <div class=\"input-group mb-1\">\n              <input type=\"text\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n              ").concat(scan_mode, "\n              </div>\n              <p class=\"font-normal text-red mb-2 d-none error_number\"></p>\n          </div>\n      </div>\n  </div>");
  outer_dynamic_form.innerHTML += dynamic_form_1;
  favorit_kode_voucher_terjadwal.innerHTML += voucher_etc;
};

var get_pin = function get_pin() {
  try {
    var _data = Android.simpanpin();

    if (_data == true) {}
  } catch (err) {
    checkbox_pin.checked = true;
    console.log(err);
  }
};

var scroll_produk = function scroll_produk(scrolling) {
  if (scrolling.scrollTop === 0) {
    main_input.classList.add('min-margin-top-min');
    main_input.classList.remove('min-margin-top-min-2');
  } else {
    main_input.classList.add('min-margin-top-min-2');
    main_input.classList.remove('min-margin-top-min');
  }
};

var setup_view_harga = function setup_view_harga(data) {
  outer_produk.innerHTML = "";
  var get_produk = data.data.map(function (data) {
    var detailGrid = data.detailGrid;
    detailGrid = 12 / parseInt(detailGrid);
    var detail = data.detail;
    var get_produk = detail.map(function (data) {
      var border = "";
      var background = "";
      var background_2 = "background-gray";
      var view_produk = "<div class=\"col-".concat(detailGrid, " mb-3\" onclick=\"set_harga(this)\">\n          <div class=\"shadow-sm ").concat(border, " ").concat(background, " border-radius-8 mx-0 bg-white box-harga\">\n            <div class=\"row gx-0\">\n              <div class=\"col-12 pt-2\">\n                <p class=\"font-large-1 fw-bold text-dark ms-2\">").concat(data.tag, "</p>\n              </div>\n              <div class=\"col-12 pe-0\">\n                <p class=\"font-large text-secondary ms-2 keterangan produk\" data-produk=\"").concat(data.produk, "\">\n                  ").concat(data.produk, "\n                </p>\n              </div>\n              <div class=\"col-7 py-2 pe-0\">\n                <p class=\"font-large text-dark ms-2 price\" data-harga=\"").concat(data.harga, "\">").concat(formatRupiah(data.harga, "Rp. "), "</p>\n              </div>\n              <div class=\"col-5 ps-0 pe-2 py-2 text-end\">\n                <p class=\"text-orange font-large exp\" data-exp=\"").concat(data.exp, "\">").concat(data.exp, "</p>\n                <p class=\"text-orange font-large kode_produk d-none\" data-kode=\"").concat(data.kode, "\">").concat(data.kode, "</p>\n              </div>\n            </div>\n          </div>\n        </div>");
      outer_produk.innerHTML += view_produk;
    });
  });
};

var set_harga = function set_harga(event) {
  total_bottom.innerHTML = "";
  var produk = event.querySelector('.produk');
  var box_harga = event.querySelector('.box-harga');
  var price = event.querySelector('.price');
  var exp = event.querySelector('.exp');
  var kode_produk = event.querySelector('.kode_produk');
  var remove_active = document.getElementsByClassName('box-harga');

  for (var i = 0; i < remove_active.length; i++) {
    remove_active[i].classList.remove('border-orange', 'background-yellow-light');
  }

  box_harga.classList.add('background-yellow-light', 'border-orange');
  total_bottom.innerHTML += formatRupiah(price.dataset.harga, 'Rp. ');
  temp_valueproduk = {
    "produk": produk.dataset.produk,
    "price": price.dataset.harga,
    "kode_produk": kode_produk.dataset.kode,
    "exp": exp.dataset.exp,
    "nomor": nomor[0].value
  };
};

var rincian_pembelian = function rincian_pembelian() {
  outter_check_out.innerHTML = "";
  total_pembelian.innerHTML = "";
  var error_notif = main_input.querySelector('.error_number');
  pembelian = [];
  var sum_total_harga = 0;
  offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'));

  if (nomor[0].value.length > 0) {
    error_notif.classList.add('d-none');

    if (temp_valueproduk.length === 0) {
      console.log('test');
      error_notif.innerHTML += "Pilih produknya dulu";
      error_notif.classList.remove('d-none');
    } else {
      var view_rincian_pembelian = '';
      view_rincian_pembelian = "<div class=\"row check-out mb-1\">\n        <div class=\"col-4 mb-1\">\n          <p class=\"font-large text-secondary\">Jenis Produk</p>\n        </div>\n        <div class=\"col-8 mb-1 text-end\">\n          <p class=\"font-large text-secondary\">".concat(data.judul, "</p>\n        </div>\n        <div class=\"col-4 mb-1\">\n          <p class=\"font-large text-secondary\">Nama Produk</p>\n        </div>\n        <div class=\"col-8 mb-1 text-end\">\n          <p class=\"font-large text-secondary\">").concat(temp_valueproduk.produk, "</p>\n        </div>\n        <div class=\"col-4 mb-1\">\n          <p class=\"font-large text-secondary\">Nomor Tujuan</p>\n        </div>\n        <div class=\"col-8 mb-1 text-end\">\n          <p class=\"font-large text-secondary\">").concat(temp_valueproduk.nomor, "</p>\n        </div>\n        <div class=\"col-12 mt-1\">\n          <p class=\"font-medium text-secondary\"><span class=\"px-1 font-medium border-radius-5 border-orange text-orange me-1\">").concat(temp_valueproduk.exp, "</span>akan kamu dapatkan setelah transaksi sukses</p>\n        </div>\n      </div>");
      outter_check_out.innerHTML += view_rincian_pembelian;
      sum_total_harga = temp_valueproduk.price;
      total_pembelian.innerHTML += "-" + formatRupiah(sum_total_harga, 'Rp. ');
      offcanvas_rincian_pembeilan.show();
    }
  } else {
    error_notif.innerHTML = "Isi nomornya dulu";
    error_notif.classList.remove('d-none');
  }
};

var formatRupiah = function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi); // tambahkan titik jika yang di input sudah menjadi angka ribuan

  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? 'Rp ' + rupiah : '';
}; // only number


var isNumber = function isNumber(evt, data) {
  main_input.querySelector('.error_number').classList.add('d-none');
  var type = data.getAttribute("inputmode");

  if (type === "numeric") {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  }

  return true;
};