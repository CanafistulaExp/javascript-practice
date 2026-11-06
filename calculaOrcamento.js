const p = [50, 30, 15, 40, 25];
const y = ["Shoes",  "Hat",  "Socks",  "Jacket",  "Gloves"];

function analyzeBudget(prices, items, budget) {

  const cabeOrcamento = [];
  let valorOrcamento = 0;
  let foraOrcamento = 0;

  prices.forEach((elemento, id) => {
    
    if (budget >= elemento) {
      cabeOrcamento.push(items[id]); //recebe os elementos do array que tem o valor menor ou igual a budget;
      valorOrcamento += elemento; //soma o valor dos elementos do array que tem valor menos ou igual a budget;
      foraOrcamento = (prices.length - cabeOrcamento.length); //mostra quantas elementos ficaram acima do orcamento;
    }
    
  })
  //O exercicio exigiu para fazer dessa forma, mas também é possível mudar o return para o valor das variaveis;  
  return (
    console.log(`Affordable items: ${cabeOrcamento}`),
    console.log(`Total budget needed: ${valorOrcamento}`),
    console.log(`Items out of budget: ${foraOrcamento}`));

}

analyzeBudget(p, y, 25);
