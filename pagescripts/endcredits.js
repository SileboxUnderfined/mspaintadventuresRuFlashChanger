let read_count = localStorage.getItem('read_count_mspae');
if (read_count == null) {
    read_count = 0;
} else {
    read_count = Number(read_count);
};

read_count += 1;
localStorage.setItem('pages_unique_mspae',JSON.stringify([]));
localStorage.setItem('read_count_mspae',read_count);

alert(`От лица создателя плагина MSPAEssentials, поздравляю вас с ${read_count} прочтением хоумстака!\nТеперь количество прохождений будет указано в комиксе.`);