const mainDiv = document.createElement('div');
mainDiv.className = 'add_int_mspae';

let uniqueCount = JSON.parse(localStorage.getItem('pages_unique_mspae')).length;
const pageCounter = document.createElement('p');
pageCounter.textContent = `прочитано страниц(всего/уникальных): ${localStorage.getItem('pages_counter_mspae')}/${uniqueCount}`;

const playPercent = document.createElement('p');
let percentOfPlay = (uniqueCount / 8124) * 100;
playPercent.textContent = `процент прохождения: ${percentOfPlay.toFixed(2)}%`

const readCountEl = document.createElement('p');
let readCount = localStorage.getItem('read_count_mspae');
readCountEl.textContent = `количество прохождений: ${readCount}`

const clearStats = document.createElement('a');
clearStats.id = "clearStats_mspae"
clearStats.text = 'Очистить статистику';

mainDiv.appendChild(pageCounter);
mainDiv.appendChild(playPercent);
if (readCount != null) { mainDiv.appendChild(readCountEl) };
mainDiv.appendChild(clearStats);
document.querySelector('span[style="font-size: 10px;"]').appendChild(mainDiv);

clearStats.addEventListener("click",function(){
    if (confirm("Вы точно хотите очистить статистику?")) {
        localStorage.removeItem('pages_counter_mspae');
        localStorage.removeItem('pages_unique_mspae');
        localStorage.removeItem('read_count_mspae');
        document.location.reload();
    };
});