
const path = window.location.pathname.split('/')[1];
console.log(path)
const assignment = document.querySelector('#assignment')
const admin = document.querySelector('#admin')

function currentPage() {
  if (path === 'assignment.html') {
    window.onload = function () {
      assignment.setAttribute('class', 'nav-link active')
    };
  } else if (path === 'admin.html') {
    window.onload = function () {
      admin.setAttribute('class', 'nav-link active')
    };
  }
}

currentPage()

$(document).ready(() =>{
  $('.verifiedCheckBox').click(function(){
    $(this).toggleClass('actived')
  })
})
