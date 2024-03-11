"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.match.js");

var data = [];
var dynamic_form_1 = '';
var dynamic_form_2 = '';
var dynamic_form_3 = '';
var first_multi_transaksi = '';
var second_multi_transaksi = '';
var data_dynamic = [];
var temp_valueproduk = [];
var pembelian = [];
var is_hlr = '';
var dynamic = 1;
var nominal_tag = '';
var temp_operator = "";
var nomor = document.getElementsByClassName('nomor');
var nominal = document.getElementsByClassName('nominal');
var headtitle = document.getElementById('head-title');
var main_input = document.getElementById('main-input');
var outer_dynamic_form = document.getElementById('dynamic-form');
var outer_produk = document.getElementById('outter-produk');
var footer = document.getElementById('footer');
var total_bottom = document.getElementById('total-bottom');
var kode_vouher = document.getElementById('kode-voucher');
var total_pembelian = document.getElementById('total-pembelian');
var saldo_awal = document.getElementById('saldo-awal');
var saldo_akhir = document.getElementById('saldo-akhir');
var outter_check_out = document.getElementById('outter-check-out');
var favorit_kode_voucher_terjadwal = document.getElementById('favorit-kode-voucher-terjadwal');
var checkbox_pin = document.getElementById("switchMaterial");
var offcanvas_rincian_pembeilan = "";
var offcanvas_harga = '';
var offcanvasRincianMultitrx = "";

window.onload = function () {
  data = {
    "judul": "Pulsa",
    "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "template": "1",
    "isPromo": true,
    "isFavorit": true,
    "isTerjadwal": true,
    "settingTujuan": {
      "title": "Nomor HP",
      "hint": "Contoh: 081234567890",
      "isKontak": true,
      "isScan": true,
      "isHlr": true,
      "tipe": "phone",
      "is_autocomplete": true
    },
    "settingNominal": {
      "title": "Pilih Nominal",
      "hint": "",
      "isEdit": false,
      "tipe": "number"
    },
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
    "data": [{
      "kode_operator": "ISAT",
      "operator": "Indosat",
      "icon": "https://mura.co.id/app/img/indosat.png",
      "hlr": "0815,0816,0855,0856,0857,0858,0814",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "Indosat Regular",
        "kode": "I5",
        "produk": "5.000",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "Indosat Regular",
        "kode": "I10",
        "produk": "10.000",
        "exp": "+50 exp",
        "harga": "10500"
      }, {
        "tag": "Indosat Regular",
        "kode": "I15",
        "produk": "15.000",
        "exp": "+50 exp",
        "harga": "15500"
      }, {
        "tag": "Indosat Promo",
        "kode": "I20",
        "produk": "20.000",
        "exp": "+50 exp",
        "harga": "20500"
      }, {
        "tag": "Indosat Regular",
        "kode": "I25",
        "produk": "25.000",
        "exp": "+100 exp",
        "harga": "25500"
      }, {
        "tag": "Indosat Promo",
        "kode": "I30",
        "produk": "30.000",
        "exp": "+50 exp",
        "harga": "30500"
      }, {
        "tag": "Indosat Regular",
        "kode": "I50",
        "produk": "50.000",
        "exp": "+120 exp",
        "harga": "50500"
      }, {
        "tag": "Indosat Regular",
        "kode": "I100",
        "produk": "100.000",
        "exp": "+120 exp",
        "harga": "100500"
      }]
    }, {
      "kode_operator": "S",
      "operator": "Telkomsel",
      "icon": "https://mura.co.id/app/img/telkomsel.png",
      "hlr": "0811,0812,0813,0852,0821,0853,0823,0851,0822",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "Telkomsel Promo",
        "kode": "S5",
        "produk": "5.000",
        "exp": "+50 exp",
        "isPromo": false,
        "harga": "5500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S10",
        "produk": "10.000",
        "exp": "+50 exp",
        "isPromo": true,
        "harga": "10500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S15",
        "produk": "15.000",
        "exp": "+50 exp",
        "isPromo": false,
        "harga": "15500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S20",
        "produk": "20.000",
        "exp": "+50 exp",
        "isPromo": true,
        "harga": "20500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S30",
        "produk": "30.000",
        "exp": "+50 exp",
        "isPromo": false,
        "harga": "30500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S25",
        "produk": "25.000",
        "exp": "+100 exp",
        "isPromo": false,
        "harga": "25500"
      }, {
        "tag": "Telkomsel Regular",
        "kode": "S50",
        "produk": "50.000",
        "exp": "+120 exp",
        "isPromo": true,
        "harga": "50500"
      }, {
        "tag": "Telkomsel Promo",
        "kode": "S100",
        "produk": "100.000",
        "exp": "+120 exp",
        "isPromo": true,
        "harga": "100500"
      }]
    }, {
      "kode_operator": "T",
      "operator": "Tri",
      "icon": "https://wirapay.co.id/app/img/tri.png",
      "hlr": "0899,0898,0897,0896,0895,0893,0892",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "Tri Promo",
        "kode": "T5",
        "produk": "5.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "Tri Regular",
        "kode": "T10",
        "produk": "10.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "10500"
      }, {
        "tag": "Tri Regular",
        "kode": "T15",
        "produk": "15.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "15500"
      }, {
        "tag": "Tri Promo",
        "kode": "T20",
        "produk": "20.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "20500"
      }, {
        "tag": "Tri Promo",
        "kode": "T30",
        "produk": "30.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "30500"
      }, {
        "tag": "Tri Regular",
        "kode": "T25",
        "produk": "25.000",
        "isPromo": false,
        "exp": "+100 exp",
        "harga": "25500"
      }, {
        "tag": "Tri Regular",
        "kode": "T50",
        "produk": "50.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "50500"
      }, {
        "tag": "Tri Regular",
        "kode": "T100",
        "produk": "100.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "100500"
      }]
    }, {
      "kode_operator": "X",
      "operator": "XL",
      "icon": "https://wirapay.co.id/app/img/xl.png",
      "hlr": "0817,0818,0819,0859,0878,0877,0871",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "XL Promo",
        "kode": "XL5",
        "produk": "5.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "XL Regular",
        "kode": "XL10",
        "produk": "10.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "10500"
      }, {
        "tag": "XL Regular",
        "kode": "XL15",
        "produk": "15.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "15500"
      }, {
        "tag": "XL Regular",
        "kode": "XL20",
        "produk": "20.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "20500"
      }, {
        "tag": "XL Regular",
        "kode": "XL30",
        "produk": "30.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "30500"
      }, {
        "tag": "XL Regular",
        "kode": "XL25",
        "produk": "25.000",
        "isPromo": false,
        "exp": "+100 exp",
        "harga": "25500"
      }, {
        "tag": "XL Regular",
        "kode": "XL50",
        "produk": "50.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "50500"
      }, {
        "tag": "XL Regular",
        "kode": "XL100",
        "produk": "100.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "100500"
      }]
    }, {
      "kode_operator": "BY",
      "operator": "BY.U",
      "icon": "https://wirapay.co.id/app/img/by_u.png",
      "hlr": "08515",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "By.U Regular",
        "kode": "BY10",
        "produk": "10.000",
        "exp": "+50 exp",
        "harga": "10500"
      }, {
        "tag": "By.U Regular",
        "kode": "BY15",
        "produk": "15.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "15500"
      }, {
        "tag": "By. U Regular",
        "kode": "BY20",
        "produk": "20.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "20500"
      }, {
        "tag": "By. U Promo",
        "kode": "BY30",
        "produk": "30.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "30500"
      }, {
        "tag": "By. U Regular",
        "kode": "BY25",
        "produk": "25.000",
        "isPromo": false,
        "exp": "+100 exp",
        "harga": "25500"
      }, {
        "tag": "By. U Regular",
        "kode": "BY50",
        "produk": "50.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "50500"
      }, {
        "tag": "By. U Regular",
        "kode": "BY100",
        "produk": "100.000",
        "isPromo": false,
        "exp": "+120 exp",
        "harga": "100500"
      }]
    }, {
      "kode_operator": "SM",
      "operator": "Smartfren",
      "icon": "https://wirapay.co.id/app/img/smartfren.png",
      "hlr": "0881,0882,0883,0884,0888,0887,0885,0880,0886,0889",
      "format": "[kode].[tujuan].[pin]",
      "detailGrid": 2,
      "detail": [{
        "tag": "Smartfren Regular",
        "kode": "I5",
        "produk": "5.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I10",
        "produk": "10.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "10500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I15",
        "produk": "15.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "15500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I20",
        "produk": "20.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "20500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I30",
        "produk": "30.000",
        "isPromo": false,
        "exp": "+50 exp",
        "harga": "30500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I25",
        "produk": "25.000",
        "isPromo": false,
        "exp": "+100 exp",
        "harga": "25500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I50",
        "produk": "50.000",
        "isPromo": true,
        "exp": "+120 exp",
        "harga": "50500"
      }, {
        "tag": "Smartfren Regular",
        "kode": "I100",
        "produk": "100.000",
        "isPromo": true,
        "exp": "+120 exp",
        "harga": "100500"
      }]
    }]
  };
  setupview(data);
  get_pin();
};

var setupview = function setupview(data) {
  var hint = data.settingTujuan.hint;
  var keyboard_mode = '';
  var favorit = '';
  var col_voucher = 12;
  var col_fav_terjadwal = 3;
  var fav_terjadwal = '';
  var kode_voucher = '';
  var terjadwal = '';
  is_hlr = data.settingTujuan.isHlr;
  var scan_mode = '';
  var is_kode_voucher = data.isPromo;
  var is_favorit = data.isFavorit;
  var is_terjadwal = data.isTerjadwal;
  var is_kontak = data.settingTujuan.isKontak;
  var is_scan = data.settingTujuan.isScan;
  var type_keyboard = data.settingTujuan.tipe;
  var text_title = data.settingTujuan.title;
  var nominal_title = data.settingNominal.title;
  var header = data.keterangan;
  headtitle.innerHTML = header;
  offcanvas_harga = new bootstrap.Offcanvas(document.getElementById('offcanvasHarga'));

  if (type_keyboard === "phone") {
    keyboard_mode = 'numeric';
  } else {
    keyboard_mode = 'text';
  }

  if (is_favorit === true) {
    favorit = "\n    <svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill=\"#F37021\"\n        d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926 7.814 12.74a2.745 2.745 0 0 1 0-3.907 2.745 2.745 0 0 1 3.906 0l.28.279.279-.279a2.745 2.745 0 0 1 3.906 0 2.745 2.745 0 0 1 .001 3.907z\" />\n    </svg>\n    ";
  }

  if (is_terjadwal === true) {
    terjadwal = "<svg width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"#F37021\"\n        d=\"M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z\" />\n    </svg>";
  }

  fav_terjadwal = "<div class=\"col-".concat(col_fav_terjadwal, " px-0 d-flex justify-content-around align-self-center\">\n      ").concat(favorit).concat(terjadwal, "\n  </div>");
  col_voucher = col_voucher - col_fav_terjadwal;

  if (is_kode_voucher === true) {
    kode_voucher = "<div class=\"col-12 pb-2\">\n      <p class=\"text-secondary font-large\">Kode Voucher</p>\n      </div>\n      <div class=\"col-".concat(col_voucher, "\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <span class=\"text-dark font-normal font-large-1 text-start\">PLN Hemat\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                class=\"bi bi-check-circle-fill background-light-blue\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n              </svg>\n            </span>\n          </div>\n          <div class=\"col-2 d-flex align-self-center\">\n            <span>\n              <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"\">\n            </span>\n          </div>\n        </div>\n        <hr class=\"mt-1 mb-0\">\n    </div>");
  } else {
    kode_voucher = "<div class=\"col-".concat(col_voucher, "\"></div>");
  }

  var voucher_etc = "".concat(kode_voucher).concat(fav_terjadwal);

  if (is_scan) {
    scan_mode = "<span id=\"labelContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2\" id=\"labelContact\">\n              <img src=\"./assets/images/icon/Layer_x-15.png\" width=\"20\" height=\"20\" alt=\"contact\" />\n      </span>\n      <span class=\"input-group-text border-radius-right-8\" id=\"labelScan\">\n          <img src=\"https://pic.onlinewebfonts.com/svg/img_305132.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n      </span>";
  } else {
    scan_mode = "\n      <span class=\"input-group-text border-radius-right-8\" id=\"labelContact\">\n          <img src=\"./assets/images/icon/Layer_x-15.png\"  width=\"20\" height=\"20\" alt=\"scan\" />\n      </span>";
  }

  var first_multi_transaksi = "<div class=\"col-6 pb-2\">\n      <p class=\"font-medium text-light-blue\" onclick=\"multi_keterangan()\">Multi transaksi</p>\n      </div>\n      <div class=\"col-6 pb-2 text-end\">\n          <button class=\"bg-transparent p-0 btn btn-small font-medium text-orange delete-dynamic\" onclick=\"remove_form(this)\">Hapus X</button>\n      </div>";
  var second_multi_transaksi = "\n    <div class=\"col-12 pb-2 text-end\">\n        <button class=\"bg-transparent p-0 btn btn-small font-medium text-orange delete-dynamic\" onclick=\"remove_form(this)\">Hapus X</button>\n    </div>";
  dynamic_form_1 = "<div class=\"col-12 mt-2 dynamic-form\">\n      <div class=\"multi\">\n          <div class=\"row\">\n              <div class=\"col-6\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">".concat(text_title, "</p>\n              </div>\n              <div class=\"col-6 text-end\">\n              <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n              </div>\n              <div class=\"col-12 mb-1 pt-1\">\n              <div class=\"input-group mb-1\">\n              <input type=\"text\" onkeyup=\"setup_auto_complete(this);\" maxlength=\"15\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n              ").concat(scan_mode, "\n              </div>\n              <p class=\"font-normal hlr-notfound text-red mb-2 d-none\"></p>\n              </div>\n              <div class=\"col-12\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">").concat(nominal_title, "</p>\n              </div>\n              <div class=\"col-12 pt-1\">\n              <div class=\"input-group\" onclick=\"off_harga(this)\">\n              <input type=\"text\" class=\"form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal\" aria-label=\"Nominal\" aria-describedby=\"inptNominal\" autocomplete=\"off\" readonly data-produk=\"\" data-harga=\"\" data-kode=\"\" data-exp=\"\"/>\n              <span id=\"nominalContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8\" id=\"labelContact\">\n                  <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"contact\" />\n              </span>\n              </div>\n              <p class=\"font-normal produk-notfound text-red mb-2 d-none\"></p>\n              </div>\n          </div>\n      </div>\n  </div>");
  dynamic_form_2 = "<div class=\"col-12 mt-2 dynamic-form\">\n      <div class=\"multi\">\n          <div class=\"row\">\n              ".concat(first_multi_transaksi, "\n              <div class=\"col-6\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">").concat(text_title, "</p>\n              </div>\n              <div class=\"col-6 text-end\">\n              <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n              </div>\n              <div class=\"col-12 mb-1 pt-1\">\n              <div class=\"input-group mb-1\">\n              <input type=\"text\" onkeyup=\"setup_auto_complete(this);\" maxlength=\"15\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n              ").concat(scan_mode, "\n              </div>\n              <p class=\"font-normal hlr-notfound text-red d-none\"></p>\n              </div>\n              <div class=\"col-12\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">").concat(nominal_title, "</p>\n              </div>\n              <div class=\"col-12 pt-1\">\n              <div class=\"input-group\" onclick=\"off_harga(this)\">\n              <input type=\"text\" class=\"form-control bg-white border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nominal\" aria-label=\"Nominal\" aria-describedby=\"inptNominal\" autocomplete=\"off\" readonly data-produk=\"\" data-harga=\"\" data-kode=\"\" data-exp=\"\"/>\n              <span id=\"nominalContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8\" id=\"labelContact\">\n                  <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"contact\" />\n              </span>\n              </div>\n              <p class=\"font-normal produk-notfound text-red mb-2 d-none\"></p>\n              </div>\n          </div>\n      </div>\n  </div>");
  dynamic_form_3 = "<div class=\"col-12 mt-2 dynamic-form\">\n      <div class=\"multi\">\n          <div class=\"row\">\n              ".concat(second_multi_transaksi, "\n              <div class=\"col-6\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">").concat(text_title, "</p>\n              </div>\n              <div class=\"col-6 text-end\">\n              <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n              </div>\n              <div class=\"col-12 mb-1 pt-1\">\n              <div class=\"input-group mb-1\">\n              <input type=\"text\" onfocus=\"scrollbottom(this)\" maxlength=\"15\" onkeyup=\"setup_auto_complete(this);\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n              ").concat(scan_mode, "\n              </div>\n              <p class=\"font-normal hlr-notfound text-red mb-2 d-none\"></p>\n              </div>\n              <div class=\"col-12\">\n              <p id=\"label-nomor\" class=\"text-secondary font-large\">").concat(nominal_title, "</p>\n              </div>\n              <div class=\"col-12 pt-1\">\n              <div class=\"input-group\" onclick=\"off_harga(this)\">\n              <input type=\"text\" class=\"form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal\" aria-label=\"Nominal\" aria-describedby=\"inptNominal\" autocomplete=\"off\" readonly data-produk=\"\" data-harga=\"\" data-kode=\"\" data-exp=\"\"/>\n              <span id=\"nominalContact\" class=\"input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8\" id=\"labelContact\">\n                  <img src=\"./assets/images/icon/Layer_x-29.png\" width=\"13\" height=\"7\" alt=\"contact\" />\n              </span>\n              </div>\n              <p class=\"font-normal produk-notfound text-red mb-2 d-none\"></p>\n              </div>\n          </div>\n      </div>\n  </div>");
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

var scrollbottom = function scrollbottom(e) {
  setTimeout(function () {
    var position = e.getBoundingClientRect().y;
    var find_delete = e.parentNode.parentNode.parentNode.querySelector('.delete-dynamic');
    var screen_withkeyboard = window.innerHeight - document.getElementById('footer-height').offsetHeight - e.getBoundingClientRect().height;

    if (position > screen_withkeyboard) {
      find_delete.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, 300);
};

var setup_auto_complete = function setup_auto_complete(e) {
  var value_length = e.value.length;
  var hlr_not_found = e.parentNode.parentNode.querySelector(".hlr-notfound");
  var operator_label = e.parentNode.parentNode.parentNode.querySelector('.operator-label');
  var this_nominal = e.parentNode.parentNode.parentNode.querySelector('.nominal');

  if (is_hlr) {
    if (value_length > 3 && value_length <= 5) {
      var hlr = cek_hlr(e.value, "change");

      if (hlr.length != 0) {
        var get_operator = hlr.map(function (data) {
          var operator = data.operator;
          operator_label.innerHTML = operator;
          hlr_not_found.classList.add("d-none");
          reset_nominal(this_nominal);
        });
      } else {
        reset_nominal(this_nominal);
        hlr_not_found.classList.remove("d-none");
        hlr_not_found.innerHTML = "Operator tidak di temukan";
      }
    } else if (value_length <= 3) {
      reset_nominal(this_nominal);
      hlr_not_found.classList.add("d-none");
      operator_label.innerHTML = "";
    }
  }
};

var reset_nominal = function reset_nominal(e) {
  e.value = "";
  e.dataset.produk = "";
  e.dataset.kode = "";
  e.dataset.exp = "";
  e.dataset.harga = "";
  footer.classList.add('d-none');
};

var cek_hlr = function cek_hlr(inp, funct) {
  var data_peroperator = data.data;
  var hlr = [];

  if (funct === 'change') {
    var filter_hlr = data_peroperator.map(function (data) {
      data.hlr.split(",").map(function (findhlr) {
        var x = inp.includes(findhlr);

        if (x === true) {
          hlr.push(data);
        }
      });
    });
  } else {
    var _filter_hlr = data_peroperator.map(function (data) {
      data.hlr.split(",").map(function (findhlr) {
        if (inp === findhlr) {
          hlr.push(data);
        }
      });
    });
  }

  return hlr;
};

var off_harga = function off_harga(e) {
  var length_nomor = e.parentNode.parentNode.querySelector('.nomor').value;

  if (length_nomor.length >= 4) {
    offcanvas_harga.show();
    var nomor_tag = e.parentNode.parentNode.querySelector('.nomor');
    nominal_tag = e.querySelector('.nominal');
    var hlr = cek_hlr(nomor_tag.value.substr(0, 5), "change");

    if (hlr.length > 1) {
      hlr = cek_hlr(nomor_tag.value.substr(0, 5), "click");
    }

    setup_view_harga(hlr, e.querySelector('.nominal'));
  }
};

var setup_view_harga = function setup_view_harga(hlr, elem) {
  document.getElementById('set_nominal').disabled = true;
  outer_produk.innerHTML = "";
  var get_produk = hlr.map(function (data) {
    var detailGrid = data.detailGrid;
    detailGrid = 12 / parseInt(detailGrid);
    var detail = data.detail;
    var get_produk = detail.map(function (data) {
      var border = "";
      var background = "";
      var background_2 = "";

      if (elem.value.length === 0) {
        border = "";
        background = "";
        data.isPromo ? background_2 = "background-green" : background_2 = "background-gray";
      } else {
        if (elem.dataset.kode === data.kode) {
          border = "border-orange";
          background = "background-yellow-light";
          data.isPromo ? background_2 = "background-green" : background_2 = "background-orange";
          temp_valueproduk = {
            "produk": data.produk,
            "price": data.harga,
            "kode_produk": data.kode,
            "exp": data.exp
          };
        } else {
          border = "";
          background = "";
          data.isPromo ? background_2 = "background-green" : background_2 = "background-gray";
        }

        document.getElementById('set_nominal').disabled = false;
      }

      var view_produk = "<div class=\"col-".concat(detailGrid, " mb-3\" onclick=\"set_harga(this)\">\n                <div class=\"shadow-sm ").concat(border, " ").concat(background, " border-radius-8 h-100 mx-0 box-harga\"> \n                    <div class=\"row gx-0\">\n                        <div class=\"col-12\">\n                            <span class=\"").concat(background_2, " tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5\">").concat(data.tag, "</span>\n                        </div>\n                        <div class=\"col-12 py-2\">\n                            <p class=\"font-large-1 fw-bold text-dark ms-2 produk\" data-produk=\"").concat(data.produk, "\">").concat(data.produk, "</p>\n                        </div>\n                        <div class=\"col-7 py-2 pe-0\">\n                            <p class=\"font-large text-dark ms-2 price\" data-harga=\"").concat(data.harga, "\">").concat(formatRupiah(data.harga, 'Rp. '), "</p>\n                        </div>\n                        <div class=\"col-5 ps-0 pe-2 py-2 text-end\">\n                            <p class=\"text-orange font-large exp\" data-exp=\"").concat(data.exp, "\">").concat(data.exp, "</p>\n                            <p class=\"text-orange font-large kode_produk d-none\" data-kode=\"").concat(data.kode, "\">").concat(data.kode, "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>");
      outer_produk.innerHTML += view_produk;
    });
  });
};

var multi_keterangan = function multi_keterangan() {
  offcanvasRincianMultitrx = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianMultitrx'));
  offcanvasRincianMultitrx.show();
  footer.classList.add("d-none");
};

document.getElementById('offcanvasRincianMultitrx').addEventListener('hidden.bs.offcanvas', function () {
  // do something...
  footer.classList.remove("d-none");
});

var set_harga = function set_harga(event) {
  document.getElementById('set_nominal').disabled = false;
  var tagging = event.querySelector('.tagging');
  var produk = event.querySelector('.produk');
  var box_harga = event.querySelector('.box-harga');
  var price = event.querySelector('.price');
  var exp = event.querySelector('.exp');
  var kode_produk = event.querySelector('.kode_produk');
  var remove_active = document.getElementsByClassName('box-harga');

  for (var i = 0; i < remove_active.length; i++) {
    remove_active[i].classList.remove('border-orange', 'background-yellow-light');
    remove_active[i].querySelector('.tagging').classList.remove('background-orange');
    remove_active[i].querySelector('.tagging').classList.add('background-gray');
  }

  box_harga.classList.contains('background-green') ? box_harga.classList.add('background-yellow-light', 'border-orange') : tagging.classList.remove('background-gray'), tagging.classList.add('background-orange'), box_harga.classList.add('background-yellow-light', 'border-orange');
  temp_valueproduk = {
    "produk": produk.dataset.produk,
    "price": price.dataset.harga,
    "kode_produk": kode_produk.dataset.kode,
    "exp": exp.dataset.exp
  };
};

var set_nominal = function set_nominal() {
  total_bottom.innerHTML = "";
  nominal_tag.value = temp_valueproduk.produk;
  nominal_tag.dataset.produk = temp_valueproduk.produk;
  nominal_tag.dataset.harga = temp_valueproduk.price;
  nominal_tag.dataset.kode = temp_valueproduk.kode_produk;
  nominal_tag.dataset.exp = temp_valueproduk.exp;
  var error_produk = nominal_tag.parentNode.parentNode.querySelector('.produk-notfound');
  error_produk.classList.add('d-none');
  footer.classList.remove('d-none');
  offcanvas_harga.hide();
  nominal_tag = '';
  temp_valueproduk = [];
  var total = 0;

  for (var x = 0; x < nominal.length; x++) {
    total += parseInt(nominal[x].dataset.harga);
  }

  total = formatRupiah(String(total), 'Rp. ');
  total_bottom.innerHTML += total;
};

var rincian_pembelian = function rincian_pembelian() {
  outter_check_out.innerHTML = "";
  total_pembelian.innerHTML = "";
  pembelian = [];
  offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'));
  var total_nomor = nomor.length;
  var sum_total_harga = 0;
  var isValid = true;
  var error_nomor = document.getElementsByClassName('hlr-notfound');
  var error_produk = document.getElementsByClassName('produk-notfound');

  for (var i = 0; i < total_nomor; i++) {
    if (nomor[i].value === '') {
      isValid = false;
      error_nomor[i].classList.remove('d-none');
      error_nomor[i].innerHTML = 'Isi nomornya dulu';
    }

    if (nominal[i].value === '' || nominal[i].dataset.produk === '') {
      isValid = false;
      error_produk[i].classList.remove('d-none');
      error_produk[i].innerHTML = 'Isi produknya dulu';
    }

    var view_rincian_pembelian = '';
    var pembelian_item = {
      "nomor_tag": nomor[i].value,
      "nominal": nominal[i].value,
      "produk": nominal[i].dataset.produk,
      "harga": nominal[i].dataset.harga,
      "kode_produk": nominal[i].dataset.kode,
      "exp": nominal[i].dataset.exp
    };
    view_rincian_pembelian = "<div class=\"row check-out mb-1\">\n      <div class=\"col-4 mb-1\">\n        <p class=\"font-large text-secondary\">Jenis Produk</p>\n      </div>\n      <div class=\"col-8 mb-1 text-end\">\n        <p class=\"font-large text-secondary\">".concat(data.judul, "</p>\n      </div>\n      <div class=\"col-4 mb-1\">\n        <p class=\"font-large text-secondary\">Nama Produk</p>\n      </div>\n      <div class=\"col-8 mb-1 text-end\">\n        <p class=\"font-large text-secondary\">").concat(nominal[i].dataset.produk, "</p>\n      </div>\n      <div class=\"col-4 mb-1\">\n        <p class=\"font-large text-secondary\">Nomor Tujuan</p>\n      </div>\n      <div class=\"col-8 mb-1 text-end\">\n        <p class=\"font-large text-secondary\">").concat(nomor[i].value, "</p>\n      </div>\n      <div class=\"col-12 mt-1\">\n        <p class=\"font-medium text-secondary\"><span class=\"px-1 font-medium border-radius-5 border-orange text-orange me-1\">").concat(nominal[i].dataset.exp, "</span>akan kamu dapatkan setelah transaksi sukses</p>\n      </div>\n    </div>");
    outter_check_out.innerHTML += view_rincian_pembelian;
    sum_total_harga += parseInt(nominal[i].dataset.harga);
    pembelian.push(pembelian_item);
  }

  if (isValid === true) {
    offcanvas_rincian_pembeilan.show();
  }

  total_pembelian.innerHTML += "-" + formatRupiah(String(sum_total_harga), 'Rp. ');
}; // only number


var isNumber = function isNumber(evt, data) {
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

var add_form = function add_form() {
  if (dynamic < 5) {
    dynamic = dynamic + 1;
    var total_nomor = nomor.length;
    set_dynamic_data(total_nomor);
    footer.classList.add('d-none');
  }
};

var remove_form = function remove_form(remove) {
  dynamic = dynamic - 1;
  remove.parentNode.parentNode.parentNode.remove();
  var total_nomor = nomor.length;
  set_dynamic_data(total_nomor);

  for (var i = 0; i < dynamic; i++) {
    if (nomor[i].value === '' || nominal[i].value === '') {
      footer.classList.add('d-none');
      break;
    } else {
      footer.classList.remove('d-none');
    }
  }
};

var set_dynamic_data = function set_dynamic_data(total_nomor) {
  data_dynamic = [];
  var label_operator = document.getElementsByClassName('operator-label');

  for (var i = 0; i < total_nomor; i++) {
    var _data2 = {
      "nomor": nomor[i].value,
      "nominal": nominal[i].value,
      "produk": nominal[i].dataset.produk,
      "price": nominal[i].dataset.harga,
      "exp": nominal[i].dataset.exp,
      "kode_produk": nominal[i].dataset.kode,
      "operator": label_operator[i].textContent
    };
    data_dynamic.push(_data2);
  }

  outer_dynamic_form.innerHTML = '';

  for (var _i = 0; _i < dynamic; _i++) {
    if (_i === 0) {
      if (dynamic === 1) {
        main_input.classList.add('min-margin-top-min');
        main_input.classList.remove('min-margin-top-min-2');
        outer_dynamic_form.innerHTML += dynamic_form_1;
      } else {
        main_input.classList.remove('min-margin-top-min');
        main_input.classList.add('min-margin-top-min-2');
        outer_dynamic_form.innerHTML += dynamic_form_2;
      }
    } else {
      outer_dynamic_form.innerHTML += dynamic_form_3;
    }
  }

  for (var _i2 = 0; _i2 < data_dynamic.length; _i2++) {
    nomor[_i2].value = data_dynamic[_i2].nomor;
    nominal[_i2].value = data_dynamic[_i2].nominal;
    nominal[_i2].dataset.produk = data_dynamic[_i2].produk;
    nominal[_i2].dataset.harga = data_dynamic[_i2].price;
    nominal[_i2].dataset.kode = data_dynamic[_i2].kode_produk;
    nominal[_i2].dataset.exp = data_dynamic[_i2].exp;
    label_operator[_i2].innerHTML += data_dynamic[_i2].operator;
  }
}; //rupiah 


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

var autocomplete = function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    /*close any already open lists of autocompleted values*/

    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/

    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/

        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/

  var addActive = function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/

    x[currentFocus].classList.add("autocomplete-active");
  };

  var removeActive = function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  };

  var closeAllLists = function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");

    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };
  /*execute a function when someone clicks in the document:*/


  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
};