export function compareNumbers(inputEl, rightAnswer){
    if (inputEl === rightAnswer){
      return 0;
  }else if(inputEl < rightAnswer){
      return -1;
  
  }else if(inputEl > rightAnswer){
      return 1;
  };