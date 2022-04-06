const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейн",link="https://www.mspaintadventures.ru/?s=6&p=006935",id="jane"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джейк",link="https://www.mspaintadventures.ru/?s=6&p=006953",id="jake"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Рокси",link="https://www.mspaintadventures.ru/?s=6&p=006979",id="roxy"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Дирк",link="https://www.mspaintadventures.ru/?s=6&p=006971",id="dirk"));


for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};