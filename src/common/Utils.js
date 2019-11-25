export function generateNumbers(tablero,trios){
  let results=[];
  results["minus"]=[];
  results["trios"]=[];
  let Min = 1;
  let Max = 11;
  let previous;
  let tableTemp=tablero;
  let triosTemp=trios;
  let Aparecidos=[];
  let AparecidosTrios=[];
  for (var index = 0; index <= 15; index++) {
    let tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    if(tirada===previous) tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    previous=tirada;
    
    let numbers=tableTemp.find((item) => item.dice===tirada).options;
    let ResultNumber=index+1;
    if(Aparecidos.includes(numbers[ResultNumber-1])){
      ResultNumber=Math.ceil(1 + (Math.random() * ((15 - 1) + 1)));
      if(Aparecidos.includes(numbers[ResultNumber-1])){
        ResultNumber=Math.ceil(1 + (Math.random() * ((15 - 1) + 1)));
        if(Aparecidos.includes(numbers[ResultNumber-1])){
          ResultNumber=Math.ceil(1 + (Math.random() * ((15 - 1) + 1)));
  
        }
      }
    }
    let resultItem={
      'dice':tirada,
      'value':numbers[ResultNumber-1]
    }
    Aparecidos.push(numbers[ResultNumber-1]);
    results["minus"].push(resultItem);
  }
  //trios
  previous=null;
  
  for (var index = 0; index <= 15; index++) {
    let tirada=Math.ceil(0 + (Math.random() * ((6 - 1) + 1)));
    if(tirada===previous) tirada=Math.ceil(0 + (Math.random() * ((6 - 1) + 1)));
    previous=tirada;
   

    let numbersTrios=triosTemp.find((item) => item.dice===tirada).options;
    let ResultNumber=index+1;
    let resultItem={
      'dice':tirada,
      'value':numbersTrios[ResultNumber-1]
    }
    AparecidosTrios.push(numbersTrios[ResultNumber-1]);
    results["trios"].push(resultItem);
  }
  console.log('results',results);

  return results;


}