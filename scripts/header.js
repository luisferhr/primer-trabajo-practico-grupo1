const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropdownMenu = document.querySelector(".dropdown_menu")

$(document).ready(function(){
  $("#header").load("header.html");
});

toggleBtn.onclick = function(){
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}




 




