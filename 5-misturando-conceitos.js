//5. Misturando os conceitos

//16. Complete os espaços para que o resultado seja Maria.
const usuario = {
  perfil: {
    nome: "Maria"
  }
};

const nome = usuario.perfil?.nome?? "Sem nome";
console.log(nome);

//17. Faça o código mostrar "Cidade não informada" sem gerar erro.
const usuario1 = {};
    cidade: undefined;

const nomeExibido = usuario1.cidade ?? 'cidade não informada' ;
console.log(nomeExibido);

//18. Sem executar, diga as duas saídas e explique a diferença.
//Resposta: Um será 0 e o outro 10, já que um utilizamos o valor da direita e o outro da nota. 
//2- 0, 
const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//19. Encontre o problema e reescreva a linha de cidade corretamente
const usuario2 = {};

const cidade = usuario2.endereco ?? "Não informada";
console.log(cidade)

//20. Complete usando ?. e ?? para exibir o telefone ou "Telefone não informado".
const pedido = {
  cliente: {
    nome: "Pedro"
  }
};
const telefone = pedido.telefone ?? "Telefone não informado";
console.log(telefone);