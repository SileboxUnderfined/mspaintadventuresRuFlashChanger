let nowCounterAll = localStorage.getItem('pages_counter_mspae');
if (nowCounterAll == null) {
    nowCounterAll = 0;
}
localStorage.setItem('pages_counter_mspae',Number(nowCounterAll)+1);

let nowUnique = localStorage.getItem('pages_unique_mspae');
if (nowUnique == null) {
    nowUnique = JSON.stringify([]);
} 
nowUnique = JSON.parse(nowUnique);

let thisPage = new URLSearchParams(document.location.href).get('p');
if (!nowUnique.includes(thisPage)) {
    nowUnique.push(thisPage);
    localStorage.setItem('pages_unique_mspae',JSON.stringify(nowUnique));
};