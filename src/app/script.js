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

