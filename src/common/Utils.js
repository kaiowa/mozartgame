export function generateNumbers(tablero){
  debugger;
  let results=[];
  let Min = 1;
  let Max = 11;
  let previous;
  let tableTemp=tablero;

  for (var index = 1; index <= 16; index++) {
    let tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    if(tirada===previous) tirada=Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
    previous=tirada;
    
    let numbers=tableTemp.find((item) => item.dice===tirada).options;
    let ResultNumber=Math.ceil(1 + (Math.random() * ((15 - 1) + 1)));
    let resultItem={
      'dice':tirada,
      'value':numbers[ResultNumber-1]

    }
    results.push(resultItem);
   // numbers = numbers.splice(ResultNumber,1);
  
   console.log('Numbers',numbers);
   console.log('elegido',ResultNumber,numbers[ResultNumber-1])
  }
  return results;


}