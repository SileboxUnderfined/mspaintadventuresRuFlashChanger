const textdiv = document.querySelector('.mspa_page_text');
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейд и Каркат",link="https://www.mspaintadventures.ru/?s=6&p=005875",id="jadekarkat"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Гамзи и Таврос",link="https://www.mspaintadventures.ru/?s=6&p=005886",id="gamzetavros"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Королевский Дурачок и Изгнанники",link="https://www.mspaintadventures.ru/?s=6&p=005888",id="kingdumbanddebils"));
buttonsText = buttonsText.concat(creatorOfButtons(text="??????",link="https://www.mspaintadventures.ru/?s=6&p=005895",id="dokscratch"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Арадия и Соллукс",link="https://www.mspaintadventures.ru/?s=6&p=005898",id="aradiasolux"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};