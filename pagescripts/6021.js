const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейн",link="https://www.mspaintadventures.ru/?s=6&p=006022",id="jane"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джейк",link="https://www.mspaintadventures.ru/?s=6&p=006063",id="jake"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};