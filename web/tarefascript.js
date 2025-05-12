function cadastrarTarefa() {
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;

    fetch('/api/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ descricao, setor, prioridade })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('mensagem').innerText = 'Tarefa cadastrada com sucesso!';
    })
    .catch(error => {
        document.getElementById('mensagem').innerText = 'Erro ao cadastrar tarefa!';
    });

    return false;
}
