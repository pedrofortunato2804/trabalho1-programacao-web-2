let url = 'https://restcountries.com/v3.1/all';
let seletor = document.querySelector('.seletor #seletor-paises');
let paises;

fetch(url)
    .then((response) => response.json())
    .then((dados) => dadosCarregados(dados))
    .catch((err) => console.log(err));


function dadosCarregados(dadosCarregados){
    paises = dadosCarregados;

    let html = "";
    paises.forEach(pais => html += `
        <option id="${pais.name.common}">${pais.name.common}</option>
    `)
    seletor.innerHTML = html;

    mostrarInfos("Brazil")
}

function mostrarInfos(nomePais){
    let infoPais = paises.find(pais => pais.name.common === nomePais);
    console.log(infoPais);
    document.querySelector(".infos #name").innerHTML = nomePais;
    document.querySelector(".infos #capital").innerHTML = infoPais.capital;
    document.querySelector(".infos #continente").innerHTML = infoPais.continents;
    document.querySelector(".infos #populacao").innerHTML = infoPais.population.toLocaleString();
    document.querySelector(".infos #area").innerHTML = infoPais.area.toLocaleString();
    document.querySelector(".infos #moeda").innerHTML = infoPais.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`);
    document.querySelector(".infos #idioma").innerHTML = infoPais.languages[0];

    document.querySelector(".bandeira img").src = infoPais.flags.png;
}


/*

let seletor = document.querySelector('.seletor #seletor-paises');
let html = "";
for(let i = 0; i < dadosColetados(dados).length; i++){
    html += `
        <option id="${dados[i].name.common}">${dados[i].name.common}</option>
    `;
}

seletor.innerHTML = html;


//let urlInfos = ``

function mostrarBandeira(ev, id){
    ev.preventDefault();

    document.querySelector(`#${dados[i].name.common}`).innerHTML = '';

    for(let info of `https://restcountries.com/v3.1/name/${dados[i].name.common}`){
        let html = `
            <img src="${info.flags.png}">
        `;

        document.querySelector('.container #flag').innerHTML = html;
    }
}

*/