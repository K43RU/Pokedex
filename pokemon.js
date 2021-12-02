const user = document.location.search;
const userName = user.replace('?', '');
aparecer();
function aparecer(){(getPoke(name))};

function getPoke() {
    fetch('https://prof-poke-api.herokuapp.com/api/pokemon/' + id);
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Poke Data:', data);
                showPoke(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

getPoke();

function showPoke(poke, name) {
    if (!poke) return;
    let divName = document.createElement('div');
    divName.innerText = name;
    document.body.appendChild(divName);
}