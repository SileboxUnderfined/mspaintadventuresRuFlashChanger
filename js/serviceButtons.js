let buttons = new Array();
let bottomLinks = null;
const url_params = new URLSearchParams(window.location.search);
const page = Number(url_params.get('p'));
console.log(`${page}, ${typeof(page)}`);

if (document.querySelector('span[style="font-size: 10px;"]') == null) {
    bottomLinks = document.querySelector('.bottomlinks');
} else {
    bottomLinks = document.querySelector('span[style="font-size: 10px;"]').firstChild;
}

buttons = buttons.concat(creatorOfButtons(text="Сменить плеер",link="",id="playerChanger")); //playerChanger
if ((localStorage.getItem('player_disabled') == null) || (localStorage.getItem('player_disabled') == 'no')) {dis_player_text = 'Откл. плеер'}
else { dis_player_text = 'Вкл. плеер' };
buttons = buttons.concat(creatorOfButtons(text=dis_player_text,link="",id="playerDisabler")); //playerDisabler
if ((localStorage.getItem("ds_fix") == null) || (localStorage.getItem("ds_fix") == 'no')) { dis_ds_fix_text = 'Док. Ск. откл.'}
else { dis_ds_fix_text = 'Док. Ск. вкл.' }
if ((page >= 4102) && (page <= 6010)) {
    buttons = buttons.concat(creatorOfButtons(text=dis_ds_fix_text,link="",id="ds_fixSwitch")) // ds_fixSwitch
}
for (let i=0;i<buttons.length;i++) {
    bottomLinks.appendChild(buttons[i]);
};