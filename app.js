let amigos = [];

function adicionarAmigo() {
    let escolherAmigo = document.querySelector('input').value;

    if (escolherAmigo === '') {
        alert('Por favor, insira um nome');
        return;
    };

    if (amigos.includes(escolherAmigo)) {
        alert(`${escolherAmigo} já foi adicionado(a) a sua lista`);
        
        
    };

    amigos.push(escolherAmigo);
    limparCampo();
    atualizarLista();
};

function limparCampo() {
    escolherAmigo = document.querySelector('input');
    escolherAmigo.value = '';
};


function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++){
            let item = document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);
        }
};

function sortearAmigo() {
    if (amigos.length === 1) {
        alert('Adicione mais um amigo para realizar o sorteio');
        return;
    }
    let sorteioAleatorio = amigos[Math.floor(Math.random()* amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Seu amigo secreto é: ${sorteioAleatorio}`;
    
    amigos = [];
};