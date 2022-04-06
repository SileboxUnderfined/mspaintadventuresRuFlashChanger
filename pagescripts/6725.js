const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Ответить Автоответчику Дирка",link="https://www.mspaintadventures.ru/?s=6&p=006726",id="dirk"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};