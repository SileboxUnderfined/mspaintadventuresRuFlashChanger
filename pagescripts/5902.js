const textdiv = document.querySelector('.mspa_page_text');
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Джейд и Каркат",link="https://www.mspaintadventures.ru/?s=6&p=005903",id="jadekarkat"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};