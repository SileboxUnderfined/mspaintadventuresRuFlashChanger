let buttons = new Array();
let bottomLinks = null;

if (document.querySelector('span[style="font-size: 10px;"]') == null) {
    bottomLinks = document.querySelector('.bottomlinks');
} else {
    bottomLinks = document.querySelector('span[style="font-size: 10px;"]').firstChild;
}

buttons = buttons.concat(creatorOfButtons(text="Сменить плеер",link="",id="playerChanger")); //playerChanger
if ((localStorage.getItem('player_disabled') == null) || (localStorage.getItem('player_disabled') == 'no')) {dis_player_text = 'Откл. плеер'}
else { dis_player_text = 'Вкл. плеер' };
buttons = buttons.concat(creatorOfButtons(text=dis_player_text,link="",id="playerDisabler")); //playerDisabler
for (let i=0;i<buttons.length;i++) {
    bottomLinks.appendChild(buttons[i]);
};