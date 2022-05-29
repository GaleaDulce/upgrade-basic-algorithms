/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  
  function repeatCounter(list) {
    let auxList = [];
    list.forEach((item) => {
      if (!auxList.includes(item)) {
        auxList.push(item);
      }
    });
    
    let counter = 0;
    let auxObject = {};
    auxList.forEach((itemUnique) => {
      list.forEach((itemList) => {
        if (itemUnique == itemList) counter++;
      });
      auxObject[itemUnique] = counter;
      counter = 0;
    });
    return auxObject;
    
    }
    
    console.log(repeatCounter(counterWords));

  

      

    
  
