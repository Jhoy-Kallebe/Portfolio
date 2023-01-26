function changeTheme(){
    let html = document.documentElement;
    html.classList.toggle('light');
}

function openContainer(){
    let container = document.querySelector('.open');
    container.style.display = "block";
}

function closeContainer(){
    let container = document.querySelector('.open');
    container.style.display = "none";
}

