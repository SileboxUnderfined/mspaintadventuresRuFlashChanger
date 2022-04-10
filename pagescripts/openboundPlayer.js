const textdiv = document.querySelector("iframe").parentElement;
textdiv.appendChild(creatorOfButtons(text="Переключить режим игры(если вы с ПК)",link="",id="openbound_ChangePlayer")[1]);

if (localStorage.getItem('openboundPlayer') == null) {
    localStorage.setItem('openboundPlayer','video');
};

document.getElementById("openbound_ChangePlayer").addEventListener("click",function(){
    if (localStorage.getItem('openboundPlayer') == 'video') {
        localStorage.setItem('openboundPlayer',"game");
    } else {
        localStorage.setItem('openboundPlayer','video');
    };
});