const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


let primoBlocco = "";
let secondoBlocco = "";
let terzoBlocco = "";
let quartoBlocco = "";
let quintoBlocco = "";
let sestoBlocco = "";



for(let i = 0; i < team.length; i++){
    console.log(team[i].name)
    console.log(team[i].role)
    console.log(team[i].image)
}

    primoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[0].image}" alt="img-random">
        <h3>${team[0].name}</h3>
        <p>${team[0].role}</p>
    </div>`
    
    secondoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[1].image}" alt="img-random">
        <h3>${team[1].name}</h3>
        <p>${team[1].role}</p>
    </div>`

    terzoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[2].image}" alt="img-random">
        <h3>${team[2].name}</h3>
        <p>${team[2].role}</p>
    </div>`

    quartoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[3].image}" alt="img-random">
        <h3>${team[3].name}</h3>
        <p>${team[3].role}</p>
    </div>`
    
    quintoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[4].image}" alt="img-random">
        <h3>${team[4].name}</h3>
        <p>${team[4].role}</p>
    </div>`

    sestoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[5].image}" alt="img-random">
        <h3>${team[5].name}</h3>
        <p>${team[5].role}</p>
    </div>`

const primoBloccoWrapper = document.getElementById("primo-blocco");
primoBloccoWrapper.innerHTML += primoBlocco;

const secondoWrapper = document.getElementById("secondo-blocco");
secondoWrapper.innerHTML += secondoBlocco

const terzoWrapper = document.getElementById("terzo-blocco");
terzoWrapper.innerHTML += terzoBlocco


const quartoWrapper = document.getElementById("quarto-blocco");
quartoWrapper.innerHTML += quartoBlocco;

const quintoWrapper = document.getElementById("quinto-blocco");
quintoWrapper.innerHTML += quintoBlocco

const sestoWrapper = document.getElementById("sesto-blocco");
sestoWrapper.innerHTML += sestoBlocco