const getData = () => {
  let data = {
    judul: "Dompet Digital",
    keterangan: "",
    template: "2",
    isPromo: true,
    isFavorit: true,
    isTerjadwal: true,
    settingPin: {
      title: "Pin Transaksi",
      hint: "Contoh: 123456",
      tipe: "number",
    },
    config: {
      proses_string: "proses",
      is_searching: false,
      is_favorit: true,
      is_terjadwal: true,
      is_voucher: true,
    },
    checkout: {
      checkout_saldoawal_string: "Saldo Awal",
      checkout_tujuan_string: "Tujuan",
      checkout_produk_string: "Produk",
      checkout_harga_string: "Harga",
      checkout_xp_string: "Mendapat [exp] EXP",
      checkout_saldoakhir_string: "Saldo Akhir",
    },
    data: [
      {
        kode_operator: "DANAP",
        operator: "DANA",
        icon: "https://mura.co.id/app/img/dana.png",
        keterangan: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        format: "[kode_operator].[tujuan].[kode].[pin]",
        admin: 500,
        isNominalBebas: true,
        settingTujuan: {
          title: "Nomor HP",
          hint: "Contoh: 081234567890",
          isKontak: true,
          isScan: true,
          isHlr: false,
          tipe: "phone",
        },
        settingNominal: {
          title: "Masukkan Nominal",
          hint: "Contoh 10.000",
          isEdit: true,
          tipe: "number",
        },
        cek: {
          isCek: true,
          tipeCek: "1",
        },
        detailGrid: 2,
        detail: [
          {
            tag: "Dana Regular",
            kode: "10000",
            produk: "10.000",
            exp: "+50 exp",
            harga: "10500",
          },
          {
            tag: "Dana Regular",
            kode: "15000",
            produk: "15.000",
            exp: "+50 exp",
            harga: "15500",
          },
          {
            tag: "Dana Regular",
            kode: "20000",
            produk: "20.000",
            exp: "+50 exp",
            harga: "20500",
          },
          {
            tag: "Dana Regular",
            kode: "30000",
            produk: "30.000",
            exp: "+50 exp",
            harga: "30500",
          },
          {
            tag: "Dana Regular",
            kode: "25000",
            produk: "25.000",
            exp: "+100 exp",
            harga: "25500",
          },
          {
            tag: "Dana Regular",
            kode: "50000",
            produk: "50.000",
            exp: "+120 exp",
            harga: "50500",
          },
          {
            tag: "Dana Regular",
            kode: "100000",
            produk: "100.000",
            exp: "+120 exp",
            harga: "100500",
          },
        ],
      },
      {
        kode_operator: "SHOP",
        operator: "Shopee",
        icon: "https://mura.co.id/app/img/shopee.png",
        keterangan: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        format: "[kode].[tujuan].[pin]",
        isNominalBebas: false,
        settingTujuan: {
          title: "Nomor HP",
          hint: "Contoh: 122021102174",
          isKontak: true,
          isScan: true,
          isHlr: false,
          tipe: "number",
        },
        cek: {
          isCek: false,
          tipeCek: "1",
        },
        detailGrid: 2,
        detail: [
          {
            tag: "Shopee Regular",
            kode: "SHOP5",
            produk: "5.000",
            exp: "+50 exp",
            harga: "5500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP10",
            produk: "10.000",
            exp: "+50 exp",
            harga: "10500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP15",
            produk: "15.000",
            exp: "+50 exp",
            harga: "15500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP20",
            produk: "20.000",
            exp: "+50 exp",
            harga: "20500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP30",
            produk: "30.000",
            exp: "+50 exp",
            harga: "30500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP25",
            produk: "25.000",
            exp: "+100 exp",
            harga: "25500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP50",
            produk: "50.000",
            exp: "+120 exp",
            harga: "50500",
          },
          {
            tag: "Shopee Promo",
            kode: "SHOP100",
            produk: "100.000",
            exp: "+120 exp",
            harga: "100500",
          },
        ],
      },
    ],
  };
  return data;
};

// First Layout
const menu = document.querySelector("#menu");

// Parent Component
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const mainContent = document.querySelector("#mainContent");
const layoutPromo = document.querySelector("#layout-promo");
const layoutBottom = document.querySelector("#layout-bottom");
const layoutNominal = document.querySelector("#layout-nominal");
const layoutCheckout = document.querySelector("#outer-checkout");
const layoutIcon = document.querySelector("#layout-icon");

// Component
const labelPin = document.querySelector("#label-pin");
const labelTotal = document.querySelector("#total-bottom");
const offcanvasRincianPembelian = new bootstrap.Offcanvas(document.querySelector("#offcanvas-rincian-pembelian"));

// Component Checkout
const saldoAwal = document.querySelector("#saldo-awal");
const saldoAkhir = document.querySelector("#saldo-akhir");
const kodeVoucher = document.querySelector("#kode-voucher");
const totalBayar = document.querySelector("#total-bayar");
const totalPembelian = document.querySelector("#total-pembelian");

// Input Component
const mainInput = document.querySelector("#main-input");
const inputPin = document.querySelector("#input-pin");
const inputVoucher = document.querySelector("#input-voucher");
const switchPin = document.querySelector("#switchMaterial");

// Button Component
const btnCheckout = document.querySelector("#btn-checkout");

// Global Variable to Get Data
const data = getData();

// Global Variable to Store Format Transaction
let jenisProduk = data.judul;
let formatTrx;
let kodeOperator;
let namaProduk;

// Global Variable to Store Data
let storedData = {
  kode: "",
  tujuan: "",
  nominal: "",
  pin: "",
  voucher: "",
  type: "",
  format: "",
  price: "",
  exp: "",
};

/**
 * @description HELPER FUNCTION
 */

const formatRupiah = (angka, prefix) => {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
};

const backToNumber = (number) => {
  const removeRupiah = number.replace(/[^0-9]/g, "");
  const final = parseInt(removeRupiah);
  return final;
};

/**
 * @description EVENT LISTENER
 */

const onClickMenu = (element) => {
  kodeOperator = element.dataset.kode;
  const { isFavorit, isPromo, isTerjadwal, data: allData } = data;
  const selectedData = allData.filter((item) => item.kode_operator === kodeOperator);
  // console.log(selectedData);

  // Set Second Layout
  menu.classList.add("d-none");
  header.classList.remove("d-none");
  mainContent.classList.remove("d-none");
  footer.classList.remove("d-none");

  setupMainInput(selectedData[0]); // Setup Main Input
  setupFooter({ isFavorit, isPromo, isTerjadwal }); // Setup Footer
  setupProduk(selectedData[0]); // Setup Product
};

const onChangeNomor = () => {
  const labelError = document.querySelector("body").querySelector(".hlr-notfound");
  const inputNomor = document.querySelector("body").querySelector("#input-nomor");

  if (inputNomor.value.length === 0) {
    labelError.classList.remove("d-none");
    labelError.innerHTML = "Tujuan wajib diisi";
  } else {
    labelError.classList.add("d-none");
  }
  storedData.tujuan = inputNomor.value;
};

const onChangeNominal = () => {
  const inputNominal = document.querySelector("body").querySelector("#input-nominal");
  const labelExp = document.querySelector("body").querySelector("#label-exp");

  const cardActive = document.querySelector(".background-yellow-light");
  const nominal = inputNominal.value;
  const nominalFormatted = formatRupiah(nominal);
  const finalPrice = backToNumber(nominal) + 500;

  if (cardActive) {
    cardActive.classList.remove("background-yellow-light", "border-orange");
    cardActive.classList.add("bg-white");
    cardActive.children[0].children[0].children[0].classList.contains("background-orange") &&
      (cardActive.children[0].children[0].children[0].classList.remove("background-orange"), cardActive.children[0].children[0].children[0].classList.add("background-gray"));
  }

  nominal.length === 0 ? (labelExp.innerHTML = "") : (labelExp.innerHTML = "50 EXP");
  inputNominal.value = nominalFormatted;
  labelTotal.innerHTML = formatRupiah(finalPrice.toString(), "Rp ");
  totalBayar.innerHTML = formatRupiah(finalPrice.toString(), "Rp ");

  storedData.exp = "+50 exp";
  storedData.price = finalPrice.toString();
  storedData.nominal = nominalFormatted;
  storedData.kode = backToNumber(nominalFormatted);
};

const onClickProduk = (element) => {
  const inputNominal = document.querySelector("body").querySelector("#input-nominal");
  const labelExp = document.querySelector("body").querySelector("#label-exp");
  const labelError = document.querySelector("body").querySelector(".hlr-notfound");

  const price = element.querySelector(".price").dataset.harga;
  const produk = element.querySelector(".produk").dataset.produk;
  const exp = element.querySelector(".exp").dataset.exp;
  const kode = element.querySelector(".kode_produk").dataset.kode;
  const boxHarga = element.querySelector(".box-harga");
  const tagging = element.querySelector(".tagging");

  !labelError.classList.contains("d-none") && labelError.classList.add("d-none");

  // Set Active Card
  boxHarga.classList.remove("bg-white");
  boxHarga.classList.add("background-yellow-light", "border-orange");
  tagging.classList.contains("background-gray") && (tagging.classList.remove("background-gray"), tagging.classList.add("background-orange"));

  // when other card is selected remove class
  const otherBox = document.querySelectorAll(".box-harga");
  otherBox.forEach((item) => {
    if (item !== boxHarga) {
      item.classList.remove("background-yellow-light", "border-orange");
      item.classList.add("bg-white");
      item.children[0].children[0].children[0].classList.contains("background-orange") &&
        (item.children[0].children[0].children[0].classList.remove("background-orange"), item.children[0].children[0].children[0].classList.add("background-gray"));
    }
  });

  // Manipulate Component
  inputNominal.value = produk;
  labelExp.innerHTML = exp.slice(1, exp.length).toUpperCase();
  labelTotal.innerHTML = formatRupiah(price, "Rp ");
  totalBayar.innerHTML = formatRupiah(price, "Rp ");

  // Store to Global Variable
  storedData.exp = exp;
  storedData.price = price;
  storedData.nominal = produk;
  storedData.kode = kode;
};

const onClickBayar = (element) => {
  const labelError = document.querySelector("body").querySelector(".hlr-notfound");
  const isCek = Boolean(element.dataset.cek);
  const { settingPin } = data;
  const { title, hint } = settingPin;
  console.log(isCek);
  // Validation
  if (storedData.tujuan.length === 0) {
    labelError.classList.remove("d-none");
    labelError.innerHTML = "Tujuan Wajib Diisi";
    return;
  }

  if (storedData.nominal.length === 0) {
    labelError.classList.remove("d-none");
    labelError.innerHTML = "Pilih Produk Terlebih Dahulu";
    return;
  }

  // if (isCek) {
  // onSubmit();
  // } else {
  // Manipulate Component
  labelPin.innerHTML = title;
  inputPin.placeholder = hint;
  // Show Rincian Pembayaran
  labelError.classList.add("d-none");
  offcanvasRincianPembelian.show();
  totalPembelian.innerHTML = `- ${formatRupiah(storedData.price, "- Rp ")}`;
  const templateDetail = `
      <div class="row check-out mb-1">
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">Jenis Produk</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${jenisProduk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">Nama Produk</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${namaProduk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">Nomor Tujuan</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${storedData.tujuan}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">Nominal Topup</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${storedData.nominal}</p>
        </div>
        <div class="col-12 mt-1">
          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${storedData.exp}</span>akan kamu dapatkan setelah transaksi sukses</p>
        </div>
      </div>
    `;
  layoutCheckout.innerHTML = templateDetail;
  // }
};

const onClickFavorite = () => {
  // Call Android
  console.log("Favorite");
};

const onClickTerjadwal = () => {
  // Call Android
  console.log("Terjadwal");
};

const onChangeSwitch = (element) => {
  const checked = element.checked;
  // Call Android
  checked ? (inputPin.value = "123456") : (inputPin.value = "");
};

const onClickPin = () => {
  // Call Android
  console.log("Insert Pin");
};

const onClickCheck = () => {
  const labelError = document.querySelector("body").querySelector(".hlr-notfound");
  // Validation
  if (storedData.tujuan.length === 0) {
    labelError.classList.remove("d-none");
    labelError.innerHTML = "Tujuan wajib diisi";
    return;
  }

  if (totalBayar.innerHTML.length === 0) {
    labelError.classList.remove("d-none");
    labelError.innerHTML = "Pilih Produk Terlebih Dahulu";
    return;
  } else {
    storedData.type = "cek";
    storedData.pin = "";
    storedData.format = formatTrx === "[kode_operator].[tujuan].[kode].[pin]" ? `${kodeOperator}.${storedData.tujuan}.${storedData.kode}` : `${storedData.tujuan}.${storedData.kode}`;
    console.log(storedData);
  }
};

const onChangePromo = () => {};

const onSubmit = () => {
  storedData.type = "transaksi";
  storedData.pin = inputPin.value;
  storedData.format = formatTrx === "[kode_operator].[tujuan].[kode].[pin]" ? `${kodeOperator}.${storedData.tujuan}.${storedData.kode}.${inputPin.value}` : `${storedData.kode}.${storedData.tujuan}.${inputPin.value}`;
  console.log(storedData);
  // Call Android
};

/**
 * @description SETUP LAYOUT
 */

const setupFirstLayout = (data) => {
  const response = data.data;

  response.map((item) => {
    const image = item.operator === "DANA" ? "./assets/images/logo/dana.jpg" : "./assets/images/logo/shopee.jpeg";
    const card = `
          <div class="col-4 px-1 h-25" data-kode=${item.kode_operator} onclick="onClickMenu(this)">
            <img src=${image} class="img-fluid border-radius-10 p-0 border-none h-auto" alt="...">
            <p class="font-medium text-secondary text-center">${item.operator}</p>
          </div>
    `;
    menu.innerHTML += card;
  });
};

const setupMainInput = (data) => {
  let titleNominal, hintNominal;
  const { isNominalBebas, keterangan, settingTujuan, settingNominal } = data;
  const { title, hint, isKontak, isScan } = settingTujuan;
  if (settingNominal) {
    const { title, hint } = settingNominal;
    titleNominal = title;
    hintNominal = hint;
  }
  const input = `
    <div class="row px-2 py-2">
      <div class="col-12">
        <p class="text-secondary font-normal" id="head-title">${keterangan}</p>
      </div>
      <div class="col-12 mt-2 dynamic-form" id="dynamic-form">
        <div class="col-12 mt-2 dynamic-form">
          <div class="multi">
            <div class="row">
              <div class="col-6">
                <p id="label-nomor" class="text-secondary font-large">${title}</p>
              </div>
              <div class="col-6 text-end">
                <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
              </div>
              <div class="col-12 mb-1">
                <div class="input-group mb-1">
                  <input
                    id="input-nomor"
                    type="text"
                    class="form-control ${isScan && "border-end-0"} shadow-none border-radius-left-8 font-large-1 text-secondary nomor ${!isScan && "border-radius-right-8"}"
                    placeholder="${hint}"
                    aria-label="Nomor User"
                    inputmode="numeric"
                    aria-describedby="inptNomor"
                    autocomplete="off"
                    onkeyup="onChangeNomor(this)"
                  />
                  <span id="labelContact" class="input-group-text bg-transparent border-start-0 py-1 px-2 ${!isKontak && "d-none"}">
                    <img src="./assets/images/icon/Layer_x-15.png" width="20" height="20" alt="contact" />
                  </span>
                  <span class="input-group-text border-radius-right-8 ${!isScan && "d-none"}" id="labelScan">
                    <img src="https://pic.onlinewebfonts.com/svg/img_305132.png" width="20" height="20" alt="scan" />
                  </span>
                </div>
                <p class="font-normal hlr-notfound text-red mb-2 d-none">HLR tidak di temukan</p>
              </div>
              <div class="col-12">
                <p id="label-nominal" class="text-secondary font-large ${!isNominalBebas && "d-none"}">${titleNominal}</p>
              </div>
              <div class="col-12">
                <div class="input-group">
                  <input
                    id="input-nominal"
                    type="text"
                    inputmode="numeric"
                    class="form-control border-end-0 bg-white shadow-none border-radius-left-8 font-large-1 text-secondary nominal ${!isNominalBebas && "d-none"}"
                    aria-label="Nominal"
                    aria-describedby="inptNominal"
                    autocomplete="off"
                    placeholder="${hintNominal}"
                    oninput="onChangeNominal(this)"
                    value=""
                  />
                  <span id="label-exp" class="input-group-text bg-transparent border-start-0 py-1 px-2 border-radius-right-8 text-orange font-large ${!isNominalBebas && "d-none"}"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  mainInput.innerHTML = input;
};

const setupFooter = (data) => {
  const { isFavorit, isPromo, isTerjadwal } = data;
  const svgFavorite = `
    <svg class="${!isFavorit && "d-none"}" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onclick="onClickFavorite()">
      <path fill="#F37021" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926 7.814 12.74a2.745 2.745 0 0 1 0-3.907 2.745 2.745 0 0 1 3.906 0l.28.279.279-.279a2.745 2.745 0 0 1 3.906 0 2.745 2.745 0 0 1 .001 3.907z" />
    </svg>
  `;
  const svgTerjadwal = `
    <svg class="${!isTerjadwal && "d-none"}" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onclick="onClickTerjadwal()">
      <path fill="#F37021" d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z" />
    </svg>
  `;
  layoutIcon.innerHTML = svgFavorite + svgTerjadwal;

  if (!isFavorit && !isTerjadwal) {
    layoutIcon.classList.add("d-none");
    layoutPromo.classList.remove("col-9");
    layoutPromo.classList.add("col-12");
  }
  isPromo === false && layoutPromo.classList.add("d-none");
};

const setupProduk = (data) => {
  // console.log(data);
  const { cek, detail, detailGrid, operator, format } = data;
  const { isCek } = cek;
  console.log(isCek);
  // assign global variable
  namaProduk = operator;
  formatTrx = format;

  if (isCek) {
    btnCheckout.innerHTML = "Bayar";
    btnCheckout.setAttribute("data-cek", isCek);
    layoutBottom.querySelectorAll("p").forEach((item) => {
      item.classList.add("d-none");
    });
    layoutBottom.querySelector("#cek").classList.remove("d-none");
  } else {
    btnCheckout.innerHTML = "Lanjut";
    btnCheckout.setAttribute("data-cek", "");
    layoutBottom.querySelector("#cek").classList.add("d-none");
    layoutBottom.querySelectorAll("p").forEach((item) => {
      item.classList.remove("d-none");
    });
  }

  // Setup Porduk
  renderProduk({ detail, detailGrid });
};

const renderProduk = (data) => {
  const { detail, detailGrid } = data;
  let columnWidth = 12 / detailGrid;
  detail.map((item) => {
    const { tag, kode, produk, exp, harga } = item;
    const colorTag = tag.includes("Promo") ? "green" : "gray";
    const finalTag = tag.includes("Promo") ? "Promo" : "Regular";
    const finalExp = exp.replace("+", "").toUpperCase();
    let card = `
      <div class="col-${columnWidth} mb-3" onclick="onClickProduk(this)">
        <div class="h-100 border border-white bg-white border-radius-8 mx-0 box-harga"> 
            <div class="row gx-0">
              <div class="col-12">
                    <span class="background-${colorTag} tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${finalTag}</span>
                </div>
                <div class="col-12 py-2">
                    <p class="font-large-1 fw-bold text-dark ms-2 produk" data-produk="${produk}">${produk}</p>
                </div>
                <div class="col-7 pb-2 pt-0 pe-0">
                    <p class="font-large text-dark ms-2 price" data-harga="${harga}">${formatRupiah(harga, "Rp. ")}</p>
                </div>
                <div class="col-5 ps-0 pe-2 pb-2 pt-0 text-end">
                    <p class="text-orange font-large exp" data-exp="${exp}">${finalExp}</p>
                    <p class="text-orange font-large kode_produk d-none" data-kode="${kode}">${kode}</p>
                </div>
            </div>
        </div>
      </div>
    `;
    layoutNominal.innerHTML += card;
  });
};

const scroll_produk = (scrolling) => {
  if (scrolling.scrollTop === 0) {
    mainInput.classList.add("min-margin-top-min");
    mainInput.classList.remove("min-margin-top-min-2");
  } else {
    mainInput.classList.add("min-margin-top-min-2");
    mainInput.classList.remove("min-margin-top-min");
  }
};

// Execute
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  setupFirstLayout(data);
});
