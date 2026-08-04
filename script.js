CSS


body {
    max-width: 100vw;
    font-family: sans-serif;
    margin: 0;
}

header {
    background-color: #6a0dad; /* Roxo principal */
    color: #ffff00; /* Amarelo secundário */
    text-align: center;
    margin: 0 auto;
    padding: 16px;
}

main {
    background-color: #FFFFFF;
    color: #6a0dad; /* Roxo principal para o texto */
    margin: 0 auto;
    padding: 16px;

    display: flex;
    flex-wrap: wrap;
}

article {
    display: flex;

    border: 2px solid #ffff00; /* Borda Amarela */
    background-color: #f9f0ff; /* Fundo roxo bem clarinho para destaque */

    margin: 16px;
    gap: 16px;
    padding: 16px;

    flex: 1 1 25%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
}

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.artigo-autor {
    font-weight: bold;
}

.artigo-fonte {
    font-size: 0.9em;
    font-style: italic;
}

button {
    background-color: #ffff00; /* Amarelo nos botões */
    color: #6a0dad;
    border: 1px solid #6a0dad;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    margin: 4px;
}
