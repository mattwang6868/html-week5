"use strict";

var path = window.location.pathname.split('/')[1];
console.log(path);
var assignment = document.querySelector('#assignment');
var admin = document.querySelector('#admin');

function currentPage() {
  if (path === 'assignment.html') {
    window.onload = function () {
      assignment.setAttribute('class', 'nav-link active');
    };
  } else if (path === 'admin.html') {
    window.onload = function () {
      admin.setAttribute('class', 'nav-link active');
    };
  }
}

currentPage();
$(document).ready(function () {
  $('.verifiedCheckBox').click(function () {
    $(this).toggleClass('actived');
  });
});
//# sourceMappingURL=all.js.map
