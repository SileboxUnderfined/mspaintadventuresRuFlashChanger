let buttons = new Array();
let bottomLinks = null;

if (document.querySelector('span[style="font-size: 10px;"]') == null) {
    bottomLinks = document.querySelector('.bottomlinks');
} else {
    bottomLinks = document.querySelector('span[style="font-size: 10px;"]').firstChild;
}

buttons = buttons.concat(creatorOfButtons(text="Сменить плеер",link="",id="playerChanger")); //playerChanger
for (let i=0;i<buttons.length;i++) {
    bottomLinks.appendChild(buttons[i]);
};