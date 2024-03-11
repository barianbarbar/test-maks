function createTitle() {
  var html = '<h4 class="mx-1" id="titletopup">Scan Barcode</h4>';
  document.querySelector(".tittle").insertAdjacentHTML("beforebegin", html);
}
function LoopListBarcode(text) {
  var json = JSON.parse(text);
  var keterangan = json.keterangan;
  var jsondata = json.data;
  setKeterangan(keterangan);
  var i = 0;
  for (var i = 0; i < jsondata.length; i++) {
    var obj = jsondata[i];
    var menu = obj.menu;
    var icon = obj.icon;
    var scheme = obj.scheme;
    var html =
      '\n    <div class="container">\n      <div\n        class="border rounded-3 my-2 p-2 onclickprimary"\n        onclick="onclicklist(\''
        .concat(scheme, '\')"\n      >\n        <b class="mx-1">')
        .concat(
          menu,
          '</b>\n        <div class="row d-flex p-1">\n          <div class="col-2 align-self-center">\n            <div class="col-12">\n              <img src="'
        )
        .concat(
          icon,
          '"  width="40px" height="30px" loading="lazy" alt="image" />\n            </div>\n          </div>\n          <div class="col-8">\n            <div class="row">\n              <div class="col-12">\n                <p class="m-0">'
        )
        .concat(
          obj.sub_title,
          '</p>\n              </div>\n              <div class="col-12">\n                <p class="m-0">'
        )
        .concat(
          obj.tujuan,
          '</p>\n              </div>\n            </div>\n          </div>\n          <div class="col-2 align-self-center">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-arrow-right-circle-fill text-warning"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"\n              />\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n    '
        );
    document.querySelector(".listbarcode").innerHTML += html;
  }
}
function setKeterangan(keterangan) {
  var htmlketerangan =
    '\n  <div class="border rounded-2 m-2 p-2 d-flex justify-content-center shadow">\n    <p class="m-0">'.concat(
      keterangan,
      "</p>\n  </div>"
    );
  document.querySelector(".keterangan").innerHTML += htmlketerangan;
}
function onclicklist(sc) {
  Android.onlclick(sc);
}
