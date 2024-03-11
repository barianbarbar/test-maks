var objMenu = "";
var objLog = "";
var temp_admin_default = "0",
  temp_harga_bulat = "0";
var checkbox1, selectmenu, selectproduk, selectnominal, inputKeuntungan, inputhargajual, layouthargajual, layoutnominalproduk;
var temp_admin = 0;
var final_kode_produk = 0;
let jsonMenu = [];
let totalAdmin = 0;

// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4 && rawFile.status == "200") {
//       callback(rawFile.responseText);
//     }
//   };
//   rawFile.send(null);
// }

// usage:
// readTextFile("./assets/json/data.json", function (jsonMenu) {
//   setValue(jsonMenu);
// });

function init() {
  window.location.replace("https://murapay.id/app/webview/maintenance.html");
  return;
  selectproduk = document.getElementById("selectproduk");
  selectnominal = document.getElementById("selectnominal");
  selectmenu = document.getElementById("selectmenu");
  checkbox1 = document.getElementById("checkbox-1");
  inputKeuntungan = document.getElementById("keuntungan");
  inputhargajual = document.getElementById("harga_jual");
  inputHargaProduk = document.getElementById("hargaProduk");
  inputAdmin = document.getElementById("admin");
  inputTotal = document.getElementById("total");
  layoutProduk = document.getElementById("layout_produk");
  layoutnominalproduk = document.getElementById("layoutnominalproduk");
  layouthargajual = document.getElementById("layout_harga_jual");
  layoutHargaProduk = document.getElementById("layout_harga_produk");
  layoutKeuntungan = document.getElementById("layout_keuntungan");
  layoutAdmin = document.getElementById("layout_admin");
  layoutTotal = document.getElementById("layout_total");
  layoutHargaDefault = document.getElementById("layout_harga_default");
  btnSimpan = document.getElementById("btnSimpan");
  invalidFeedback = document.querySelector(".invalid-feedback");
  document.getElementById("layout_harga_default").style.display = 'none';
  try {
    Android.getData()
  } catch (error) {

  }

}
// if (typeof String.prototype.replaceAll == "undefined") {
//         String.prototype.replaceAll = function(match, replace) {
//         return this.replace(new RegExp(match, 'g'), () => replace);
//         }
// }
init();

// setValue(jsonMenu);
var menudipilih, produkdipilih;
function setValue(jsonMenu) {
  // alert("setvalue");
  try {
       Android.log(jsonMenu)
   } catch (error) {

   }
  objMenu = JSON.parse(jsonMenu);
  var menu = selectmenu;
  for (let i = 0; i < objMenu.length; i++) {
    menu.options[menu.options.length] = new Option(objMenu[i].kategori, i);
  }
  // console.log(menu.options);
}

// console.log(objMenu);

function setAktifitas(jsonLog) {
   try {
       Android.log(jsonLog)
   } catch (error) {

  }
  objLog = JSON.parse(jsonLog);
  var ul = document.createElement("ul");
  ul.setAttribute("id", "proList");
  ul.setAttribute("class", "listview inset");
  document.getElementById("logList").appendChild(ul);

  for (let i = 0; i < objLog.length; i++) {
    var keterangan = objLog[i].keterangan;
    var tanggal = objLog[i].tanggal;
    var div = document.createElement("div");
    div.setAttribute("class", "in");

    var span = document.createElement("span");
    span.setAttribute("class", "text-muted");
    var title = document.createTextNode(tanggal);
    var subtitle = document.createTextNode(keterangan);
    var div2 = document.createElement("div");
    div2.appendChild(title);
    div.appendChild(div2);
    span.appendChild(subtitle);
    div.appendChild(span);

    var li = document.createElement("li");
    li.appendChild(div);
    ul.appendChild(li);
  }
}
/* ketika menu select akan menampilkan produk yang sesuai*/
function selectMenu() {
  menudipilih = selectmenu.value;
  if (menudipilih === "-1") {
    selectproduk.innerHTML = "";
    selectnominal.innerHTML = "";
    //inputKeuntungan.disabled = true;
    inputKeuntungan.value = "";
    checkbox1.checked = false;
    temp_admin = "";
    !layoutHargaProduk.classList.contains("d-none") && layoutHargaProduk.classList.add("d-none");
    !layouthargajual.classList.contains("d-none") && layouthargajual.classList.add("d-none");
    !layoutnominalproduk.classList.contains("d-none") && layoutnominalproduk.classList.add("d-none");
    !layoutAdmin.classList.contains("d-none") && layoutAdmin.classList.add("d-none");
    !layoutTotal.classList.contains("d-none") && layoutTotal.classList.add("d-none");
    !btnSimpan.classList.contains("disabled") && btnSimpan.classList.add("disabled");
    !layoutHargaDefault.classList.contains("d-none") && layoutHargaDefault.classList.add("d-none");
    !layoutKeuntungan.classList.contains("d-none") && layoutKeuntungan.classList.add("d-none");
    !layoutProduk.classList.contains("d-none") && layoutProduk.classList.add("d-none");
    if (inputKeuntungan.classList.contains("is-invalid")) {
      inputKeuntungan.classList.remove("is-invalid");
      invalidFeedback.innerHTML = "";
    }
    return;
  }
  selectproduk.innerHTML = "";
  btnSimpan.classList.remove("disabled");
  var nama_operator = ["x"];
  for (let i = 0; i < objMenu[menudipilih].produk.length; i++) {
    var opr = objMenu[menudipilih].produk[i].nama_operator.replace(" REG ", "").replace("NASIONAL", "");
    var nama_produk = objMenu[menudipilih].produk[i].nama;
    var kode_produk = objMenu[menudipilih].produk[i].kode;
    if (opr == "ISAT") {
      opr = "INDOSAT";
    } else if (opr == "TSEL") {
      opr = "TELKOMSEL";
    }
    nominal = i;
    var catatan = objMenu[menudipilih].produk[i].catatan;
    Android.log(catatan)
    if (kode_produk.startsWith('BYR')) {
      selectproduk.options[selectproduk.options.length] = new Option(nama_produk, i);
    } else {
      if (nama_operator.includes(opr)) {
      } else {
        nama_operator.push(opr);
        selectproduk.options[selectproduk.options.length] = new Option(opr, i);
      }
    }
  }
  selectProduk();
}

function selectProduk() {
  inputKeuntungan.disabled = false;
  checkbox1.checked = false;
  temp_admin = "";
  inputKeuntungan.value = "";
  selectnominal.innerHTML = "";
  produkdipilih = selectproduk.value;
  var admin = objMenu[menudipilih].produk[produkdipilih].admin;
  var kode = objMenu[menudipilih].produk[produkdipilih].kode;
  let admin_default = objMenu[menudipilih].produk[produkdipilih].admin_default;
  var catatan = objMenu[menudipilih].produk[produkdipilih].catatan;
  var kode = objMenu[menudipilih].produk[produkdipilih].kode;
  // console.log(objMenu[menudipilih].produk[produkdipilih]);
  if (kode.startsWith("BYR") || kode.startsWith("byr") || kode.startsWith("CEK") || kode.startsWith("cek")) {
    final_kode_produk = kode;
    layouthargajual.classList.add("d-none");
    layoutnominalproduk.classList.add("d-none");
    layoutHargaProduk.classList.add("d-none");
    layoutProduk.classList.remove("d-none");
    layoutKeuntungan.classList.remove("d-none");
    layoutAdmin.classList.remove("d-none");
    layoutTotal.classList.remove("d-none");
    temp_admin = admin;
    temp_admin_default = admin_default;
    checkbox1.disabled = true;
    inputAdmin.value = numberFormat(admin_default);
    inputKeuntungan.value = numberFormat(admin);
    totalAdmin = +admin_default + +admin;
    let total = numberFormat(totalAdmin.toString());
    if (total.substring(total.length, total.length - 3) > "500") {
      let front = total.substring(0, total.length - 4);
      front = +front + 1;
      total = front + "000";
    } else {
      total = total.substring(0, total.length - 3) + "000";
    }
    // console.log(total);
    inputTotal.value = numberFormat(total);
    if (inputKeuntungan.classList.contains("is-invalid")) {
      inputKeuntungan.classList.remove("is-invalid");
      invalidFeedback.innerHTML = "";
    }
  } else {
    // console.log(objMenu[menudipilih].produk[produkdipilih]);
    layoutAdmin.classList.add("d-none");
    layoutTotal.classList.add("d-none");
    layoutProduk.classList.remove("d-none");
    layoutKeuntungan.classList.remove("d-none");
    layoutHargaDefault.classList.remove("d-none");
    layoutHargaProduk.classList.remove("d-none");
    layoutnominalproduk.classList.remove("d-none");
    layouthargajual.classList.remove("d-none");
    checkbox1.disabled = false;
    layoutHargaProduk.firstElementChild.firstElementChild.innerHTML = "Harga Produk (Rp)";
    //inputKeuntungan.disabled = true;
    shownominal();
  }
}

function shownominal() {
  var nama_produk = selectproduk.options[selectproduk.selectedIndex].text;
  for (let i = 0; i < objMenu[menudipilih].produk.length; i++) {
    var opr = objMenu[menudipilih].produk[i].nama_operator.replace(" REG ", "").replace("NASIONAL", "");
    var kode = objMenu[menudipilih].produk[i].kode;
    var nama = objMenu[menudipilih].produk[i].nama;
    var catatan = objMenu[menudipilih].produk[i].catatan;
    if (opr == "ISAT") {
      opr = "INDOSAT";
    } else if (opr == "TSEL") {
      opr = "TELKOMSEL";
    }

    if (kode.startsWith('BYR')) {
      selectnominal.options[selectnominal.options.length] = new Option(nama, kode);
    } else {
      if (nama_produk.replace(" ", "") == opr.replace(" ", "")) {
        selectnominal.options[selectnominal.options.length] = new Option(nama, kode);
      }
    }
  }
  selectNominalProduk();
}

function selectNominalProduk() {
  var kode_produk = selectnominal.options[selectnominal.selectedIndex].value;
  inputKeuntungan.value = 0;
  inputhargajual.value = 0;
  for (let i = 0; i < objMenu[menudipilih].produk.length; i++) {
    var kode = objMenu[menudipilih].produk[i].kode;
    if (kode_produk.replace(" ", "") == kode.replace(" ", "")) {
      var admin_default = objMenu[menudipilih].produk[i].admin_default;
      var harga_bulat = objMenu[menudipilih].produk[i].harga_bulat;
      var admin = objMenu[menudipilih].produk[i].admin;
      admin_default = admin;
      const hargaProduk = objMenu[menudipilih].produk[i].harga_jual;
      if (admin == 0) {
        checkbox1.checked = true;
      } else {
        checkbox1.checked = false;
      }
      temp_harga_bulat = harga_bulat;
      temp_admin_default = numberFormat(admin_default);
      inputKeuntungan.value = numberFormat(admin_default);
      inputHargaProduk.value = numberFormat(hargaProduk);
      onTexthangeAdmin();
      final_kode_produk = kode_produk;
      break;
    }
  }
}

function numberFormat(value) {
  var rupiahReplace = value.replaceAll(".", "");
  var rupiahValue = new Intl.NumberFormat("id-ID").format(rupiahReplace);
  return rupiahValue;
}

function backToNumber(value) {
  var formatRupiah = value.replaceAll(".", "");
  var finalValue = parseInt(formatRupiah);
  return finalValue;
}

function rupiahFormat(value, idclass) {
  var rupiahInput = document.getElementById(idclass);
  var rupiahReplace = rupiahInput.value.replaceAll(".", "");
  var rupiahValue = new Intl.NumberFormat("id-ID").format(rupiahReplace);

  // if (rupiahValue == NaN) {
  //   rupiahInput.value = 0;
  // } else {
  rupiahInput.value = rupiah(rupiahReplace);
  // }
  return;
}

function rupiah(angka) {
  let bilangan = parseInt(angka.replaceAll(".", ""));
  // console.log(test);
  var number_string = bilangan.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substring(0, sisa),
    ribuan = number_string.substring(sisa).match(/\d{3}/g);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  // console.log(typeof rupiah);
  inputKeuntungan.value = rupiah;
}

function clikCheckbox() {
  // console.log(checkbox1.checked);
  if (checkbox1.checked) {
    //inputKeuntungan.disabled = true;
    if (temp_admin_default == null) {
    } else {
      inputKeuntungan.value = numberFormat(temp_admin_default);
      onTexthangeAdmin();
    }
  } else {
    inputKeuntungan.value = numberFormat(temp_admin);
    onTexthangeAdmin();
    inputKeuntungan.disabled = false;
  }
}

function onTexthangeAdmin() {
  var total = parseInt(inputKeuntungan.value.replace(".", "")) + parseInt(temp_harga_bulat.replace(".", ""));
  inputhargajual.value = numberFormat(total.toString());
  totalAdmin = parseInt(inputKeuntungan.value.replace(".", "")) + parseInt(inputAdmin.value.replace(".", ""));
  inputTotal.value = numberFormat(totalAdmin.toString());
  if (backToNumber(inputKeuntungan.value) > 10000) {
    inputKeuntungan.classList.add("is-invalid");
    invalidFeedback.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg><strong> Keuntungan tidak boleh lebih dari 10.000</strong>`;
    btnSimpan.disabled = true;
  } else {
    inputKeuntungan.classList.remove("is-invalid");
    invalidFeedback.innerHTML = "";
    btnSimpan.disabled = false;
  }
  if (inputTotal.value.substring(inputTotal.value.length, inputTotal.value.length - 3) > 500) {
    let front = inputTotal.value.substring(0, inputTotal.value.length - 4);
    front = +front + 1;
    inputTotal.value = front + "." + "000";
  } else {
    inputTotal.value = inputTotal.value.substring(0, inputTotal.value.length - 3) + "000";
  }
  if (isNaN(inputTotal.value)) {
    inputTotal.value = 0;
  }
  if (isNaN(inputhargajual.value)) {
    inputhargajual.value = 0;
  }
}

inputKeuntungan.addEventListener("keyup", function () {
  // rupiahFormat(inputKeuntungan.value, "keuntungan");
  rupiah(inputKeuntungan.value);
  onTexthangeAdmin();
  // prevent user to enter alphabet
  // if (isNaN(inputKeuntungan.value)) {
  //   inputKeuntungan.value = 0;
  // }
});

function myfunc() {
  var perintah = "update_harga_jual";
  var catatan = objMenu[menudipilih].produk[produkdipilih].catatan;
  btnSimpan.disabled = false;
  btnSimpan.innerHTML = "SIMPAN";
  const saveData = {
    kode_produk: final_kode_produk,
    admin: inputKeuntungan.value,
    perintah: perintah,
    aksi: "post",
  };
  const json = JSON.stringify(saveData);
  
  try {
    Android.actionHandleData(json);
  } catch (error) {
    
  }
}

btnSimpan.addEventListener("click", function () {
  btnSimpan.disabled = true;
  btnSimpan.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="ms-6">Loading...</span>
  `;
  setTimeout(() => {
    myfunc();
  }, 500);
});
