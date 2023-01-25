function changeTheme(){
    let html = document.documentElement;
    html.classList.toggle('light');
}

function openContainer(){
    let container = document.querySelector('.container');
    container.classList.toggle('open')
}

