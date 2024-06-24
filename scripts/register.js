async function searchApi() {
  const cep = document.getElementById('cep').value;
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = await response.json();

    console.log(endereco);

    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
  } catch (error) {
    console.error(error);
  }
}
