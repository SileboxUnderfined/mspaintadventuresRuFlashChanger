const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейн",link="https://www.mspaintadventures.ru/?s=6&p=009705",id="jane"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джейк",link="https://www.mspaintadventures.ru/?s=6&p=009710",id="jake"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};