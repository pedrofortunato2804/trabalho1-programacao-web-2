let url = 'https://restcountries.com/v2/all';
let seletor = document.querySelector('.seletor #seletor-paises');
let bordeContrie = document.querySelector('.container .fronteira .paises-fronteira');
let paises;

seletor.addEventListener("change", selecaoPais);

function selecaoPais(ev){
    mostrarInfos(ev.target.value);
}

fetch(url)
    .then((response) => response.json())
    .then((dados) => dadosCarregados(dados))
    .catch((err) => console.log(err));


function dadosCarregados(dadosCarregados){
    paises = dadosCarregados;

    let html = "";
    paises.forEach(pais => html += `
        <option id="${pais.name}">${pais.name}</option>
    `)
    seletor.innerHTML = html;

    mostrarInfos(seletor[seletor.selectedIndex].value);
}

function mostrarInfos(nomePais){
    let infoPais = paises.find(pais => pais.name === nomePais);
    document.querySelector(".infos #name").innerHTML = nomePais;
    document.querySelector(".infos #capital").innerHTML = infoPais.capital;
    document.querySelector(".infos #continente").innerHTML = infoPais.region;
    document.querySelector(".infos #populacao").innerHTML = infoPais.population.toLocaleString();
    document.querySelector(".infos #area").innerHTML = infoPais.area.toLocaleString();
    document.querySelector(".infos #moeda").innerHTML = infoPais.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`);
    document.querySelector(".infos #idioma").innerHTML = infoPais.languages.filter(c => c.name).map(c => `${c.name}`);
    document.querySelector(".bandeira img").src = infoPais.flags.png;

    console.log(infoPais.borders)

    let fronteira = infoPais.borders;
    
    let html = "";
    fronteira.forEach(paisFronteira => html += `
        <h3 class="borders" id="${paisFronteira}">${paisFronteira}</h3>
        <br>
    `)

    bordeContrie.innerHTML = html;
}