//2. Nullish Coalescing (??)

//6. Complete o código para mostrar "Não informado" quando nome for null ou undefined.
const nome = null;

console.log(nome?? "Não informado");//completado

//7. Qual será o resultado? R: o resultado será 18(c)
const idade = null;

console.log(idade ?? 18);

//8. Qual será a saída? Atenção ao valor 0. -  Saída = 0(a) 
const estoque = 0;

console.log(estoque ?? 10);

//9. Explique por que os dois resultados são diferentes
//R: Os dois resultados são diferentes pois o ?? Usa um valor padrão somente para null ou undefined, já o || Se o valor da esquerda for false, usa o valor da direita.
const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

//10. Complete usando o operador adequado.
const usuario = {
  apelido: undefined
};

const nomeExibido = usuario.apelido ??  "Visitante";
console.log(nomeExibido);