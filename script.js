const toggleBtn = document.querySelector('.mobile_navbar_btn')
const toggleBtnIcon = document.querySelector('.mobile_navbar_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtnIcon.onClick = function() {
    dropDownMenu.classList.toggle('open')
}