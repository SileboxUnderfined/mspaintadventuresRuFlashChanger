const bottomLinks = document.querySelector('span[style="font-size: 10px;"]').firstChild;
let buttons = new Array();

function creatorOfButtons(text="", link="",id="") {
    let separator = document.createElement("separator");
    separator.innerText = " | ";
    let button = document.createElement("a");
    button.href = link;
    button.text = text;
    button.id = id;
    buttons.push(separator, button);
};

creatorOfButtons(text="Сменить плеер",link="",id="playerChanger"); //playerChanger

for (let i=0;i<buttons.length;i++) {
    bottomLinks.appendChild(buttons[i]);
};