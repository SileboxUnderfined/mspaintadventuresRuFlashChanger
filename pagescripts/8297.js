const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейн и Канайя",link="https://www.mspaintadventures.ru/?s=6&p=008298",id="janekanaya"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};