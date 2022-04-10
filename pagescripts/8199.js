const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="КСИД",link="https://www.mspaintadventures.ru/?s=6&p=008200",id="ksid"));
buttonsText = buttonsText.concat(creatorOfButtons(text="КЖИЧМ",link="https://www.mspaintadventures.ru/?s=6&p=008224",id="kjichm"));
buttonsText = buttonsText.concat(creatorOfButtons(text="КМИЛ",link="https://www.mspaintadventures.ru/?s=6&p=008243",id="kmil"));


for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};