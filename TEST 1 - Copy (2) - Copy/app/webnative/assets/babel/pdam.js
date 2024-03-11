"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.search.js");

var data = [];
var produk = [];
var dynamic_form_1 = '';
var headtitle = document.getElementById('head-title');
var outer_dynamic_form = document.getElementById('dynamic-form');
var favorit_kode_voucher_terjadwal = document.getElementById('favorit-kode-voucher-terjadwal');
var setup_footer_button = document.getElementById('setup-footer-button');
var footer = document.getElementById('footer');
var outter_check_out = document.getElementById('outter-check-out');
var total_pembelian = document.getElementById('total-pembelian');
var checkbox_pin = document.getElementById("switchMaterial");
var main_input = document.getElementById('main-input');
var offcanvas_rincian_pembeilan = "";

window.onload = function () {
  data = {
    "judul": "PDAM",
    "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "template": "2",
    "isPromo": true,
    "isFavorit": true,
    "isTerjadwal": true,
    "settingTujuan": {
      "title": "Nomor ID Pelanggan",
      "hint": "Contoh: 122021102174",
      "isKontak": true,
      "isScan": true,
      "isHlr": false,
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
    "data": [{
      "kode_operator": "PDAM",
      "operator": "BAYAR PDAM",
      "icon": "https://mura.co.id/app/img/pdam.png",
      "keterangan": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "format": "[kode].[tujuan].[pin]",
      "cek": {
        "isCek": true,
        "tipeCek": "1"
      },
      "detailGrid": 1,
      "detail": [{
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM1",
        "produk": "Kota Semarang",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM2",
        "produk": "Kota Jakarta",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM3",
        "produk": "Jakarta Utara",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM4",
        "produk": "Jakarta Timur",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM5",
        "produk": "Jakarta Barat",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM6",
        "produk": "Jakarta Selatan",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM7",
        "produk": "Kota Surabaya",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM8",
        "produk": "Kota Bandung",
        "exp": "+50 exp",
        "harga": "5500"
      }, {
        "tag": "PDAM Reguler",
        "kode": "BYRPDAM9",
        "produk": "Kabupaten Semarang",
        "exp": "+50 exp",
        "harga": "5500"
      }]
    }]
  };
  setupview(data);
  autocomplete(document.getElementById("wilayah"), data.data[0].detail);
  get_pin();
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

var setupview = function setupview(data) {
  var hint = data.settingPin.hint;
  var keyboard_mode = '';
  var favorit = '';
  var footer_button = '';
  var cek_button = '';
  var cek = data.data[0].cek.isCek;
  var col_voucher = 12;
  var col_fav_terjadwal = 3;
  var fav_terjadwal = '';
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
  headtitle.innerHTML = header; // offcanvas_harga =  new bootstrap.Offcanvas(document.getElementById('offcanvasHarga'))

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

  dynamic_form_1 = "<div class=\"col-12 mt-2 dynamic-form\">\n    <div class=\"multi\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n            <p id=\"label-nomor\" class=\"text-secondary font-large\">".concat(text_title, "</p>\n            </div>\n            <div class=\"col-6 text-end\">\n            <p id=\"label-nomor-operator\" class=\"text-secondary font-large operator-label\"></p>\n            </div>\n            <div class=\"col-12 pt-1 mb-2\">\n            <div class=\"input-group\">\n            <input type=\"text\" onkeypress=\"return isNumber(event,this);\" class=\"form-control border-end-0 shadow-none border-radius-left-8 font-large-1 text-secondary nomor\" placeholder=\"").concat(hint, "\" aria-label=\"Nomor User\" inputmode=\"").concat(keyboard_mode, "\"  aria-describedby=\"inptNomor\" autocomplete=\"off\" />\n            ").concat(scan_mode, "\n            </div>\n            <p id=\"label-nomor\" class=\"text-red font-large error_number d-none\">error</p>\n            </div>\n            <div class=\"col-12\">\n            <p id=\"label-nomor\" class=\"text-secondary font-large\">Wilayah</p>\n            </div>\n            <div class=\"col-12 pt-1\">\n                <input id=\"wilayah\" onfocusin=\"remove_footer()\" onfocusout=\"add_footer()\" type=\"text\" class=\"form-control bg-white shadow-none border-radius-8 font-large-1 text-dark wilayah\" aria-label=\"Nominal\" aria-describedby=\"inptwilayah\" autocomplete=\"off\" data-harga=\"\" data-kode=\"\" data-exp=\"\"/>\n            </div>\n            <p id=\"label-nomor\" class=\"text-red font-large error_wilayah d-none\">error</p>\n        </div>\n    </div>\n    </div>");

  if (cek === true) {
    cek_button = "<button id=\"set_nominal\" onclick=\"rincian_pembelian()\" class=\"btn border-radius-10 background-orange w-100 py-1 text-white\" onclick=\"cek()\">\n            Lanjut\n        </button>";
  }

  footer_button = "<div class=\"col-12\">\n    ".concat(cek_button, "\n    </div>\n    ");
  outer_dynamic_form.innerHTML += dynamic_form_1;
  setup_footer_button.innerHTML += footer_button;
  favorit_kode_voucher_terjadwal.innerHTML += voucher_etc;
  var find_produk = data.data.map(function (item) {
    item.detail.map(function (findproduk) {
      produk.push(findproduk.produk);
    });
  });
  offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'));
};

var remove_footer = function remove_footer() {
  footer.classList.add('d-none');
};

var add_footer = function add_footer() {
  footer.classList.remove('d-none');
};

var rincian_pembelian = function rincian_pembelian() {
  outter_check_out.querySelector('.rincian').innerHTML = "";
  total_pembelian.innerHTML = "";
  pembelian = [];
  var nomor = main_input.querySelector('.nomor');
  var wilayah = main_input.querySelector('.wilayah');
  var error_nomor = main_input.querySelector('.error_number');
  var error_wilayah = main_input.querySelector('.error_wilayah');

  if (nomor.value.length > 0) {
    if (wilayah.dataset.kode != '') {
      var value_tagihan = cek_tagihan(nomor, wilayah);
      value_tagihan.detail.map(function (item) {
        item.map(function (item_detail) {
          var setup_tagihan = "<div class=\"col-6 mb-1\">\n                    <p class=\"font-large text-secondary\">".concat(item_detail.title, "</p>\n                    </div>\n                    <div class=\"col-6 mb-1 text-end\">\n                        <p class=\"font-large text-secondary\">").concat(item_detail.value, "</p>\n                    </div>");
          outter_check_out.querySelector('.rincian').innerHTML += setup_tagihan;
        });
      });
      outter_check_out.querySelector('.rincian').innerHTML += "<div class=\"col-12 mt-1\">\n                <p class=\"font-medium text-secondary\"><span class=\"px-1 font-medium border-radius-5 border-orange text-orange me-1\">".concat(value_tagihan.xp, "</span>akan kamu dapatkan setelah transaksi sukses</p>\n            </div>");
      total_pembelian.innerHTML = "-".concat(formatRupiah(value_tagihan.totalTagihan));
      offcanvas_rincian_pembeilan.show();
    } else {
      error_wilayah.classList.remove('d-none');
      error_wilayah.innerHTML = "Data wilayah tidak ditemukan";
    }
  } else {
    error_nomor.classList.remove('d-none');
    error_nomor.innerHTML = "Isi nomor id pelanggan lebih dulu";
  }
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
      "value": "PDAM Batu"
    }]]
  };
  return response;
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

var autocomplete = function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

  inp.addEventListener("input", function (e) {
    main_input.querySelector('.error_wilayah').classList.add('d-none');
    inp.dataset.kode = '';
    inp.dataset.exp = '';
    inp.dataset.harga = '';
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
      var similiar = arr[i].produk.toUpperCase().includes(val.toUpperCase());

      if (similiar === true) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/

        var index_highlight = arr[i].produk.toUpperCase().search(val.toUpperCase()); // b.innerHTML = "<strong>" + arr[i].produk.substr(0, val.length) + "</strong>";
        // b.innerHTML += arr[i].produk

        var highlight = arr[i].produk.substr(index_highlight, val.length);
        b.innerHTML += arr[i].produk.replace(highlight, "<strong>".concat(highlight, "</strong>"));
        /*insert a input field that will hold the current array item's value:*/

        b.innerHTML += "<input type='hidden' data-kode='".concat(arr[i].kode, "' data-exp='").concat(arr[i].exp, "' data-harga='").concat(arr[i].harga, "' value='").concat(arr[i].produk, "'>");
        /*execute a function when someone clicks on the item value (DIV element):*/

        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          inp.dataset.kode = this.getElementsByTagName("input")[0].dataset.kode;
          inp.dataset.exp = this.getElementsByTagName("input")[0].dataset.exp;
          inp.dataset.harga = this.getElementsByTagName("input")[0].dataset.harga;
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

var isNumber = function isNumber(evt, data) {
  var error_notif = main_input.querySelector('.error_number');
  error_notif.classList.add('d-none');
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