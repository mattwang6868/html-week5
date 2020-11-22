


function currentPage() {
  const path = window.location.pathname.split('/')[2];
  console.log(path)
  const assignment = document.querySelector('#assignment')
  const admin = document.querySelector('#admin')

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
