'use strict';
function setViewCard(a) {
  var n = JSON.parse(a),
    t = n.detailTransakasi,
    e = t.namaProduk,
    o = t.nomorTujuan,
    c = n.status,
    r = t.hargaBeli,
    i = (r = myfun.formattoRupiah(r)),
    u = n.tanggal;
  (document.querySelector('.card-produk').innerHTML = e),
    (document.querySelector('.card-tujuan').innerHTML = o),
    (document.querySelector('.card-harga').innerHTML = i),
    (document.querySelector('.card-tgl').innerHTML = u),
    (document.querySelector('.card-status').innerHTML = c);
  var s = document.getElementById('card-status');
  'Sukses' == c
    ? ((s.style.backgroundColor = 'lightgreen'), (s.style.color = 'green'))
    : 'Gagal' == c &&
      ((s.style.backgroundColor = 'red'), (s.style.color = 'white'));
}
function setListSubTopik(a) {
  var n = JSON.parse(a),
    t = n.detailTransakasi,
    e = n.detailTransakasi.subtopik,
    o = n.detailTransakasi.topik,
    c = n.detailTransakasi.komplain_text;
  document.querySelector('.komplain_text').innerHTML = c;
  for (var r = '', i = 0; i < e.length; i++)
    r += '\n        <div onclick="onclickList(\''
      .concat(t.kodeProduk, "','")
      .concat(n.tanggal, "','")
      .concat(t.nomorTujuan, "','")
      .concat(e[i].pertanyaan, "','")
      .concat(o, '\')">\n        <p class="m-0" > ')
      .concat(
        e[i].pertanyaan,
        '</p>\n        <hr class="divider" />\n        </div>\n    '
      );
  (document.querySelector('.list-subtopik').innerHTML += r),
    myfun.setTitlePage('Topik Komplain');
}
function clickSemuaTopik() {
  myfun.clickSemuaTopik();
}
function onclickList(a, n, t, e, o) {
  myfun.onclickListSubTopik(a, n, t, e, o, 'TRANSAKSI');
}
var bsOffcanvas = new bootstrap.Offcanvas('#staticBackdrop');
function lanjutlivechat() {
  myfun.lanjutchat();
}
function onclicktutup() {
  myfun.finishpage();
}
function shownotifsessi() {
  bsOffcanvas.show();
}
