const compras = ["Arroz", "Feijão", "Carne", "Temperos"];

function rastreaCompras(listaCompras, adicionaItem = "", removeItem = -1) {
    
  console.log("Lista de compas:");
  
  if(adicionaItem !== "") {
  
    listaCompras.push(adicionaItem);
  }
  
  if (removeItem >= 0 && removeItem < listaCompras.length) {
  
    listaCompras.splice(removeItem, 1);
  }
  
  listaCompras.forEach( (elementos, x) => {
  
    console.log(`${x}. ${elementos} `);
  
  });

  
  return listaCompras;
}

rastreaCompras(compras,"Farinha",3);
