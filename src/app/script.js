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

const toDownHeader = document.querySelector('.to-down-header');
const toDownFooter = document.querySelector('.to-down-footer');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      toDownHeader.classList.add("active");
      toDownFooter.classList.add("active");
    } else {
      toDownHeader.classList.remove("active");
      toDownFooter.classList.remove("active");
    }
})

