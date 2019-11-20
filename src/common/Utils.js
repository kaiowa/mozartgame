export function generateNumbers(tablero){
  let results=[];
  let Min = 1;
  let Max = 11;
  let previous;
  let tableTemp=tablero;
  let Aparecidos=[];
  for (var index = 0; index <= 15; index++) {
    let tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    if(tirada===previous) tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    previous=tirada;
    
    let numbers=tableTemp.find((item) => item.dice===tirada).options;
    let ResultNumber=Math.ceil(1 + (Math.random() * ((15 - 1) + 1)));
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
    results.push(resultItem);
   // numbers = numbers.splice(ResultNumber,1);
 
  }
  return results;


}