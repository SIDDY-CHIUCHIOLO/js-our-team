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

//MILESTONE 1:
//stampare su console le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//stampare le stesse informazioni su DOM sottoforma di stringhe


let primoBlocco = "";

for(let i = 0; i <= 0; i++){
    console.log(team[i].name)
    console.log(team[i].role)
    console.log(team[i].image)
    primoBlocco += `
    <div">
        <img class="w-100 pb-3" src="img/${team[i].image}" alt="img-random">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
    </div>`
}
const primoBloccoWrapper = document.getElementById("primo-blocco");
primoBloccoWrapper.innerHTML += primoBlocco

