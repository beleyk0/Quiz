const nomes = [
    "Alex",
    "Clara",
    "Helena",
    "Lucas",
    "Valentina",
    "Miguel",
    "Elisa"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
