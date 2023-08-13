if (localStorage.getItem('player') == null) {
    localStorage.setItem('player','youtube');
};
if (localStorage.getItem('player_disabled') == null) {
    localStorage.setItem('player_disabled','no')
};

document.getElementById("playerChanger").addEventListener("click",function(){
    if (localStorage.getItem('player') == 'vk') {
        localStorage.setItem('player',"youtube");
    } else {
        localStorage.setItem('player','vk');
    }
    console.log(localStorage.getItem('player'));
});

document.getElementById('playerDisabler').addEventListener("click",function() {
    if (localStorage.getItem('player_disabled') == 'no') {
        localStorage.setItem('player_disabled','yes')
    } else {
        localStorage.setItem('player_disabled','no');
    };
    console.log(`player disabled: ${localStorage.getItem('player_disabled')}`);
});