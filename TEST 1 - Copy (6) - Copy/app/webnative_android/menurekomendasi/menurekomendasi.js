"use strict";
function LoopListTopup(n, i, t) {
  for (var o = JSON.parse(i), c = "", l = 0; l < o.length; l++) {
    var s = o[l],
      a = "",
      e = s.keterangan_menu,
      d = s.image;
    (a = "rekomendasi" == t ? s.nama_menu : s.nama_produk),
      "selengkapnya" == s.kode_produk
        ? (c +=
            '<div class="col-4 me-2 d-flex align-items-center justify-content-center rounded-4 my-button" onclick="onClickMenuList(\''.concat(
              l,
              '\')">\n        <row>    \n          <div class="col-12 d-flex">\n              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill mx-auto text-center" viewBox="0 0 16 16">\n                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="#F37021"/>\n              </svg>\n            </div>\n            <div class="col-12 my-1"> \n              <h5 class="textTitle">Selengkapnya</h5>\n            </div>\n        </row>\n    </div>'
            ))
        : (c += '\n      <div class="col-4 me-2 rounded-4 '
            .concat("", ' my-button"  onclick="onClickMenuList(\'')
            .concat(
              l,
              '\')">\n        <row>\n          <div class="position-relative mb-3">\n            <div\n              style="\n                background-image: url(\''
            )
            .concat(
              s.bg_image,
              '\');\n              "\n              class="contentcard"\n            ></div>\n            <div>\n              <img\n                src='
            )
            .concat(
              d,
              '\n                class="img-fluid mx-auto d-block position-absolute  start-50 top-50 translate-middle"\n                style="top: 75% !important"\n                height="50px"\n                width="70px"\n                alt=""\n              />\n            </div>\n          </div>\n        </row>\n        <div class="position-relative mx-2">\n          <row>\n            <div class="col-12 my-1">\n              <h5 class="textTitle">'
            )
            .concat(
              a,
              '</h5>\n            </div>\n            <div class="col-12 my-0">\n              <p class="textsubTitle">\n                '
            )
            .concat(
              e,
              "\n              </p>\n            </div>\n          </row>\n        </div>\n      </div>"
            ));
  }
  var r =
    '\n  <div class="container my-3">\n    <h6 class="mx-1 py-1" id="titletopup" style="color: #ffffff">\n      '
      .concat(
        n,
        '\n    </h6>\n    <div class="row gx-0 isi">\n      <div class="col-12">\n        <div class="scroll">\n          '
      )
      .concat(c, "\n        </div>\n      </div>\n    </div>\n  </div>");
  document.querySelector(".content").innerHTML += r;
}
function onClickMenuList(n) {
  myfun.onClickList(n);
}
function setViewList(n, i, t) {
  LoopListTopup(n, i, t);
}
