const textdiv = document.querySelector('.mspa_page_text');
let buttonsText = new Array();

buttonsText = buttonsText.concat(creatorOfButtons(text="Дейв и Роуз",link="https://www.mspaintadventures.ru/?s=6&p=005796",id="daverose"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Джон и Вриска",link="https://www.mspaintadventures.ru/?s=6&p=005805",id="johnvriska"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Дейвспрайт и Джейдспрайт",link="https://www.mspaintadventures.ru/?s=6&p=005826",id="davejadesprites"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Королевский Дурачок и Изгнанники",link="https://www.mspaintadventures.ru/?s=6&p=005828",id="kingdumbanddebils"));
buttonsText = buttonsText.concat(creatorOfButtons(text="Бабульспрайт",link="https://www.mspaintadventures.ru/?s=6&p=005833",id="babulsprite"));

for (let i = 0; i < buttonsText.length; i++) {
    textdiv.appendChild(buttonsText[i]);
};