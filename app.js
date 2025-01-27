// lista amigos
let amigos = [];

// adicionando um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // valida se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualiza o lista de amigos
    amigos.push(nome);
    console.log(amigos);
 
    // Limpa o campo de entrada
    input.value = '';
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se há amigos na lista
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibir o nome sorteado no elemento de resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
