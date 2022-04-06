const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Ответить Рокси",link="https://www.mspaintadventures.ru/?s=6&p=006722",id="roxy"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Ответить Джейку",link="https://www.mspaintadventures.ru/?s=6&p=006723",id="jake"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Ответить НТ",link="https://www.mspaintadventures.ru/?s=6&p=006721",id="nt"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};