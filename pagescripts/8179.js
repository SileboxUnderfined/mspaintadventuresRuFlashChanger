const textdiv = document.querySelector('iframe').parentNode;
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Красная планета",link="https://www.mspaintadventures.ru/?s=6&p=008180",id="redplanet"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Зелёная планета",link="https://www.mspaintadventures.ru/?s=6&p=008181",id="greenplanet"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Синяя планета",link="https://www.mspaintadventures.ru/?s=6&p=008183",id="blueplanet"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Фиолетовая планета",link="https://www.mspaintadventures.ru/?s=6&p=008182",id="violetplanet"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};