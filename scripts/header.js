const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropdownMenu = document.querySelector(".dropdown_menu")

<<<<<<< HEAD:header.js
=======
$(document).ready(function(){
  $("#header").load("header.html");
});

>>>>>>> 86d0b4acfa92e0f7331b2eb8a67fc151cdad820f:scripts/header.js
toggleBtn.onclick = function(){
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}


<<<<<<< HEAD:header.js
=======
 
>>>>>>> 86d0b4acfa92e0f7331b2eb8a67fc151cdad820f:scripts/header.js




