const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Рокси",link="https://www.mspaintadventures.ru/?s=6&p=006370",id="roxy"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Дирк",link="https://www.mspaintadventures.ru/?s=6&p=006417",id="dirk"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};