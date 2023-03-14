let nomes = ["Maria", "João", "Pedro", "Ana", "Lucas"];
nomes.sort(function(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(nomes);

let data = new Date();
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let dataFormatada = data.toLocaleDateString('pt-BR', options);
console.log(dataFormatada);

