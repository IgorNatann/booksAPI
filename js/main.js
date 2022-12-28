async function buscaEndereco(cep) {
    try { // Try = TENTAR
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
        throw Error('CEP não existente!')
    }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
    } catch (erro) { // Catch = PEGAR
        console.log(erro);
    }
}


