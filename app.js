let amigos = [];

function adicionarAmigo() {
    let escolherAmigo = document.querySelector('input').value;

    if (escolherAmigo === '') {
        alert('Por favor, insira um nome');
        return;
    }

    if (amigos.includes(escolherAmigo)) {
        alert(`${escolherAmigo} já foi adicionado(a) a sua lista`);
        
        
    }

    amigos.push(escolherAmigo)
}

