let stopping = [50, 100, 150, 200, 250, 300, 350, 400];

function planStops(restStopDistances, totalDistance, travelerType) {
    
  const paradas = [];
  if (travelerType.includes('allergy')) {
    //analisa se o passageiro é alergico e calcula as paradas na distancia informada;
    restStopDistances.forEach((restStopDistances) => {
      
      if (Number.isInteger(restStopDistances/100) && (restStopDistances <= totalDistance)) {
      
        paradas.push(restStopDistances);
        
      }
      
    });
    return paradas;
  }
  //analisa se o passageiro não é alergico e calcula as paradas na distancia informada;
  if (travelerType.includes('normal')) {
        
    restStopDistances.forEach((restStopDistances) => {

      if (Number.isInteger(restStopDistances/200) && (restStopDistances <= totalDistance)) {
        paradas.push(restStopDistances);
      
      }
    });
    return paradas;
  //se a informação sobre o passageiro não for válida, solicita uma informação válida;
  } else {
    return "Informe se o viajante é allergy ou normal";
  }
}

console.log(planStops(stopping,280,""));
