//54.1,51.24,49.89,47.1,46.52,45.11
let Summary_Voltage = prompt("укажите общее напряжение","54.40");//------------входные данные, напряжения каждого часа
let Summary_Voltage_Array = Summary_Voltage.split(',');

//------------------------------------------------------------------------массив коэфициентов напряжений
let mkoef1 = [0.250512,0.249897,0.249897,0.249693];           
let mkoef2 = [0.250737,0.250526,0.249052,0.249684];  
let mkoef3 = [0.250512,0.249885,0.249050,0.249693];           
let mkoef4 = [0.250627,0.250526,0.249052,0.249684]; 
//------------------------------------------------------------------------

let Mass_Koeff = [mkoef1,mkoef2,mkoef3,mkoef4];//--------------------------массив коэффициэнтов, которыми будет определяться напряжение
//каждой ячейки
let result_voltage_array = [];
//------------------------------------------------------------------------описание f. для получения rnd значения для определения (ind)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

//------------------------------------------------------------------------описание f. напряжений ячеек для отдельно взятого часа
function resCellVoltages(Cell_Voltage_Index, Sum_Volt){
  let result = [];
    for(let i = 0; i < 4; i++ ){
      result[i] = Cell_Voltage_Index[i] * Sum_Volt;
      result[i] = result[i].toFixed(2);
      
    }
    
  return(result);
 }
//----------------------------------------------------------

  const ind = Math.floor(getRandomArbitrary(0,5));//---------------------определение (ind)
 
  

  

for (let t = 0; t < Summary_Voltage_Array.length; t++ ){//-------------------цикл расчета напряжений для каждого часа

 let some_array = resCellVoltages(Mass_Koeff[ind],Summary_Voltage_Array[t]);

 result_voltage_array[t] = some_array ;

 
 
}


for()
