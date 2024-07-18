//Tabela
document.addEventListener('DOMContentLoaded', function () {
    //array
    const filmes = [
        { genero: 'Sci-fi', nome: 'Tudo em todo lugar e ao mesmo tempo' },
        { genero: 'Drama', nome: 'A baleia' },
        { genero: 'Drama', nome: 'Moonlight' },
        { genero: 'Sci-fi', nome: 'Ex-machina' },
        { genero: 'Terror', nome: 'X: A marca da morte' },
        { genero: 'Terror', nome: 'Pearl' },
        { genero: 'Drama', nome: 'O quarto de jack' },
        { genero: 'Romance', nome: 'Vidas passadas' },
        { genero: 'Ação', nome: 'Joias Brutas' },
        { genero: 'Terror', nome: 'Midsommar' },
    ];

   
    const table = document.getElementById('filmeTable').getElementsByTagName('tbody')[0];

   
    filmes.forEach(filme => {
        const row = table.insertRow();
        const cellGenero = row.insertCell(0);
        const cellNome = row.insertCell(1);
        const cellSelecionar = row.insertCell(2);

        cellGenero.innerHTML = filme.genero;
        cellNome.innerHTML = filme.nome;
        cellSelecionar.innerHTML = `<input type="checkbox" name="selecao">`;
    });
});

//Seleção
function selecionarFilmes() {
    const checkboxes = document.querySelectorAll('input[name="selecao"]:checked');
    const resultadoDiv = document.getElementById('resultado');

    if (checkboxes.length > 0) {
        let resultadoTexto = 'Filmes selecionados: ';
        checkboxes.forEach(checkbox => {
            const filmeNome = checkbox.parentNode.parentNode.cells[1].innerText;
            resultadoTexto += filmeNome + ', ';
        });

        resultadoTexto = resultadoTexto.slice(0, -2); // Remove a última vírgula e espaço
        resultadoDiv.innerHTML = resultadoTexto;
    } else {
        resultadoDiv.innerHTML = 'Nenhum filme selecionado.';
    }
}

//Sorteador
function sortearFilme() {
    const checkboxes = document.querySelectorAll('input[name="selecao"]:checked');

    if (checkboxes.length > 1) {
        const filmeSorteado = checkboxes[Math.floor(Math.random() * checkboxes.length)];
        const resultadoSorteioDiv = document.getElementById('resultadoSorteio');
        resultadoSorteioDiv.innerHTML = `Filme sorteado: ${filmeSorteado.parentNode.parentNode.cells[1].innerText}`;
    } else {
        alert('Selecione pelo menos dois filmes para realização do sorteio.');
    }
}