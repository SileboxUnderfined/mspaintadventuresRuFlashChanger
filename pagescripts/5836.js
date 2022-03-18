const textdiv = document.querySelector('.mspa_page_text');
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Дейв и Роуз",link="https://www.mspaintadventures.ru/?s=6&p=005837",id="daverose"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джон и Вриска",link="https://www.mspaintadventures.ru/?s=6&p=005849",id="johnvriska"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Дейвспрайт и Джейдспрайт",link="https://www.mspaintadventures.ru/?s=6&p=005844",id="davejadesprites"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Королевский Дурачок и Изгнанники",link="https://www.mspaintadventures.ru/?s=6&p=005857",id="kingdumbanddebils"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Бабульспрайт",link="https://www.mspaintadventures.ru/?s=6&p=005854",id="babulsprite"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джейд и Каркат",link="https://www.mspaintadventures.ru/?s=6&p=005872",id="jadekarkat"));

buttonsText.reverse();

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.insertBefore(buttonsText[i],textdiv.firstChild);
};