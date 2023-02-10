function changeTheme(){
    let html = document.documentElement;
    html.classList.toggle('light');
}

function openContainer(){
    let container = document.querySelector('.open');
    container.style.display = "initial";
    container.style.animation = "popUp-ani ease 1s";
}

function closeContainer(){
    let container = document.querySelector('.open');
    container.style.display = "none";
}

function showMessage(){
    alert('Em desenvolvimento');
}

function showMenu(){
    let menu = document.querySelector('.to-down-header');
    menu.classList.toggle('show');
}

function flipCard(classCard) {
    let card = document.querySelector(classCard);
    card.classList.toggle('active');
}

const toDownHeader = document.querySelector('.to-down-header');
const toDownFooter = document.querySelector('.to-down-footer');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
      toDownHeader.classList.add("active");
      toDownFooter.classList.add("active");
    } else {
      toDownHeader.classList.remove("active");
      toDownFooter.classList.remove("active");
    }
})

