"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.match.js");

var data = [];
var dynamic_form_1 = '';
var pin = '';
var nominal = document.querySelector('.nominal');
var headtitle = document.getElementById('head-title');
var main_input = document.getElementById('main-input');
var outer_dynamic_form = document.getElementById('dynamic-form');
var setup_footer_button = document.getElementById('setup-footer-button');
var favorit_kode_voucher_terjadwal = document.getElementById('favorit-kode-voucher-terjadwal');
var outter_check_out = document.getElementById('outter-check-out');
var total_pembelian = document.getElementById('total-pembelian');
var checkbox_pin = document.getElementById("switchMaterial");

window.onload = function () {
  data = {
    "judul": "Finance",
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
      "kode_operator": "FINANCE",
      "operator": "ADIRA",
      "icon": "https://mura.co.id/app/img/adira.png",
      "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "format": "[kode].[tujuan].[pin]",
      "isNominalBebas": false,
      "settingTujuan": {
        "title": "ID Pelanggan",
        "hint": "Contoh: 122021102174",
        "isKontak": true,
        "isScan": true,
        "isHlr": false,
        "tipe": "number"
      },
      "cek": {
        "isCek": true,
        "tipeCek": "1"
      },
      "detailGrid": 1,
      "detail": [{
        "tag": "FINANCE REGULER",
        "kode": "BYRADIRA",
        "produk": "ADIRA",
        "exp": "+50 exp",
        "harga": "450"
      }]
    }]
  };
  setupview(data);
  get_pin();
};

var setupview = function setupview(data) {
  var hint = data.data[0].settingTujuan.hint;
  var keyboard_mode = '';
  var favorit = '';
  var col_voucher = 12;
  var col_fav_terjadwal = 3;
  var fav_terjadwal = '';
  var kode_voucher = '';
  var terjadwal = '';
  var scan_mode = '';
  var footer_button = '';
  var cek_button = '';
  var cek = data.data[0].cek.isCek;
  var is_kode_voucher = data.config.is_voucher;
  var is_favorit = data.config.is_favorit;
  var is_terjadwal = data.config.is_terjadwal;
  var is_kontak = data.data[0].settingTujuan.isKontak;
  var is_scan = data.data[0].settingTujuan.isScan;
  var type_keyboard = data.data[0].settingTujuan.tipe;
  var text_title = data.data[0].settingTujuan.title;
  var header = data.data[0].keterangan;
  var produk = data.data[0].detail[0].produk;
  var exp = data.data[0].detail[0].exp;
  var fee = data.data[0].detail[0].harga;
  var kode = data.data[0].detail[0].kode;
  headtitle.innerHTML = header;

  if (type_keyboard === "number") {
    keyboard_mode = 'numeric';
  } else {
    keyboard_mode = 'text';
  }

  if (is_favorit === true) {
    favorit = "\n        <svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill=\"#F37021\"\n            d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926 7.814 12.74a2.745 2.745 0 0 1 0-3.907 2.745 2.745 0 0 1 3.906 0l.28.279.279-.279a2.745 2.745 0 0 1 3.906 0 2.745 2.745 0 0 1 .001 3.907z\" />\n        </svg>\n        ";
  }

  if (is_terjadwal === true) {
    terjadwal = "<svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#F37021\"\n            d=\"M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z\" />\n        </svg>";
  }

  fav_terjadwal = "<div class=\"col-".concat(col_fav_terjadwal, " px-0 d-flex justify-content-around align-self-center\">\n        ").concat(favorit).concat(terjadwal, "\n    </div>\n    ");
  col_voucher = col_voucher - col_fav_terjadwal;

  if (is_kode_voucher === true) {
    kode_voucher = "<div class=\"col-12 pb-2\">\n        <p class=\"text-secondary font-large\">Kode Voucher</p>\n        </div>\n        <div class=\"col-".concat(col_voucher, "\">\n          <div class=\"row\">\n            <div class=\"col-10\">\n              <span class=\"text-dark font-normal font-large-1 text-start\">PLN Hemat\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                  class=\"bi bi-check-circle-fill background-light-blue\" viewBox=\"0 0 16 16\">\n                  <path\n                    d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n                </svg>\n              </span>\n            </div>\n            <div class=\"col-2 d-flex align-self-center\">\n              <span>\n                <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"\">\n              </span>\n            </div>\n          </div>\n          <hr class=\"mt-1 mb-0\">\n      </div>");
  } else {
    kode_voucher = "<div class=\"col-".concat(col_voucher, "\"></div>");
  }

  var voucher_etc = "".concat(kode_voucher).concat(fav_terjadwal);

  if (is_scan) {
    scan_mode = "<span id=\"labelContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2\" id=\"labelContact\">\n                <img src=\"./assets/images/icon/Layer_x-15.png\" width=\"20\" height=\"20\" alt=\"contact\" />\n        </span>\n        <span class=\"input-group-text border-radius-right-8\" id=\"labelScan\">\n            <img src=\"https://pic.onlinewebfonts.com/svg/img_305132.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n        </span>";
  } else {
    scan_mode = "\n        <span class=\"input-group-text border-radius-right-8\" id=\"labelContact\">\n            <img src=\"./assets/images/icon/Layer_x-15.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n        </span>";
  }

  dynamic_form_1 = "<div class=\"col-12 mt-2 dynamic-form\">\n        <div class=\"multi\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                <p id=\"label-nomor\" class=\"text-secondary font-large\">".concat(text_title, "</p>\n                </div>\n                <div class=\"col-6 text-end\">\n                <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n                </div>\n                <div class=\"col-12 pt-1\">\n                <div class=\"input-group mb-1\">\n                <input type=\"text\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-dark nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n                ").concat(scan_mode, "\n                </div>\n                <p class=\"font-normal error_number text-red mb-2\"></p>\n                </div>\n                <div class=\"col-6\">\n                <p id=\"label-nomor\" class=\"text-secondary font-large\">Nama Produk</p>\n                </div>\n                <div class=\"col-6 text-end\">\n                    <p id=\"exp-label\" class=\"text-orange font-large\">").concat(exp, "</p>\n                </div>\n                <div class=\"col-12 pt-1\">\n                <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-dark produk\" aria-label=\"Nominal\" aria-describedby=\"inptproduk\" autocomplete=\"off\" value=\"").concat(produk, "\" readonly data-produk=\"").concat(produk, "\" data-harga=\"").concat(fee, "\" data-kode=\"").concat(kode, "\" data-exp=\"").concat(exp, "\"/>\n                <span class=\"input-group-text font-large bg-transparent border-start-0 py-1 px-2 border-radius-right-8 text-orange\" id=\"totalexp\">\n                    ").concat(fee, " (Fee)\n                </span>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>");

  if (cek === true) {
    cek_button = "<button id=\"set_nominal\" onclick=\"rincian_pembelian()\" class=\"btn border-radius-10 background-orange w-100 py-1 text-white\" onclick=\"cek()\">\n            Lanjut\n        </button>";
  }

  footer_button = "<div class=\"col-12\">\n    ".concat(cek_button, "\n    </div>\n    ");
  setup_footer_button.innerHTML += footer_button;
  outer_dynamic_form.innerHTML += dynamic_form_1;
  favorit_kode_voucher_terjadwal.innerHTML += voucher_etc;
  offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'));
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

var rincian_pembelian = function rincian_pembelian() {
  outter_check_out.querySelector('.rincian').innerHTML = "";
  total_pembelian.innerHTML = "";
  pembelian = [];
  var nomor = main_input.querySelector('.nomor');
  var produk = main_input.querySelector('.produk');
  var error_notif = main_input.querySelector('.error_number');

  if (nomor.value.length > 0) {
    error_notif.classList.add('d-none');
    offcanvas_rincian_pembeilan.show();
  } else {
    console.log(document.getElementsByClassName('error_number'));
    error_notif.innerHTML = "Isi ID pelanggan dulu";
    error_notif.classList.remove('d-none');
  }

  var value_tagihan = cek_tagihan(nomor, produk);
  value_tagihan.detail.map(function (item) {
    item.map(function (item_detail) {
      var setup_tagihan = "<div class=\"col-6 mb-1\">\n            <p class=\"font-large text-secondary\">".concat(item_detail.title, "</p>\n            </div>\n            <div class=\"col-6 mb-1 text-end\">\n                <p class=\"font-large text-secondary\">").concat(item_detail.value, "</p>\n            </div>");
      outter_check_out.querySelector('.rincian').innerHTML += setup_tagihan;
    });
  });
  outter_check_out.querySelector('.rincian').innerHTML += "<div class=\"col-12 mt-1\">\n        <p class=\"font-medium text-secondary\"><span class=\"px-1 font-medium border-radius-5 border-orange text-orange me-1\">".concat(value_tagihan.xp, "</span>akan kamu dapatkan setelah transaksi sukses</p>\n    </div>");
  total_pembelian.innerHTML = "-".concat(formatRupiah(value_tagihan.totalTagihan));
};

var cek_tagihan = function cek_tagihan(tujuan, produk) {
  var tagihan = {
    "kode": produk.dataset.kode,
    "tujuan": tujuan.value,
    "voucher": "",
    "type": "cek",
    "format": "".concat(produk.dataset.kode, ".").concat(tujuan.value)
  }; //response dari android

  var response = {
    "totalTagihan": "200.000",
    "xp": "+100 xp",
    "detail": [[{
      "title": "Nama Pelanggan",
      "value": "Ahmad Jaelani"
    }, {
      "title": "ID Pelanggan",
      "value": "1234567890"
    }, {
      "title": "Tagihan",
      "value": "200.000"
    }, {
      "title": "Nama Produk",
      "value": "Telkomsel Halo"
    }]]
  };
  return response;
};

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
};