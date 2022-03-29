let farma = document.querySelector('.farma');

const poleZvirat = [
    {jmeno: 'husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'kocka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'krava', foto: 'obrazky/krava.jpg'},
    {jmeno: 'kun', foto: 'obrazky/kun.jpg'},
    {jmeno: 'ovce', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'pes', foto: 'obrazky/pes.jpg'},
]

for (let i = 0; i < poleZvirat.length; i++) {
    let zvire = document.createElement('div');
    zvire.className = 'zvire';

let fotoZvirete = document.createElement('img');
fotoZvirete.className = 'foto';
fotoZvirete.src = poleZvirat[i].foto;

let jmenoZvirete = document.createElement('span');
jmenoZvirete.className = 'jmeno';
jmenoZvirete.innerHTML = poleZvirat[i].jmeno;

zvire.appendChild(fotoZvirete);
zvire.appendChild(jmenoZvirete);


farma.appendChild(zvire);
}

// poleZvirat.forEach((objekt, index) => { = arrow function
// };