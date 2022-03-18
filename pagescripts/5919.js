const textdiv = document.querySelector('.mspa_page_text');
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейд и Каркат",link="https://www.mspaintadventures.ru/?s=6&p=005920",id="jadekarkat"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Дейв и Гамзи",link="https://www.mspaintadventures.ru/?s=6&p=005927",id="davegamze"));
buttonsText = buttonsText.concat(creatorOfButtons(text="??????",link="https://www.mspaintadventures.ru/?s=6&p=005932",id="dokscratch"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};