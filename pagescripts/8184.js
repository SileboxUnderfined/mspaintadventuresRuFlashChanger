const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейн",link="https://www.mspaintadventures.ru/?s=6&p=008185",id="jane"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джейд",link="https://www.mspaintadventures.ru/?s=6&p=008188",id="jade"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};