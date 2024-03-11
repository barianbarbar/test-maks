function createTitle() {
  var html = '<h5 class="titletopup m-1 p-1">Update Aplikasi</h5>';
  document.querySelector('.tittle').insertAdjacentHTML('beforebegin', html);
}
createTitle();
//createContent();
function createContent(jsonrespon) {
  var json = JSON.parse(jsonrespon);
  var jbdata = json.data;
  var isUpdate = jbdata.isUpdate;
  var htmllist = '';
  var keterangan1 = '';
  var hiddenButton = '';
  if (isUpdate == true) {
    var jbdetail = jbdata.detail;
    keterangan1 = json.rd;
    var dataDetail = jbdetail.detail;
    var i = 0;
    var lenghtdata = dataDetail.length;
    if (lenghtdata > 0) {
      for (var i = 0; i < dataDetail.length; i++) {
        var obj = dataDetail[i];
        var title = obj.title;
        var keterangan = obj.keterangan;
        htmllist +=
          '<div class="row my-4">\n        <div class="col-1">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="10"\n            height="10"\n            fill="currentColor"\n            class="bi bi-circle-fill"\n            viewBox="0 0 16 16"\n          >\n            <circle cx="8" cy="8" r="8" />\n          </svg>\n        </div>\n        <div class="col">\n          <div class="row">\n            <div class="col-12">\n              <b class="fontsmall">'
            .concat(
              title,
              '</b>\n            </div>\n            <div class="col-12">\n              <span class="fontsmall">\n                '
            )
            .concat(
              keterangan,
              '\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>'
            );
      }
    }
  } else {
    hiddenButton = 'd-none';
    keterangan1 = jbdata.keterangan;
  }
  var html =
    '<div class="container">\n  <div class="row my-3">\n    <div class="col-12">\n      <span class="fontsmall">\n        '
      .concat(keterangan1, '\n        </span>\n      </div>\n    </div>\n    ')
      .concat(htmllist, '\n    <div class="row my-3 ')
      .concat(
        hiddenButton,
        ' ">\n      <div class="col-12">\n        <button  class="btn w-100 buttonblue"  onclick="onclickupdate()"=>\n          Update\n        </button>\n      </div>\n    </div>\n  </div>'
      );
  document.querySelector('.content').innerHTML += html;
}

function onclickupdate() {
  Android.updateapp();
}
