if (localStorage.getItem('player') == null) {
    localStorage.setItem('player','youtube');
};

document.getElementById("playerChanger").addEventListener("click",function(){
    if (localStorage.getItem('player') == 'vk') {
        localStorage.setItem('player',"youtube");
    } else {
        localStorage.setItem('player','vk');
    }
    console.log(localStorage.getItem('player'));
});