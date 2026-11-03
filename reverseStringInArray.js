let func = ["tasks1", "notification", "tasks2", "notification", "alpha", "break", "beta", "notification error 404"];

function processOfficeTasks(tasks) {
    
  const rev = [];
    
  for (let i = 0; i < tasks.length; i++){
    //Se encontrar a task break, encera a execução;
    if (tasks[i].includes('break')) {
    
      break;
      
    }
    
    if (tasks[i].includes('notification') === false) {
      
      //rev receber a string invertida;
      rev.push(tasks[i].split("").reverse().join(""));
      
    }
    
  }

  
  return rev;
}

console.log(processOfficeTasks(func));
