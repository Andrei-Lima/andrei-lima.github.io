const list = document.getElementById('list');

const thoughtList = [
    "agora eu tenho que pensar em pensamentos para colocar em um álbum de pensamentos", "não consigo pensar em nada"
];

for (let i = 0; i < thoughtList.length; i++) {
    newList(i, thoughtList[i]);
}

function newList(count, string) {
    var li = document.createElement('li');
    var a  = document.createElement('a');

    a.innerHTML = (count + 1) + ". " + string;

    li.appendChild(a);

    list.appendChild(li);
}